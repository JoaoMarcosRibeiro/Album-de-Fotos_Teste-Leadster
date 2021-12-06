import React, { useState, useEffect, useCallback } from 'react';
import ApiPexels from './services/ApiPexels';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';
import $ from 'jquery';
import Header from './components/Header';
import Footer from './components/Footer';


export default function App() {

  const [photos, setPhotos] = useState([]);
  const [limit, setLimit] = useState(6);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setSearchPhotos] = useState('');
  const [total, setTotal] = useState(0);

  useEffect(() => {

    if (!query) {

      async function loadPhotos() {

        await ApiPexels().photos
          .curated({ page: currentPage, per_page: limit })
          .then((response) => setPhotos(response.photos))
          .catch(error => console.log(error));

        const totalPages = 10;

        const arrayPages = [];
        for (let i = 1; i <= totalPages; i++) {
          arrayPages.push(i);
        }

        setPages(arrayPages);

      }

      loadPhotos();
    }

    else {

      async function searchPhotos() {

        await ApiPexels().photos
          .search({ query, page: currentPage, per_page: limit })
          .then((response) => {
            return (
              setTotal(response.total_results),
              setPhotos(response.photos)
            )
          })
          .catch(error => console.log(error));

        const totalPages = Math.ceil(total / limit);

        const totalPageMax = 10;

        const arrayPages = [];

        if (totalPages <= totalPageMax) {

          for (let i = 1; i <= totalPages; i++) {
            arrayPages.push(i);
          }

          setPages(arrayPages);

        } else {
          for (let i = 1; i <= totalPageMax; i++) {
            arrayPages.push(i);
          }

          setPages(arrayPages);
        }

      }

      searchPhotos();
    }

  }, [currentPage, limit, query, total]);

  const limits = useCallback((e) => {
    setLimit(e.target.value);
    setCurrentPage(1);
  }, []);

  const InputSearch = useCallback((e) => {
    setSearchPhotos(e.target.value);
    setCurrentPage(1);
  }, []);

  return (
    <div className="App">
      <Header />

      <Container>
        <Row>
          <Col sm={8}>
            <Form.Group>
              <Form.Label><h5>Quantidade de fotos por página:</h5></Form.Label>
              <Form.Select onChange={limits} >
                <option value="6">6</option>
                <option value="30">30</option>
                <option value="60">60</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col sm={4}>
            <Form.Control type="text" onChange={InputSearch} placeholder="Buscar..." />
          </Col>
        </Row>

        <Row>
          {photos.map((foto) => (
            <Col className="mt-5 mb-5" key={foto.id} sm={4}>
              <Image src={foto.src.tiny} alt="" />
            </Col>
          ))}
        </Row>

        <Row>
          <Pagination className="justify-content-md-center">
            {currentPage > 1 && (
              <Pagination.Item onClick={() => { setCurrentPage(currentPage - 1); $(window).scrollTop(0); }}> Anterior </Pagination.Item>
            )}

            {pages.map((page) => (
              <Pagination.Item active={page === currentPage} key={page} onClick={() => { setCurrentPage(page); $(window).scrollTop(0); }}> {page} </Pagination.Item>
            ))}

            {currentPage < pages.length && (
              <Pagination.Item onClick={() => { setCurrentPage(currentPage + 1); $(window).scrollTop(0); }}> Proxima </Pagination.Item>
            )}
          </Pagination>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}