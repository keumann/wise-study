import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <Row>
            <Col>
              <Button variant="primary">안녕</Button>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
