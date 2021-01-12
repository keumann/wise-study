import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; import
  'bootstrap-css-only/css/bootstrap.min.css'; import
  'mdbreact/dist/css/mdb.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import BottomNavigation from './components/BottomNavigation';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
        <Container className="layout">
          <BrowserRouter>
            <Header />
            <Content />
            <BottomNavigation />
          </BrowserRouter>
        </Container>
    </div>
  );
}

export default App;
