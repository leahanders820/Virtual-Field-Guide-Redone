import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";
import earth from "../assets/rotatingearthteal.gif";
import darkearth from "../assets/rotatingearth.gif";

const Home = () => {

  return (
    <div className="card bg-primary text-white card-rounded w-50">
      <div className="text-center">
        <h1>Welcome to The Virtual Field Guide!</h1>
      </div>
      <div className="card-body m-5 text-center">
        <h2>Log In to Begin Exploring</h2>
        <img src={darkearth}></img>
        <form>
          <input type="email"></input>
          <input type="password"></input>
          <button className="btn btn-sm btn-light">Log In</button>
        </form>
      </div>
      <div className="card-footer text-center m-3">
        <h2>Don't have an account?</h2>
        <Link to="/signup">
          <button className="btn btn-lg btn-primary">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
