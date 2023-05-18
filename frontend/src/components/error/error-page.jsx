import { useRouteError } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import "./styles/errorPage.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button className="button-link-to">
        <Link to={"/"}>Volver a inicio</Link>
      </button>
    </div>
  );
}
