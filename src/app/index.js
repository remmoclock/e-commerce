import React from 'react';
import './styles/app.css';

// import components
import Navbar from '../components/Navbar/index.js';
import SideMenu from '../components/SideMenu';
import List from '../components/List';

import { list } from './data';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <div className="row">
          <SideMenu />
          <div className="col-sm">
          <div className="row">
            <List data={list} />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
