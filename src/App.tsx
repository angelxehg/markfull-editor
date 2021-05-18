import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { basicExample } from './examples';

const ImageComponent = ({ ...props }) => (
  // eslint-disable-next-line jsx-a11y/alt-text
  <img className="img-fluid" {...props} />
)

const App = (): JSX.Element => {
  const [inputContent, setInputContent] = useState(basicExample);
  return (
    <div>
      <Container fluid className="pt-3 pb-3">
        <Row>
          <Col md="6">
            <div className="mb-3">
              <label htmlFor="inputContent" className="form-label">Contenido:</label>
              <textarea
                id="inputContent"
                className="form-control"
                rows={20}
                value={inputContent}
                onChange={(e) => setInputContent(e.target.value)}
              />
            </div>
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
