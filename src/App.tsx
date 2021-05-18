import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { basicExample } from './examples';

const App = (): JSX.Element => {
  const [inputContent, setInputContent] = useState(basicExample);
  return (
    <div>
      <Container fluid className="pt-3 pb-3">
        <Row>
          <Col>
            <textarea
              className="w-100"
              rows={20}
              value={inputContent}
              onChange={(e) => setInputContent(e.target.value)}
            />
          </Col>
          <Col>
            <ReactMarkdown>
              {inputContent}
            </ReactMarkdown>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
