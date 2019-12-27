import React from 'react';

import './App.css';
import Header from './component/header';
import Login from './component/login'
import Signup from './component/signup';
import Tbl from './component/table';
import Pnf from './component/pnf';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header></Header>
         <Tbl></Tbl>
        <Login></Login>
        <Signup></Signup>
        
          <Pnf></Pnf>
      </div>
    </div>
  );
}

export default App;
