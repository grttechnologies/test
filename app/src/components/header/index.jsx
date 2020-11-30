import React from 'react';
import './index.css';


function Header(props) {
  return (
    <div className="headerContainer">
      <p className="headerTitleStyle">{props.heading || 'Heading Text'}</p>
    </div>
  );
}

export default Header;
