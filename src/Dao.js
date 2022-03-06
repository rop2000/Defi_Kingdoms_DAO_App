// import RoadmapImage from './assets/images/roadmap.jpg'
import React, { Component } from "react";
import { unmountComponentAtNode, render } from "react-dom";
import DaoImg from './assets/images/dao.png'
class Dao extends Component{

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
       <div >
            <section class="hero is-medium is-black">
                <div class="hero-body">
                    <div class="columns is-mobile mt-0">
                        <div class="column">
                            <p class="title is-1 pt-5">
                                Big Bloater Dao
                            </p>
                            <p class="subtitle">
                                Powered by Aragon
                            </p>
                            <p>
                              Filler Txt  
                            </p>
                        </div>
                        <div class="column">
                            <figure class="image is-16by9">
                                <img src={DaoImg}/>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>

            <section class="hero is-primary">
                <div class="hero-body">
                 
                    <div class="tile is-ancestor pt-5">
                        <div class="tile is-parent">
                            <article class="tile is-child notification is-black">
                            <p class="title ">Custom Votes</p>
                            <p class="subtitle"></p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child notification is-black">
                            <p class="title">Interactive Treasury</p>
                            <p class="subtitle"></p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child notification is-black">
                            <p class="title"></p>
                            <p class="subtitle">Direct Summons</p>
                            <div class="content">
                                <p></p>
                            </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </div>
       </>  
    )
  }
}

export default Dao;