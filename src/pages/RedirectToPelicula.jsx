import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function RedirectToPelicula() {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/pelicula/${params.id}`);
  });

  return <></>;
}

export default RedirectToPelicula;
