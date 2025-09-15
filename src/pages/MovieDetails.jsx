import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieDetails = ({ movies }) => {
  const [movie, setMovie] = useState({});
  const { imdbID } = useParams();
  const [loading, setLoading] = useState();

  useEffect(() => {
    async function getMovieDetails() {
      setLoading(true);
      const data = await axios.get(
        `https://www.omdbapi.com/?apikey=8e6de51c&i=${imdbID}`
      );

      setMovie(data.data);
      setLoading(false);
    }
    getMovieDetails(movies.find((movie) => movie.imdbID === imdbID));
  }, []);

  return (
    <>
      <div className="movies__details">
        <div className="back__wrapper">
          <Link to="/movie">
            <FontAwesomeIcon
              icon="fa-solid fa-arrow-left"
              size="2xl"
              id="back__arrow"
            />
          </Link>
          <Link to="/movie">
            <h2 className="white back__text">BACK</h2>
          </Link>
        </div>

        {loading ? (
          <>
            <div class="loading__card">
              <div class="movies__poster--loading">
                <div className="spinner__wrapper">
                  <div className="spinner__loader--gray"></div>
                  <p className="gray movies blinking">Loading</p>
                </div>
              </div>
              <div class="movies__info">
                <p class="movies__title blinking">loading...</p>

                <ul class="movies__misc--info">
                  
                </ul>
                <div className="movies__main--info">
                  
                </div>
              </div>
            </div>
          </>
        ) : (
          <div class="moviespick__grid">
            <div class="movies__poster">
              <img
                src={
                  movie.Poster && movie.Poster !== "N/A"
                    ? movie.Poster
                    : null
                }
                alt={movie.Title}
                className="movies__poster"
              />
            </div>
            <div class="movies__info">
              <h3 class="movies__title">{movie.Title}</h3>

              <ul class="movies__misc--info">
                <li class="year">Year: {movie.Year}</li>
                <li class="rated">Ratings: {movie.Rated}</li>
                <li class="released">Released: {movie.Released}</li>
              </ul>
              <div className="movies__main--info">
                <p class="genre">
                  <b>Genre:</b> {movie.Genre}
                </p>
                <p class="writer">
                  <b>Writer:</b> {movie.Writer}
                </p>
                <p class="actors">
                  <b>Actors: </b>
                  {movie.Actors}
                </p>
                <p class="plot">
                  <b>Plot:</b> {movie.Plot}
                </p>
                <p class="language">
                  <b>Language:</b> {movie.Language}
                </p>
                <p class="awards">
                  <FontAwesomeIcon icon="fas fa-award" /> {movie.Awards}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MovieDetails;