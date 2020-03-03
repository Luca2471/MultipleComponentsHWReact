import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component {
    render() {
        const movieNodes = this.props.movies.map(movie => {
            return (
                <Movie name = {movie.name}
                 key ={movie.id}>
                </Movie>    
            );
        });

        return(
            <ul className="movie-list">
                {movieNodes}
            </ul>
        );
    }
}

export default MovieList;