import React, { useEffect, useState, useRef } from "react";
import BloaterLogo from './assets/images/bloater_logo.png'
import { BrowserRouter as Router,Routes, Route, Link, Switch } from 'react-router-dom';
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import { useDispatch, useSelector } from "react-redux";



function Navbar (){   
        document.addEventListener('DOMContentLoaded', () => {

            // Get all "navbar-burger" elements
            const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
          
            // Check if there are any navbar burgers
            if ($navbarBurgers.length > 0) {
          
              // Add a click event on each of them
              $navbarBurgers.forEach( el => {
                el.addEventListener('click', () => {
          
                  // Get the target from the "data-target" attribute
                  const target = el.dataset.target;
                  const $target = document.getElementById(target);
          
                  // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                  el.classList.toggle('is-active');
                  $target.classList.toggle('is-active');
          
                });
              });
            }
          
          });

    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);

    const getData = () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
          dispatch(fetchData(blockchain.account));
        }
      };
    
    useEffect(() => {
      getData();
    }, [blockchain.account]);


    useEffect(() => {
        return () => {
            document.removeEventListener('DOMContentLoaded') 
        }
    }, [])

    return (
        <>
            <nav class="navbar is-transparent is-black is-fixed-top" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item">
                    <img src={BloaterLogo} width="30" height="30" class="is-rounded" />
                    </a>

                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                    <a class="navbar-item">
                        <Link to="/" style={{color:"#D1B000"}}>HOME</Link>
                    </a>
                    <a class="navbar-item">
                        <Link to="/mint" style={{color:"#D1B000"}}>MINT</Link>
                    </a>
                    <a class="navbar-item">
                        <Link to="/dao" style={{color:"#D1B000"}}>DAO</Link>
                    </a>
                    <a class="navbar-item">
                        <Link to="/roadmap" style={{color:"#D1B000"}}>ROADMAP</Link>
                    </a>
                    <a class="navbar-item">
                        <Link to="/docs" style={{color:"#D1B000"}}>DOCS</Link>
                    </a>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                        MORE
                        </a>

                        <div class="navbar-dropdown">
                        <a class="navbar-item">
                            About
                        </a>
                        <a class="navbar-item">
                            Contact
                        </a>
                        <hr class="navbar-divider"/>
                        <a class="navbar-item">
                            Report an issue
                        </a>
                        </div>
                    </div>
                    </div>
                    <div class="navbar-end">
                    <div class="navbar-item">
                        
                        {blockchain.account === "" ||
                            blockchain.smartContract === null ? (
                                <div class="buttons">
                                    <a class="button is-primary"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            dispatch(connect());
                                            getData();
                                          }}  
                                    >
                                        <strong>CONNECT WALLET</strong>
                                    </a>
                                </div>
                            ) :
                            <p class="subtitle"
                            fontSize='medium'
                            fontWeight='bold'
                            >
                             "Connected to Harmony!"
                            </p>
                        }

                    </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;

