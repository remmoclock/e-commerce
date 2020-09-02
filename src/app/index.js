import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/app.css";

// import components
import Cart from "../components/Cart";
import Home  from "../components/Home";
import Navbar from "../components/Navbar";

import { list } from "./data";

const App = () => {
  const [category, setCategory] = useState(0);
  const [isFiltering, setFiltering] = useState(false);
  const [filtered, setFiltered] = useState(false);
  const [count, setCount] = useState(0);
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
    setFiltered(results);
  };
  useEffect(() => {});

  return (
    <div className="app">
      <Router>
        <Navbar
          filter={filterResults}
          setFiltering={setFiltering}
          count={count}
        />
        {/* Routes */}
        <Route
          exact
          path="/"
          component={() => (
            <Home
              category={category}
              loadCategory={loadCategory}
              addToCart={setCount}
              list={list}
              isFiltering={isFiltering}
              filtered={filtered}
              count={count}
            />
          )}
        />
        <Route path="/cart" component={Cart} />
      </Router>
    </div>
  );
};
export default App;
