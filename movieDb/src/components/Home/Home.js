import React, { useEffect } from "react";
import MovieList from "../MovieList/MovieList";
import MovieApi from "../../common/apis/MovieApi";
import { APIKEY } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
	const movieName = "pirates";
	const dispatch = useDispatch();

	/**
	 * Fetch list of movies 
	 */
	useEffect(() => {
		const fetchMovies = async () => {
			const response = await MovieApi.get(
				`?apikey=${APIKEY}&s=${movieName}`
			).catch((err) => {
				console.log("Error: ", err);
			});
			// console.log("Api response: ", response);
			dispatch(addMovies(response.data));
		};

		fetchMovies();
	}, []);

	return (
		<div>
			<div className="banner-img"></div>
			<MovieList movieName={movieName} />
		</div>
	);
};

export default Home;
