import React, {Component} from "react";
import {getMovies} from "../services/fakeMovieService";

class Movies extends Component {
    state = {
        movies: getMovies(),
    }
    handleDelete = movie => {
        const moviesArray = this.state.movies.filter(m=>m._id!==movie._id);
        // console.log(movie)
        this.setState({
            movies:moviesArray
        })
    }

    render() {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {this.state.movies.map(movie => <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                        <button onClick={()=>this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>)}
                </tbody>
            </table>
        );
    }

}

export default Movies;