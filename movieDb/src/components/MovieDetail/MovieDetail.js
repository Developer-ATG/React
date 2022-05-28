import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchAsyncMovieOrShowDetail,
	getSelectedMovieOrShow,
	removePrevData,
} from "../../features/movies/movieSlice";
import "../MovieDetail/MovieDetail.scss";

const MovieDetail = () => {
	const { imdbID } = useParams();
	const dispatch = useDispatch();
	const data = useSelector(getSelectedMovieOrShow);
	console.log(data);
	useEffect(() => {
		dispatch(fetchAsyncMovieOrShowDetail(imdbID));
		return () => {
			dispatch(removePrevData());
		};
	}, [dispatch, imdbID]);
	return (
		<div className="movie-section">
			{(Object.keys(data).length === 0) ? (
				<div>...Loading your data please wait!</div>
			) : (
				<>
					<div className="section-left">
						<div className="movie-title">{data.Title}</div>
						<div className="movie-rating">
							<span>
								IMDb Rating <i className="fa fa-star"></i> : {data.imdbRating}
							</span>
							<span>
								IMDb Votes<i className="fa fa-thumbs-up"></i> : {data.imdbVotes}
							</span>
							<span>
								Runtime<i className="fa fa-film"></i> : {data.Runtime}
							</span>
							<span>
								Year<i className="fa fa-calendar"></i> : {data.Year}
							</span>
						</div>
						<div className="movie-plot">{data.Plot}</div>
						<div className="movie-info">
							<div>
								<span>Director</span>
								<span>
									<i className="fa fa-arrow-right" aria-hidden="true"></i>
									{data.Director}
								</span>
							</div>
							<div>
								<span>Cast</span>
								<span>
									<i className="fa fa-arrow-right" aria-hidden="true"></i>
									{data.Actors}
								</span>
							</div>
							<div>
								<span>Genre</span>
								<span>
									<i className="fa fa-arrow-right" aria-hidden="true"></i>
									{data.Genre}
								</span>
							</div>
							<div>
								<span>Language</span>
								<span>
									<i className="fa fa-arrow-right" aria-hidden="true"></i>
									{data.Language}
								</span>
							</div>
						</div>
					</div>
					<div className="section-right">
						<img src={data.Poster} alt={data.Title} />
					</div>
				</>
			)}
		</div>
	);
};

export default MovieDetail;
