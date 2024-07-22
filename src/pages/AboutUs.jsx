import NavbarApp from "../components/NavbarApp";

function AboutUs({}) {
  return (
    <>
      <NavbarApp />
      <div className="container relative-to-navbar">
        <h1 className="mb-5">About us...</h1>
        <p>This page is under development.</p>
      </div>
    </>
  );
}

export default AboutUs;
