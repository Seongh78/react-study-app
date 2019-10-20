import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from 'routes';
import Navbar from 'components/Navbar';
import 'assets/styles/bootstrap.min.css';

/**
 * App
 * --
 */
const App = () => {

  /* RENDER */
  return (  
    <BrowserRouter>
      <div>
        {/* Nav */}
        <Navbar />
        {/* Router */}
        <div className="container">
          <Routes/>
        </div>
      </div>
    </BrowserRouter>
  );
}
 
export default App;