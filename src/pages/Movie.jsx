import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import NavbarApp from "../components/NavbarApp";
import axios from "axios";

function Movie() {
  const params = useParams({});

  const [movie, setMovie] = useState({});
  const [video, setVideo] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      const response = await axios({
        url: `${import.meta.env.VITE_API_BASEURL}/movie/${params.id}`,
        method: "GET",
        params: {
          append_to_response: "videos",
          api_key: import.meta.env.VITE_API_KEY,
        },
      });
      setMovie(response.data);
      setVideo(movie.videos.results.find((video) => video.type === "Trailer"));
    };
    getMovie();
  }, [movie.id]);

  return movie.id ? (
    <>
      <NavbarApp />

      <div className="container relative-to-navbar">
        <div className="row">
          <div className="col col-lg-3">
            <img
              className="img-fluid"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.original_title}
            />
          </div>
          <div className="col col-lg-9 text-justify">
            <h1 className="mb-5">{movie.original_title}</h1>
            <p>
              <span className="bold">Fecha:</span> {movie.release_date}
            </p>
            <p>
              <span className="bold">Sinopsis:</span> {movie.overview}
            </p>
            <p className="mb-0">
              <span className="bold"> Rating:</span> {movie.vote_average}{" "}
              <i className="bi bi-star-fill"></i>
            </p>
          </div>
          <div className="row mt-5 mb-5">
            <div className="col">
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.key}?si=l16SiPlIhwJCQ0V6`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Cargando...</span>
    </Spinner>
  );
}

export default Movie;
