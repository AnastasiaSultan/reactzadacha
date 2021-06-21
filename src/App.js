
import './App.css';
import Header from './components/Header';
import Item from './components/Item';
import ItemList from './components/ItemList';
import Search from './components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <>
    <Container>
  <Row>
    <Col><Header></Header></Col>
  </Row>
   <Row>
    <Col sm={4}>
    <Search></Search>
    <ItemList></ItemList>
    </Col>
   
    
    <Col><Item></Item></Col>
    </Row>
    
   
    </Container>
    </>
  );
}

export default App;
