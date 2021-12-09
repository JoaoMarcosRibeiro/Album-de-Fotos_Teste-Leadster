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

    <Row>
      {photos.map((foto) => (
        <Col className="mt-5 mb-5" key={foto.id} sm={4}>
          <Image src={foto.src.tiny} alt="" />
        </Col>
      ))}
    </Row>
  )
}

export default Photos