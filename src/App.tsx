import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import TextareaAutosize from 'react-textarea-autosize';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';

import { basicExample, imageExample } from './examples';

const ImageComponent = ({ ...props }) => (
  // eslint-disable-next-line jsx-a11y/alt-text
  <img className="img-fluid" {...props} />
)

const App = (): JSX.Element => {
  const [inputContent, setInputContent] = useState(basicExample);
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
        <Container fluid>
          <Navbar.Brand>Markfull</Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title="Ejemplos" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => setInputContent(basicExample)}>
                Básico
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setInputContent(imageExample)}>
                Imagenes
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <Container fluid className="pt-3 pb-3">
        <Row>
          <Col md="6">
            <TextareaAutosize
              id="inputContent"
              className="form-control"
              style={{
                overflow: 'hidden'
              }}
              rows={20}
              value={inputContent}
              onChange={(e) => setInputContent(e.target.value)}
            />
          </Col>
          <Col md="6">
            <ReactMarkdown components={{
              img: ImageComponent
            }}>
              {inputContent}
            </ReactMarkdown>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
