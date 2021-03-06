import React from "react"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Provider } from 'react-redux'

import Greeting from './Greeting'

import configureStore from "../configureStore"

const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Greeting />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
