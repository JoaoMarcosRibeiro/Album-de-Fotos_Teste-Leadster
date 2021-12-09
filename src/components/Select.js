import React from 'react';
import '../App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useAlbum } from '../Context';

const Select = () => {

    const { limits } = useAlbum()

    return (

        <Col sm={8}>
            <Form.Group>
                <Form.Label title="Quantidade de fotos por página"><h5>Quantidade de fotos por página:</h5></Form.Label>
                <Form.Select onChange={limits} >
                    <option title="6" value="6">6</option>
                    <option title="30" value="30">30</option>
                    <option title="60" value="60">60</option>
                </Form.Select>
            </Form.Group>
        </Col>
    )
}

export default Select