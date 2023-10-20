import React from 'react';
import './footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div id='footer'>
        <Container>
            <Row>
                <Col md={4} className='footer-col'>
                    <h5>Email</h5>
                    <p>elkahlamed@gmail.com</p>
                </Col>
                <Col md={4} className='footer-col'>
                    <h5>Phone</h5>
                    <p>(+216) 56 452 052</p>
                </Col>
                <Col md={4} className='footer-col'>
                    <h5>Social Media</h5>
                    <div className='social-links'>
                        <a href='https://www.linkedin.com/in/mohamed-el-kahla-19743095/' target='_blank' rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href='https://github.com/medkahla' target='_blank' rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default Footer