import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import MovieApi from "../../common/apis/MovieApi";
import { APIKEY } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
	"movies/fetchAsyncMovies",
	async () => {
		const movieName = "Impossible";
		const response = await MovieApi.get(
			`?apikey=${APIKEY}&s=${movieName}&type=movie`
		);
		return response.data;
	}
);

export const fetchAsyncShows = createAsyncThunk(
	"movies/fetchAsyncShows",
	async () => {
		const seriesName = "Star";
		const response = await MovieApi.get(
			`?apikey=${APIKEY}&s=${seriesName}&type=series`
		);
		return response.data;
	}
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
	"movies/fetchAsyncMovieOrShowDetail",
	async (id) => {
		const response = await MovieApi.get(
			`?apikey=${APIKEY}&i=${id}&Plot=full`
		);
		return response.data;
	}
);

const initialState = {
	movies: {},
	shows: {},
	movieorshow: {}
};

const movieSlice = createSlice({
	name: "movieDb",
	initialState,
	reducers: {
		removePrevData: (state) => {
			state.movieorshow = {};
		}
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
		[fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
			console.log("Fulfilled!");
			return { ...state, movieorshow: payload };
		},
	},
});

export const { removePrevData } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.movieorshow;
export default movieSlice.reducer;
