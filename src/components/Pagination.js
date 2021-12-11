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
        {currentPage > 2 && (
          <Pagination.Item onClick={() => { setCurrentPage(1); $(window).scrollTop(0); }}> {1} </Pagination.Item>
        )}
        {currentPage > 2 && (
          <Pagination.Ellipsis />
        )}

        {pages.map((page) => {
          if (page < currentPage + 2 && page > currentPage - 2) {
            return <Pagination.Item active={page === currentPage} key={page} onClick={() => { setCurrentPage(page); $(window).scrollTop(0); }}> {page} </Pagination.Item>
          }
          return null
        })}

        {currentPage < pages.length - 2 && (
          <Pagination.Ellipsis />
        )}
        {currentPage < pages.length - 1 && (
          <Pagination.Item onClick={() => { setCurrentPage(pages.length); $(window).scrollTop(0); }}> {pages.length} </Pagination.Item>
        )}
        {currentPage < pages.length && (
          <Pagination.Item onClick={() => { setCurrentPage(currentPage + 1); $(window).scrollTop(0); }}> Proxima </Pagination.Item>
        )}
      </Pagination>
    </Row>
  )
}

export default Paginations