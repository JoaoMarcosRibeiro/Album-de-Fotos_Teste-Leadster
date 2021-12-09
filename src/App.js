import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from './components/Header';
import Select from './components/Select';
import Search from './components/Search';
import Photos from './components/Photos';
import Pagination from './components/Pagination';
import Footer from './components/Footer';

export default function App() {

  return (
    <div className="App">
      <Header />

      <Container>
        <Row>
          <Select />
          <Search />
        </Row>

        <Photos />

        <Pagination />
      </Container>

      <Footer />
    </div>
  );
}