import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function Movie({ movie }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [video, setVideo] = useState([]);
  useEffect(() => {
    const getVideos = async () => {
      const response = await axios({
        url: `${import.meta.env.VITE_API_BASEURL}/movie/${movie.id}/videos`,
        method: "GET",
        params: {
          api_key: import.meta.env.VITE_API_KEY,
        },
      });

      setVideo(response.data.results.find((video) => video.type === "Trailer"));
    };
    getVideos();
  }, [movie.id]);

  return (
    <div>
      <Modal size="lg" centered show={show} onHide={handleClose}>
        <Modal.Header className="modal-styles" closeButton>
          <Modal.Title className="bold">{movie.original_title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-styles">
          <p>
            <span className="bold">Fecha:</span> {movie.release_date}
          </p>
          <p>
            <span className="bold">Sinopsis:</span> {movie.overview}
          </p>
          <p>
            <span className="bold"> Rating:</span> {movie.vote_average}{" "}
            <i className="bi bi-star-fill"></i>
          </p>
          {video && (
            <div className="iframe-container">
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
          )}
        </Modal.Body>
        <Modal.Footer className="modal-styles">
          <Button
            as={Link}
            to={`/pelicula/${movie.id}`}
            variant="outline-light"
          >
            Ver película
          </Button>
          <Button variant="outline-light" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="zoomOnHover" onClick={handleShow}>
        <img
          className="img-fluid"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.original_title}
        />
      </div>
    </div>
  );
}

export default Movie;
