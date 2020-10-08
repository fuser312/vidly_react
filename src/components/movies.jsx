import React, {Component} from "react";
import {getMovies} from "../services/fakeMovieService";
import LikeComponent from "./common/like_component";

class Movies extends Component {
    state = {
        movies: getMovies(),
    }
    handleDelete = movie => {
        const moviesArray = this.state.movies.filter(m => m._id !== movie._id);
        // console.log(movie)
        this.setState({
            movies: moviesArray
        })
    }
    handleLike = movie => {
        console.log("liked event occurred")
        let movies = [...this.state.movies];
        const index = movies.indexOf(movie)
        console.log(movie)
        console.log(index)
        console.log(movies[index].liked)
        movies[index]={...movies[index]}
        movies[index].liked = !movies[index].liked
        // movies[index] = !movie.liked
        console.log(movies[index].liked)
        this.setState({
            movies
        })
    };

    render() {
        const {length: moviesCount} = this.state.movies;
        if (moviesCount === 0)
            return <p>There are no Movies in the database</p>

        return (
            <React.Fragment>
                <p>Showing {moviesCount} movies in the database</p>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.movies.map(movie => <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><LikeComponent key={movie._id} liked={movie.liked} onClick={() => this.handleLike(movie)}/>
                        </td>
                        <td>
                            <button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete
                            </button>
                        </td>
                    </tr>)}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }

}

export default Movies;