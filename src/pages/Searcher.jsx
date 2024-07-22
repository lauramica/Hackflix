import { useState } from "react";
import NavbarApp from "../components/NavbarApp";
import MoviesByTitle from "../components/MoviesByTitle";
import useInput from "../hooks/useInput";

function Searcher() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const search = useInput("");

  return (
    <>
      <NavbarApp />
      <div className="container relative-to-navbar">
        <h1 className="mb-5">Find a movie by title</h1>
        <form action="" method="GET">
          <label className="form-label" htmlFor="title">
            Title:
          </label>
          <input
            data-bs-theme="dark"
            className="form-control"
            type="text"
            id="title"
            name="title"
            placeholder="Write the title here"
            value={search.value}
            onChange={(e) => {
              search.onChange(e);
              setPage(1);
            }}
          />
        </form>
        {search.value && (
          <div>
            <MoviesByTitle
              movies={movies}
              setMovies={setMovies}
              searchValue={search.value}
              page={page}
              setPage={setPage}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Searcher;
