import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';

const Home = () => {
  const {loading, data} = useQuery(QUERY_USERS, {
    fetchPolicy: "no-cache"
  });

  const usersList = data?.users || [];

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to The Virtual Field Guide!</h1>
      </div>
      <div className="card-body m-5">
        <h2>Here is a list of users you can vote on:</h2>
        {loading ? (
          <div>Loading ...</div>
        ) : (
        <ul className="square">
          {usersList.map((users) => {
            return (
              <li key={users._id}>
                <Link to={{ pathname: `/users/${users._id}` }}>
                  {users.tech1} vs. {users.tech2}
                </Link>
              </li>
            );
          })}
        </ul>)}
      </div>
      <div className="card-footer text-center m-3">
        <h2>Ready to create a new users?</h2>
        <Link to="/users">
          <button className="btn btn-lg btn-danger">Create Users!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
