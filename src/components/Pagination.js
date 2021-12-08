import React from 'react';
import '../App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Pagination from 'react-bootstrap/Pagination';
import $ from 'jquery';

const Search = (props) => {

    const currentPage = props.currentPage;
    const pages = props.pages;

    return (

        <Row>
          <Pagination className="justify-content-md-center">
            {currentPage > 1 && (
              <Pagination.Item onClick={() => { props.setCurrentPage(currentPage - 1); $(window).scrollTop(0); }}> Anterior </Pagination.Item>
            )}

            {pages.map((page) => (
              <Pagination.Item active={page === currentPage} key={page} onClick={() => { props.setCurrentPage(page); $(window).scrollTop(0); }}> {page} </Pagination.Item>
            ))}

            {currentPage < props.pages.length && (
              <Pagination.Item onClick={() => { props.setCurrentPage(currentPage + 1); $(window).scrollTop(0); }}> Proxima </Pagination.Item>
            )}
          </Pagination>
        </Row>
    )
}

export default Search