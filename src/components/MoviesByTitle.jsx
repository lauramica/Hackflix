import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import MoviePreview from "./MoviePreview";
import Spinner from "react-bootstrap/Spinner";

function MoviesByTitle({ movies, setMovies, searchValue, page, setPage }) {
  useEffect(() => {
    const getMovies = async () => {
      const response = await axios({
        url: `${import.meta.env.VITE_API_BASEURL}/search/movie`,
        method: "GET",
        params: {
          query: searchValue,
          include_adult: "false",
          include_video: "true",
          sort_by: "popularity.desc",
          page: page,
          "vote_count.gte": 20,
          api_key: import.meta.env.VITE_API_KEY,
          append_to_response: "videos",
        },
      });
      page === 1
        ? setMovies(response.data.results)
        : setMovies([...movies, ...response.data.results]);
    };
    getMovies();
  }, [page]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios({
        url: `${import.meta.env.VITE_API_BASEURL}/search/movie`,
        method: "GET",
        params: {
          query: searchValue,
          include_adult: "false",
          include_video: "true",
          sort_by: "popularity.desc",
          page: 1,
          "vote_count.gte": 20,
          api_key: import.meta.env.VITE_API_KEY,
          append_to_response: "videos",
        },
      });
      setMovies(response.data.results);
      setPage(1);
    };
    getMovies();
  }, [searchValue]);

  return (
    <>
      {movies.length > 0 ? (
        <InfiniteScroll
          className="overflow-visible"
          dataLength={movies.length}
          next={() => setPage((page) => page + 1)}
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
          <div className="row mt-4">
            {movies.map((movie) => (
              <div key={movie.id} className="col-3 col-lg-2 pb-4">
                <MoviePreview movie={movie} />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      ) : (
        <div className="mt-3">No se han encontrado coincidencias...</div>
      )}
    </>
  );
}

export default MoviesByTitle;
