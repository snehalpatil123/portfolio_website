import React from 'react';
import './App.css';
import Navbar from '../src/Navbar/Navbardata'
import Scrolldown from './Component/scrolldown/scrolldown';
import About from './Component/About/about';
import Blogs from './Component/Blogs/Blogs';
import Contact from './Component/Contact/Contact';
import Titlemessage from './Component/Titlemessage/Titlemessage';
import SkillsData from './Component/SkillsData/SkillsData';
import Footer from './Component/Footor/Footer';

function App() {
  return (
    <>

      <Navbar/>
      <Titlemessage />
      <Scrolldown />
      <About />
      <SkillsData/>
      <Blogs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
