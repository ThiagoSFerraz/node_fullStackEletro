import Menu from './components/menu';

import { BrowserRouter } from 'react-router-dom';
import  Rotas  from './rotas';

import { Container } from 'react-bootstrap';
import './app.css'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
           <Menu/>
        </header>
        <main>
          <Container fluid>
            <Rotas />
          </Container>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
