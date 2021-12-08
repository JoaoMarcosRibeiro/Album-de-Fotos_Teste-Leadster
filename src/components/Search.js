import React, { useCallback } from 'react';
import '../App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const Search = (props) => {

    const InputSearch = useCallback((e) => {
        props.setSearchPhotos(e.target.value);
        props.setCurrentPage(1);
    }, [props]);

    return (

        <Col sm={4}>
            <Form.Control type="text" onChange={InputSearch} placeholder="Buscar..." />
        </Col>
    )
}

export default Search