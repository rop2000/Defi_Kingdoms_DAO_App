import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import Countdown from './Countdown.js'
import Navbar from './Navbar.js'
import Roadmap from './Roadmap.js'
import Docs from './Docs.js'
import Dao from './Dao.js'
import Minter from './Mint.js'

import { BrowserRouter as Router,Routes, Route, Link, Switch } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";


class App extends Component{
  // constructor(props) {
  //   super(props);

  //   this.inputRef = React.createRef();
  //   // this.inputRef.current is null here
  // }

  // componentDidMount() {
  //   const script = document.createElement("script");

  //   script.src = "../countdown.js";
  //   script.async = true;

  //   document.body.appendChild(script);
  // }

  render() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
    {/* <AnimatePresence> */}
        <Route exact path='/' element={< Countdown />}></Route>
        <Route path='/roadmap' element={< Roadmap />}></Route>
        <Route path='/dao' element={< Dao />}></Route>
        <Route path='/mint' element={< Minter />}></Route>
        <Route path='/docs' element={< Docs />}></Route>
        <Route path='/about' element={< Countdown />}></Route>
        <Route path='/timeline' element={< Countdown />}></Route>
    {/* </AnimatePresence> */}
    </Routes>
    {/* <Countdown></Countdown> */}
    </>
  );
  }
}

export default App;
