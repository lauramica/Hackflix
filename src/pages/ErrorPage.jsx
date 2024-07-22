import NavbarApp from "../components/NavbarApp";

function ErrorPage({}) {
  return (
    <>
      <>
        <NavbarApp />
        <div className="container relative-to-navbar">
          <h1 className="text-center mt-5">Error 404 - Página no encontrada</h1>
        </div>
      </>
    </>
  );
}

export default ErrorPage;
