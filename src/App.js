import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './components/Topbar/Topbar';
import Bottom from './components/Bottom/Bottom';


function App() {
  return (
    <div>
    <Topbar/>
    <Bottom/>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React!
    //     </a>
    //     <Topbar/>
    //   </header>
    // </div>
  );
}

export default App;
