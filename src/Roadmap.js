import RoadmapImage from './assets/images/roadmap.jpg'
import React, { Component } from "react";
import { unmountComponentAtNode, render } from "react-dom";

class Roadmap extends Component{

    componentWillMount(){
        let element =  document.getElementById('snow-canvas');
        if (typeof(element) != 'undefined' && element != null)
        {
            document.getElementById("snow-canvas").remove();
        }
    }

    
    render() {
    return(
       <>
        {/* <div class="columns is-mobile">
            <div class="column is-three-fifths is-offset-one-fifth">
               
            </div>
        </div> */}
        <div>
            <figure class="image">
                <img src={RoadmapImage}></img>
            </figure>
        </div>
       </>
    )
  }
}

export default Roadmap;