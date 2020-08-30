import React, { useState } from "react";
import "./styles/app.css";

// import components
import Navbar from "../components/Navbar/index.js";
import SideMenu from "../components/SideMenu";
import List from "../components/List";

import { list } from "./data";

const App = () => {
  const [category, setCategory] = useState(0);
  const loadCategory = (i) => {
    setCategory(i);
  };
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <div className="row">
          <SideMenu loadCategory={loadCategory} />
          <div className="col-sm">
            <div className="row">
              <List category={category} data={list} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
