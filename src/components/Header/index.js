import React from "react";


const Nav = (props) => {
  const tabs = ["About Me", "Projects"];

  return (
        <div className="nav-wrapper white">
           <h1 className="brand-logo">ALEXANDRA KELSTROM</h1>
          <h5 class="subheader">Full-Stack Web Developer</h5>
          <ul className="center">
            {tabs.map((tab) => (
              <li key={tab}
              className>
                <a
                  href={`#${tab.toLowerCase()}`}
                  onClick={() => props.handlePageChange(tab)}
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
  );
};

export default Nav;
