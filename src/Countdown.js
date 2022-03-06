import Roadmap from './Roadmap.js';
import React, { Component } from "react";
import { unmountComponentAtNode, render } from "react-dom";
import { BrowserRouter as Router,Routes, Route, Link, Switch } from 'react-router-dom';

// if (performance.getEntriesByType('navigation')[0].type != 'navigate') {
//     document.getElementById("snow-canvas").remove();
// }

class Snowflake {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.vx = 0;
      this.vy = 0;
      this.radius = 0;
      this.alpha = 0;
  
      this.reset();
    }
  
    reset() {
      this.x = this.randBetween(0, window.innerWidth);
      this.y = this.randBetween(0, -window.innerHeight);
      this.vx = this.randBetween(-3, 3);
      this.vy = this.randBetween(2, 5);
      this.radius = this.randBetween(1, 4);
      this.alpha = this.randBetween(0.1, 0.9);
    }
  
    randBetween(min, max) {
      return min + Math.random() * (max - min);
    }
  
    update() {
      this.x += this.vx;
      this.y += this.vy;
  
      if (this.y + this.radius > window.innerHeight) {
        this.reset();
      }
    }
  }
  
  class Snow {
    constructor() {
      this.canvas = document.createElement("canvas");
      this.canvas.setAttribute("id", "snow-canvas");
      this.ctx = this.canvas.getContext("2d");
  
      document.body.appendChild(this.canvas);

      window.addEventListener("resize", () => this.onResize());
      this.onResize();
      this.updateBound = this.update.bind(this);
      requestAnimationFrame(this.updateBound);
  
      this.createSnowflakes();
    }
  
    onResize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.canvas.width = this.width;
      this.canvas.height = this.height;
    }
  
    createSnowflakes() {
      const flakes = window.innerWidth / 4;
  
      this.snowflakes = [];
  
      for (let s = 0; s < flakes; s++) {
        this.snowflakes.push(new Snowflake());
      }
    }
  
    update() {
      this.ctx.clearRect(0, 0, this.width, this.height);
  
      for (let flake of this.snowflakes) {
        flake.update();
  
        this.ctx.save();
        this.ctx.fillStyle = "#FFF";
        this.ctx.beginPath();
        this.ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.globalAlpha = flake.alpha;
        this.ctx.fill();
        this.ctx.restore();
      }
      requestAnimationFrame(this.updateBound);
    }

  }
  
//   new Snow();
  
  ////////////////////////////////////////////////////////////
  // Simple CountDown Clock
  
  function getTrueNumber(num) {
    return num < 10 ? "0" + num : num;
  }
  
  function calculateRemainingTime() {
    const d = document.getElementById("d");
    const h = document.getElementById("h");
    const m = document.getElementById("m");
    const s = document.getElementById("s");
    const ms = document.getElementById("ms");
  
    const comingYear = new Date().getFullYear() + 0;
    const comingDate = new Date(`Feb 14, ${comingYear} 00:00:00 EST`);
  
    const now = new Date();
    const remainingTime = comingDate.getTime() - now.getTime();
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((remainingTime % (1000 * 60)) / 1000);
    const millisecs = Math.floor((remainingTime % (1000 )) );
  
    d.innerHTML = getTrueNumber(days);
    h.innerHTML = getTrueNumber(hours);
    m.innerHTML = getTrueNumber(mins);
    s.innerHTML = getTrueNumber(secs);
    ms.innerHTML = getTrueNumber(millisecs);
  
    return remainingTime;
  }
  
  function initCountdown() {  
    const interval = setInterval(() => {
      const remainingTimeInMs = calculateRemainingTime();
  
      if (remainingTimeInMs <= 1) {
        clearInterval(interval);
        initCountdown();
      }
    }, 1);
  }
  
initCountdown();

class Countdown extends Component{
    constructor(props){
        super(props);
        this.state = {
            snow: null,
            flag: false,
        }
    //    new Snow();
    }
    componentDidMount(){
        
    }
    componentDidUnmount(){
        // unmountComponentAtNode(document.getElementById('snow-canvas'));
        document.getElementById("snow-canvas").remove();
        
    }
    
    componentWillMount(){
        new Snow();
    }
    render(){
    return(
        <div class="middle">
            <h1 class="bbd-label">BIG BLOATER DAO MINT
            </h1>
            <div class="time">
                <span>
                <div id="d">00</div>
                Days
                </span>
                <span>
                <div id="h">00</div>
                Hours
                </span>
                <span>
                <div id="m">00</div>
                Minutes
                </span>
                <span>
                <div id="s">00</div>
                Seconds
                </span>
                <span>
                <div id="ms">00</div>
                MilliSeconds
                </span>
            </div>
            <div class="container pt-6 mt-6">
            <button class="button is-primary is-outlined mt-5 mb-6">
                <Link to="/roadmap" style={{color:"#D1B000"}}><span>LEARN MORE</span></Link>
                <span class="icon is-small"><i class="fas fa-chevron-right"></i></span>    
            </button>
            </div>
	    </div>
    )
    }
}

export default Countdown;