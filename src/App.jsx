import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisenoPrincipal from './layouts/DisenoPrincipal';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DisenoPrincipal />}>
          <Route index element={<Home />} />
          <Route path="servicios" element={<Services />} />
          <Route path="nosotros" element={<About />} />
          <Route path="contacto" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;