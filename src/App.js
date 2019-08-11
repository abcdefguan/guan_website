import React from 'react';

//Include Bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//Include CSS
import './App.css';

//Include React Router
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Header} from './components/Header';

//Include Components
import {Home} from './components/home';
import {Footer} from './components/footer';
import {Projects} from './components/projects';
import {Hosted} from './components/hosted';
import {Contact} from './components/contact';

//Include Container
import {Container} from 'react-bootstrap';

function App() {
  //Todo: create footer
  return (
    <Router>
      <div className = "container-fluid">
        <Header />
        <Container>
          <div className = 'content-pill'>
            <Route exact path = '/' component = { Home } />
            <Route path = '/projects' component = { Projects } />
            <Route path = '/hosted' component = { Hosted } />
            <Route path = '/contact' component = { Contact } />
          </div>
          <Footer />
        </Container>
      </div>
    </Router>
  );
}

export default App;
