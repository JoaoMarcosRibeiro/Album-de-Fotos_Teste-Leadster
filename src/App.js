import React, { useState, useEffect } from 'react';
import ApiPexels from './services/ApiPexels';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Header from './components/Header';
import Select from './components/Select';
import Search from './components/Search';
import Pagination from './components/Pagination'
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
    } else {

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

  return (
    <div className="App">
      <Header />

      <Container>
        <Row>
          <Select setLimit={setLimit} setCurrentPage={setCurrentPage} />
          <Search setSearchPhotos={setSearchPhotos} setCurrentPage={setCurrentPage} />
        </Row>

        <Row>
          {photos.map((foto) => (
            <Col className="mt-5 mb-5" key={foto.id} sm={4}>
              <Image src={foto.src.tiny} alt="" />
            </Col>
          ))}
        </Row>

        <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </Container>

      <Footer />
    </div>
  );
}