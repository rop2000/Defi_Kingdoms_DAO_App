// import RoadmapImage from './assets/images/roadmap.jpg'
import React, { Component } from "react";
import { unmountComponentAtNode, render } from "react-dom";

class Docs extends Component{

    componentWillMount(){
        document.getElementById("snow-canvas").remove();
    }

    render() {
    return(
       <>
        {/* <div class="columns is-mobile">
            <div class="column is-three-fifths is-offset-one-fifth">
               
            </div>
        </div> */}
            <div class="container">
             
                
            </div>
       </>  
    )
  }
}

export default Docs;