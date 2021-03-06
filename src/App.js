import React, { Fragment } from 'react';
import Home from './components/home.jsx';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from "./components/footer.jsx";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './router.jsx';
import styled from 'styled-components';

const Container = styled.div`
  margin: auto;
  max-width: 600px;
  
  padding: 16px;
`;

function App() {
    return (
	<Router>

	<Container>
	    <Routes />

	    </Container>
	<Footer />
	    </Router>

    )
}

export default App;
