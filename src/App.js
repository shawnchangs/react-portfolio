import './App.css';
import React from 'react';

import About from './components/About/';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import Resume from './components/Resume';


function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
