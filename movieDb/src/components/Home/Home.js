import React, { useEffect } from "react";
import MovieList from "../MovieList/MovieList";
import MovieApi from "../../common/apis/MovieApi";
import { APIKEY } from "../../common/apis/MovieApiKey";

const Home = () => {
	useEffect(() => {
		const movieName = "Impossible";
		const fetchMovies = async () => {
			const response = await MovieApi.get(
				`?apikey=${APIKEY}&s=${movieName}&type=movie`
			).catch((err) => {
				console.log("Error: ", err);
			});
			console.log("Api response: ", response);
		};

		fetchMovies();
	}, []);

	return (
		<div>
			<div className="banner-img"></div>
			<MovieList />
		</div>
	);
};

export default Home;
