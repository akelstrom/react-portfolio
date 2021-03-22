import React, { useState } from "react";
import Projects from "../Pages/Projects/";
import Contact from "../Contact";
import Nav from "../Nav";
import About from "../Pages/About";


const Portfolio = () => {
  //set up state
  const [currentPage, handlePageChange] = useState("Projects");

  //render the page
  const renderPage = () => {
    switch (currentPage) {
      case "About Me":
        return <About />;
      case "Projects":
        return <Projects />;
      default:
        return <Projects />;
    }
  };

  return (
    <div className="container">
    <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
    <a href="Home" className="brand-logo">
            ALEXANDRA KELSTROM
          </a>
    <Contact className="about-me"></Contact>
    <div>
      {renderPage(currentPage)}
    </div>
  </div>
  );
};

export default Portfolio;
