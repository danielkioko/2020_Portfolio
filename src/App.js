import React from 'react';
import { StyleSheet } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

    <ul className="topNav">
      <li className="item"><a href="https://www.github.com/danielkioko"><img className="github"/></a></li>
      <li className="item"><a href="http://linkedin.com/in/daniel-n-421b22163/"><img className="linkedin"/></a></li>
      <li className="item"><a href="mailto:itsdanielkioko@outlook.com"><img className="mail"/></a></li>
    </ul>

    <div class="wrapper">
      <header>
          <h1>DANIEL KIOKO</h1>
          <p>Software Developer</p>
      </header>
    </div>

    {/* <div className="seeProjects">
      <a className="projectsLink">See some projects</a>
    </div> */}

      <footer>
          <p>ⓒ 2020 · DanielKioko</p>
      </footer>

    </div>
  );
}

export default App;
