import React, { Component } from 'react';

class Movie  extends Component {
    render() {
    return (
        <li className="movie">
            <h4>{this.props.children}</h4>
            <p>{this.props.name}</p>
        </li>
        );
    }
}

export default Movie;