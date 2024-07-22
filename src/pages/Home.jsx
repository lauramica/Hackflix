import React from "react";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import NavbarApp from "../components/NavbarApp";
import Header from "../components/Header";
import MoviesByRating from "../components/MoviesByRating";

function Home() {
  const handleRating = (rate) => {
    setRating(rate);
    setPage(1);
  };
  const [rating, setRating] = useState(4);
  const [page, setPage] = useState(1);

  return (
    <>
      <NavbarApp />
      <Header />
      <div className="d-flex justify-content-center align-items-center p-4">
        Filer by rating <Rating onClick={handleRating} className="ms-2" />
      </div>
      <div className="container" id="movielist-container">
        <MoviesByRating rating={rating} page={page} setPage={setPage} />
      </div>
    </>
  );
}

export default Home;
