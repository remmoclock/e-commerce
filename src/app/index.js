import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./styles/app.css"
import { list } from "./data"
import UserProfileContextProvider from "../app/context/UserProfileContext"

// import components
import CartPage from "../components/CartPage"
import Home from "../components/Home"
import Navbar from "../components/Navbar"
import { Checkout } from "../components/Checkout"
import { Confirm } from "../components/Confirm"
import Error from "../components/404"

const App = (props) => {
  const { items, saveLocalStorage } = props
  const [category, setCategory] = useState(0)
  const [isFiltering, setFiltering] = useState(false)
  const [filtered, setFiltered] = useState(false)
  const [count] = useState(0)
  const loadCategory = (i) => {
    setCategory(i)
  }
  const filterResults = (input) => {
    let fullList = list.flat()
    let results = fullList.filter((item) => {
      const name = item.name.toLowerCase()
      const term = input.toLowerCase()
      return name.indexOf(term) > -1
    })
    setFiltered(results)
  }
  useEffect(() => {
    saveLocalStorage(items, saveLocalStorage)
  }, [items, saveLocalStorage])

  return (
    <div className="app">
      <Router>
        <UserProfileContextProvider>
          <Navbar
            filter={filterResults}
            setFiltering={setFiltering}
            count={count}
          />
          {/* Routes */}
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Home
                  category={category}
                  loadCategory={loadCategory}
                  list={list}
                  isFiltering={isFiltering}
                  filtered={filtered}
                />
              )}
            />
            <Route exact path="/cart" component={CartPage} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/confirm" component={Confirm} />
            <Route component={Error} />
          </Switch>
        </UserProfileContextProvider>
      </Router>
    </div>
  )
}
export default App
