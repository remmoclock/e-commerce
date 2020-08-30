import React, { useState, useEffect } from "react";
import "./styles/app.css";

// import components
import Navbar from "../components/Navbar/index.js";
import SideMenu from "../components/SideMenu";
import List from "../components/List";

import { list } from "./data";

const App = () => {
  const [category, setCategory] = useState(0);
  const [isFiltering, setFiltering] = useState(false);
  const [filtered, setFiltered] = useState(false);
  const loadCategory = (i) => {
    setCategory(i);
  };
  const filterResults = (input) => {
    let fullList = list.flat();
    let results = fullList.filter((item) => {
      const name = item.name.toLowerCase();
      const term = input.toLowerCase();
      return name.indexOf(term) > -1;
    });
    setFiltered(results)
  };
  useEffect(() => {});

  return (
    <div className="app">
      <Navbar filter={filterResults} setFiltering={setFiltering} />
      <div className="container">
        <div className="row">
          <SideMenu loadCategory={loadCategory} category={category} />
          <div className="col-sm">
            <div className="row">
              <List data={isFiltering ? filtered : list[category]} category={category} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
