import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import MoviePreview from "./MoviePreview";
import Spinner from "react-bootstrap/Spinner";

function MoviesByRating({ rating, page, setPage }) {
  const [movies, setMovies] = useState(null);
  const ratingInterval = (rating) => {
    switch (rating) {
      case 1:
        return [0, 3];
      case 2:
        return [3, 5];
      case 3:
        return [5, 7];
      case 4:
        return [7, 9];
      case 5:
        return [9, 10];
      default:
        return [0, 10];
    }
  };

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios({
        url: `${import.meta.env.VITE_API_BASEURL}/discover/movie`,
        method: "GET",
        params: {
          include_adult: "false",
          include_video: "true",
          language: "en-US",
          page: page,
          sort_by: "popularity.desc",
          "vote_average.gte": ratingInterval(rating)[0],
          "vote_average.lte": ratingInterval(rating)[1],
          "vote_count.gte": 20,
          api_key: import.meta.env.VITE_API_KEY,
        },
      });
      page === 1
        ? setMovies(response.data.results)
        : setMovies([...movies, ...response.data.results]);
    };
    getMovies();
  }, [page, rating]);

  return (
    movies && (
      <InfiniteScroll
        className="overflow-visible"
        dataLength={movies.length}
        next={() => setPage(page + 1)}
        hasMore={true}
        loader={
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </Spinner>
        }
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Eso es todo!</b>
          </p>
        }
      >
        <div className="row">
          {movies.map((movie) => (
            <div key={movie.id} className="col-3 col-lg-2 pb-4">
              <MoviePreview movie={movie} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    )
  );
}

export default MoviesByRating;
