import React from 'react';


const Nav = (props) => {
    const tabs = ['About', 'Contact', 'Projects','Home'];

    return (
        <ul className="flexers">
            {tabs.map(tab => (
                <li 
                key={tab}>
                    <a href={`#${tab.toLowerCase()}`}
                    onClick={() => props.handlePageChange(tab)}>
                    {tab}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Nav;