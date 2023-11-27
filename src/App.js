import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Menu from './components/Menu';
import Rodape from './components/Rodape';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Cardapio from './components/pages/Cardapio';
import Contato from './components/pages/Contato';


function App() {
  return (
    <div>
      <Container fluid>

        <BrowserRouter>
          <Row>
            <Col>
              {/* Aqui vai o navbar */}
              <Menu />
            </Col>
          </Row>

          <Row>
            {/* Aqui vai o conteudo(rotas) do site */}
            <Col>
              {/* Rotas */}
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/cardapio" element={<Cardapio />} />
                <Route path="/contato" element={<Contato />} />
          </Routes>
            </Col>
          </Row>
        </BrowserRouter>

        <Row>
          {/* Aqui vai o rodapé */}
          <Rodape />
        </Row>

      </Container>
    </div>
  );
}

export default App;
