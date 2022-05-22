import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.scss";

const MovieList = (props) => {
	const movies = useSelector(getAllMovies);
	const shows = useSelector(getAllShows);
	let renderMovies,
		renderShows = "";
	renderMovies =
		movies.Response === "True" ? (
			movies.Search.map((movie, index) => (
				<MovieCard key={index} data={movie} />
			))
		) : (
			<div className="movies-error">
				<h3>{movies.Error}</h3>
			</div>
		);
	renderShows =
		shows.Response === "True" ? (
			shows.Search.map((shows, index) => <MovieCard key={index} data={shows} />)
		) : (
			<div className="shows-error">
				<h3>{movies.Error}</h3>
			</div>
		);

	return (
		<div className="movie-wrapper">
			<div className="movie-card">
				<h2>Movies</h2>
				<div className="movie-container">{renderMovies}</div>
			</div>
			<div className="show-card">
				<h2>Shows</h2>
				<div className="show-container">{renderShows}</div>
			</div>
		</div>
	);
};

export default MovieList;
