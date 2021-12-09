import React from 'react';
import '../App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Pagination from 'react-bootstrap/Pagination';
import $ from 'jquery';
import { useAlbum } from '../Context';

const Paginations = () => {

  const { currentPage, setCurrentPage, pages } = useAlbum()

  return (

    <Row className='border-top border-dark pt-3 mb-5'>
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
  )
}

export default Paginations