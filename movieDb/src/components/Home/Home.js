import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MovieList from "../MovieList/MovieList";
import {
	fetchAsyncMovies,
	fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Home = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAsyncMovies());
		dispatch(fetchAsyncShows());
	}, [dispatch]);

	return (
		<div>
			<div className="banner-img"></div>
			<MovieList />
		</div>
	);
};

export default Home;
