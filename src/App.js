import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Landing from './pages/landing/landing';
import About from './pages/about';
import Contact from './pages/contact/contact';
import Codefolio from './pages/codefolio/codefolio';
import Photofolio from './pages/photofolio/photofolio';
import Footer from './components/footer';

function App() {
  return (
    <Router>

      <body className="body">

        <Navbar />

        <Route exact path="/" component= {Landing}  />
        <Route exact path="/React-Portfolio" component= {Landing}  />
        <Route exact path="/contact" component= {Contact}  />
        <Route exact path="/about" component= {About}  />
        <Route exact path="/code" component= {Codefolio}  />
        <Route exact path="/gallery" component= {Photofolio}  />

        <Footer />

      </body>
      
    </Router>
  );
}

export default App;
