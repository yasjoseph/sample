import React from 'react';

import './App.css';
import Header from './component/header';
import Main from './component/main';
import Cycle from './component/Cycle';
// import Employee from './component/employee';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="App-header">

        <BrowserRouter>
          <Header></Header>
          <Main></Main>
          <Cycle></Cycle>

        </BrowserRouter>
        {/* <Tbl></Tbl>
        <Login></Login>
        <Signup></Signup>
         <Pnf></Pnf>
         */}


      </div>
    </div>
  );
}

export default App;
