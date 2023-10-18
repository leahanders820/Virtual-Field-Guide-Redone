import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Uncomment import statements below after building queries and mutations
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_TECH } from "../utils/queries";
import { CREATE_USERS } from "../utils/mutations";

const Users = () => {
  const { loading, data } = useQuery(QUERY_TECH);

  const techList = data?.tech || [];

  const [formData, setFormData] = useState({
    tech1: "one",
    tech2: "two",
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

      navigate(`/users/${data.createUsers._id}`);
    } catch (err) {
      console.error(err);
    }

    setFormData({
      tech1: "JavaScript",
      tech2: "JavaScript",
    });
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
            {/* <select name="tech1" onChange={handleInputChange}>
              {techList.map((tech) => {
                return (
                  <option key={tech._id} value={tech.name}>
                    {tech.name}
                  </option>
                );
              })}
            </select> */}
            <label>Password </label>
            <input type='password'></input>
            {/* <select name="tech2" onChange={handleInputChange}>
              {techList.map((tech) => {
                return (
                  <option key={tech._id} value={tech.name}>
                    {tech.name}
                  </option>
                );
              })}
            </select> */}
            <button className="btn btn-info" type="submit">
              Sign Up
            </button>
          </form>
        )}
      </div>
      {error && <div>Something went wrong!</div>}
    </div>
  );
};

export default Users;
