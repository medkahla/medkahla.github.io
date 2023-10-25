import React from 'react';
import './style.css'
import About from "./components/About/About";
import ContactForm from "./components/Contact/ContactMe";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Services from "./components/Services/Services";


function App() {

  return (
      <div className="App">
          <NavBar/>
          <About/>
          <Services/>
          <Skills/>
          <Projects/>
          <Experience/>
          <ContactForm />
          <Footer/>
      </div>
  );
}

export default App;
