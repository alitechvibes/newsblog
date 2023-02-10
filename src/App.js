import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
export default class App extends Component {
  ali = "Ali Hassan ";
  render() {
    return (
      <>
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route exact path='/general' element={<News key="general" pageSize={6} country={"in"} category={"general"} />} />
            <Route exact path='/business' element={<News key="business" pageSize={6} country={"in"} category={"business"} />} />
            <Route exact path='/entertainment' element={<News key="entertainment" pageSize={6} country={"in"} category={"entertainment"} />} />
            <Route exact path='/health' element={<News key="health" pageSize={6} country={"in"} category={"health"} />} />
            <Route exact path='/science' element={<News key="science" pageSize={6} country={"in"} category={"science"} />} />
            <Route exact path='/sports' element={<News key="sports" pageSize={6} country={"in"} category={"sports"} />} />
            <Route exact path='/technology' element={<News key="technologyd" pageSize={6} country={"in"} category={"technology"} />} />
            <Route path='*' element={<News key="general" pageSize={6} country={"in"} category={"general"} />} />
        </Routes>
      </BrowserRouter>
      </>
    )
  }
}

