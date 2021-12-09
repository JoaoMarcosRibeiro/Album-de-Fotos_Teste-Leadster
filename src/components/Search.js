import React from 'react';
import '../App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useAlbum } from '../Context';

const Search = () => {

    const { InputSearch } = useAlbum()

    return (

        <Col sm={4}>
            <Form.Label>
                <Form.Control title="Busca" type="text" onChange={InputSearch} placeholder="Buscar Fotos..." />
            </Form.Label>
        </Col>
    )
}

export default Search