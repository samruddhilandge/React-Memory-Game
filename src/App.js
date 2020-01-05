import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import {BrowserRouter} from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
      <div> 
      <Main/>
      </div>
      </BrowserRouter>
  );
}

export default App;
