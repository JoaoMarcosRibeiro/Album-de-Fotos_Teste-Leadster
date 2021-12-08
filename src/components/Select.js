import React, { useCallback } from 'react';
import '../App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const Select = (props) => {

    const limits = useCallback((e) => {
        props.setLimit(e.target.value);
        props.setCurrentPage(1);
    }, [props]);

    return (

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
    )
}

export default Select