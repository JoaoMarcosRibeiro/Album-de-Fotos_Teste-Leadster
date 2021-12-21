import React from 'react';
import '../App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useAlbum } from '../Context';

const Photos = () => {

  const { photos } = useAlbum()

  return (

    <Row className='photos'>
      {photos.map((foto) => (
        <Col className="mt-5 mb-5" key={foto.id} sm={4}>
          <a href={foto.src.original} target="_blank" rel="noopener noreferrer"><Image src={foto.src.tiny} alt="" /></a>
        </Col>
      ))}
    </Row>
  )
}

export default Photos