import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import MovieApi from "../../common/apis/MovieApi";
import { APIKEY } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
	"movies/fetchAsyncMovies",
	async () => {
		const movieName = "Harry";
		const response = await MovieApi.get(`?apikey=${APIKEY}&s=${movieName}&type=movie`);
		return response.data;
	}
);

export const fetchAsyncShows = createAsyncThunk(
	"movies/fetchAsyncShows",
	async () => {
		const seriesName = "Big";
		const response = await MovieApi.get(`?apikey=${APIKEY}&s=${seriesName}&type=series`);
		return response.data;
	}
);

const initialState = {
	movies: {},
	shows: {},
};

const movieSlice = createSlice({
	name: "movieDb",
	initialState,
	reducers: {
		addMovies: (state, { payload }) => {
			state.movies = payload;
		},
	},
	extraReducers: {
		[fetchAsyncMovies.pending]: () => {
			console.log("Pending!");
		},
		[fetchAsyncMovies.fulfilled]: (state, { payload }) => {
			console.log("Fulfilled!");
			return { ...state, movies: payload };
		},
		[fetchAsyncMovies.rejected]: () => {
			console.log("rejected!");
		},
		[fetchAsyncShows.fulfilled]: (state, { payload }) => {
			console.log("Fulfilled!");
			return { ...state, shows: payload };
		},
	},
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export default movieSlice.reducer;
