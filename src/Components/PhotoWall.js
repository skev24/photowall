import React from "react";
import Photo from "./Photo"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

//anchor tag, href attribute
function PhotoWall(props) {
    return <div>
            <Link className="add-icon" to="/AddPhoto"></Link>
            <div className="photo-grid">
                {props.posts
                .sort((function(x,y) {return y.id - x.id}))
                .map((post, index) => <Photo 
                    key={post.id} 
                    post={post}
                    {...props}
                    index = {index}
                    />)}
            </div>
        </div>
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired
}

export default PhotoWall;