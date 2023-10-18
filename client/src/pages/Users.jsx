import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams, Link } from 'react-router-dom';


import { useMutation, useQuery } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";
import { CREATE_USERS } from "../utils/mutations";

const Users = () => {
  const { loading, data } = useQuery(QUERY_USERS);

  const userList = data?.user || [];

  const [formData, setFormData] = useState({
    email:'',
    password:''
    
  });
  let navigate = useNavigate();

  const [createUsers, { error }] = useMutation(CREATE_USERS);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createUsers({
        variables: { ...formData },
      });

      if (data.createUsers) {
        navigate(`/users/${data.createUsers._id}`);
      } else {
        console.error("User registration failed.");
      }

      navigate(`/users/${data.createUsers._id}`);
    } catch (err) {
      console.error(err);
    }

    
  };

  return (
    <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">
        <h1>Create an Account</h1>
      </div>
      <div className="card-body m-5 text-center">
        {loading ? (
          <div>Loading ...</div>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <label>Email </label>
            <input type='email'></input>
           
            <label>Password </label>
            <input type='password'></input>
            
            <Link to="/journal">
            <button className="btn btn-info" type="submit">
              Sign Up
            </button>
            </Link>
          </form>
        )}
      </div>
      {error && <div>Something went wrong!</div>}
    </div>
  );
};

export default Users;
