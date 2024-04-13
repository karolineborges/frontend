import './App.css';
import Navbar from './components/Navbar'
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Adoption from './pages/Adoption';
import Container from './components/Container';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Container>
          <Routes>
            <Route exact path="/adoption" element={<Adoption />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
