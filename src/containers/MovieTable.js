import React, { Component } from 'react';
import MovieList from '../components/MovieList';

class MovieTable extends Component {

    constructor(props) {
        super(props) ;
            this.state = {
                movies: [
                    {
                        id:1,
                        name: "Spider Man"
                    },
                    {
                        id: 2,
                        name: "Life Irself"
                    },
                    {
                        id:3,
                        name: "Mary Queen Of Scots"
                    },
                    {
                        id: 4,
                        name: "The Lego Movie 2"
                    },
                    {
                        id:5,
                        name: "Captain Marvel"
                    }
                ]
            };
        }

        render() {
            return(
                <div className="movie-box">
                    <h2>Movies</h2>
                    <MovieList movies={this.state.movies}/>
                </div>
            );
        }
}

export default MovieTable;