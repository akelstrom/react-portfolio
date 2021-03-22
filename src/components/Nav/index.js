import React from "react";

const Nav = (props) => {
  const tabs = ["About Me", "Projects"];

  return (
        <div className="nav-wrapper white">
          <ul className="right" id="mobile-demo">
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
