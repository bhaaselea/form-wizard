import React from 'react';
import logo from '../../assets/images/logo-transparent-2.png';
import './index.css';

export default function Header() {
  return (
    <header id="app-header">
      <img src={logo} className="app-logo" alt="logo" />
    </header>
  );
}
