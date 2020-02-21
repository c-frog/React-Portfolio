import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/navbar';
import Landing from './pages/landing/landing';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import CodeFolio from './pages/codefolio/codefolio';
// import Photofolio from './pages/photofolio/photofolio';
// import Footer from './components/footer/footer';

function App() {
  return (
    <Router>

      <body className="body">

        <Navbar />

        <Route exact path="/" component= {Landing}  />
        <Route exact path="/React-Portfolio" component= {Landing}  />
        <Route exact path="/contact" component= {Contact}  />
        <Route exact path="/about" component= {About}  />
        <Route exact path="/code" component= {CodeFolio}  />
        {/* <Route exact path="/gallery" component= {Photofolio}  /> */}

        {/* <Footer /> */}

      </body>
      
    </Router>
  );
}

export default App;
