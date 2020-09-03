import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AppContainer } from "./app/redux/index";
import { store } from "./app/redux/store ";

// Log the initial state
console.log(store.getState())
const unsubscribe = store.subscribe(() => console.log(store.getState()))
//store.dispatch(addtoCart({name: "citron"}, 2))
//store.dispatch(addtoCart({name: "kiwi"}, 5))
unsubscribe()

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);
