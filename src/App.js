import Product from "./components/Products/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import './App.css'

function App() {
  return (
    <div className="App">

      <Container>
        <Product />
      </Container>
      
    </div>
  );
}

export default App;
