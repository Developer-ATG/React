import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import MovieApi from "../../common/apis/MovieApi";
import { APIKEY } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
	"movies/fetchAsyncMovies",
	async () => {
		const movieName = "Harry";
		const response = await MovieApi.get(`?apikey=${APIKEY}&s=${movieName}`);
		return response.data;
	}
);

const initialState = {
	movies: {},
};

const movieSlice = createSlice({
	name: "movies",
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
	},
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
