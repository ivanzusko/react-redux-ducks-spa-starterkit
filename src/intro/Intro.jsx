import React from 'react';

import logo from './logo.svg';

const Intro = () => <div className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <h2>Welcome to React Redux Ducks SPA starterkit</h2>
  <div>
    <img src="https://img.shields.io/badge/version-v1.0.0-brightgreen.svg" alt="react version"/>
  </div>
  <div>
    <img src="https://img.shields.io/badge/react-v15.6.0-brightgreen.svg" alt="react version"/>
    <img src="https://img.shields.io/badge/react--router-v4-brightgreen.svg" alt="react-router version"/>
    <img src="https://img.shields.io/badge/testing-jest-99424f.svg" alt="testing with jest"/>
    <img src="https://img.shields.io/badge/eslint-custom-463fd4.svg" alt="custom eslint config support"/>
  </div>
</div>;

export default Intro;
