import React, { useState } from "react";
import Projects from "../Pages/Projects/";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Nav from "../Nav";

const Portfolio = () => {
  //set up state
  const [currentPage, handlePageChange] = useState("Projects");

  //render the page
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case "Projects":
        return <Projects />;
      case "Home" :
        return <Projects />
      default:
        return <Projects />;
    }
  };

  return (
    <div className="header">
      <h1 className="name">ALEXANDRA KELSTROM</h1>
    <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
    <div>
      {renderPage(currentPage)}
    </div>
  </div>
  );
};

export default Portfolio;
