import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  const [img, setImg] = useState();
  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = movie.Poster;

    image.onerror = () => {
      setImg();
    };

    image.onload = () => {
      if (mountedRef.current) {
        setTimeout(() => setImg(image), 1000);
      }
    };
  }, [movie]);

  return (
    <div key={movie.imdbID} className="movie__card">
      <Link to={`/movie/${movie.imdbID}`}>
        {img ? (
          <>
            <img
              src={
                movie.Poster && movie.Poster !== "N/A"
                  ? movie.Poster
                  : null
              }
              alt={movie.Title}
              className="movie__poster"
            />
            <div className="movie__info">
              <h3>{movie.Title}</h3>
              <p className="movie__info--year">{movie.Year}</p>
            </div>
          </>
        ) : (
          <>
            <div className="spinner__wrapper">
              <div className="spinner__loader"></div>
              <p className="white movies">Loading</p>
            </div>
          </>
        )}
      </Link>
    </div>
  );
};

export default Movie;