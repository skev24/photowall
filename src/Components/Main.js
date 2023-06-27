import React, { Component } from "react";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import Single from './Single'

export default class Main extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>
                    <Link>to="/"</Link>
                </h1>
                <Route exact path = "/" render={() => (
                    <div>
                        <PhotoWall {...this.props}/>
                    </div>
                )}/>
                <Route path="/AddPhoto" render = {({history}) => (
                    <AddPhoto {...this.props} onHistory={history}/>  
                )}/>       

                <Route path="/single/:id" render={(params) => (
                    <Single {...this.props} {...params}/> 
                )}/>    
             </div>
        )
    }
}
