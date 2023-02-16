import React from 'react';
import './Header.css';


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div className="header-left">
          <img src="/components/header/logo.jpg" height="70"></img>
          <div className="header-title">NULL</div>
          <div className="header-block">A</div>
          <div className="header-block">B</div>
        </div>
        <div className="header-right">
          <div className="header-block">Login</div>
          <div className="header-block">Register</div>
        </div>
      </div>
    );
  }
}

export default Header;
