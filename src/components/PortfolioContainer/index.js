import React, { useState } from "react";
import Projects from "../Pages/Projects/";
import Footer from "../Footer";
import Header from "../Header";
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
    <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
    <div>
      {renderPage(currentPage)}
    </div>
    <Footer />
  </div>
  );
};

export default Portfolio;
