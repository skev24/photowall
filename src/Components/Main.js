import React, {Component} from "react";
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { Link, Route } from "react-router-dom";
import {connect} from "react-redux";

class Main extends Component {

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
                    <AddPhoto {...this.props}/>  
                )}/>       
                        
             </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state
    }
}
  
export default connect(mapStateToProps)(Main);