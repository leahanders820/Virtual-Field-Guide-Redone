import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams, Link } from 'react-router-dom';


import { useMutation, useQuery } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";
import { CREATE_USERS } from "../utils/mutations";

import loadIcon from '../assets/newload.gif';

const Signup = () => {
 // const { loading, data, error:usersError } = useQuery(QUERY_USERS);
 // const mockUsers=[{email:'email@email.com', password:'password'}];
 // const userList = mockUsers || data?.user || [];
//console.log('usersError=', usersError);
  const [formData, setFormData] = useState({
    email:'',
    password:''
    
  });
  let navigate = useNavigate();

  const [createUsers, { error }] = useMutation(CREATE_USERS);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
console.log('handleFormSubmit=', formData);
    try {
      const { data } = await createUsers({
        variables: { ...formData },
      });

      if (data.createUsers) {
        console.log('create users success');
       // navigate(`/users/${data.createUsers._id}`);
      } else {
        console.error("User registration failed.");
      }

     // navigate(`/users/${data.createUsers._id}`);
    } catch (err) {
      console.error('create user error=', err);
    }

    
  };

  return (
    <div className="card bg-transparent card-rounded w-25">
      <div className="card-body m-5 text-center">
   {/*      {loading ? (
          <div><img src={loadIcon}/></div>
        ) : ( */}
          <form onSubmit={handleFormSubmit}>
            <label className="text-white">Email </label>
            <input 
            type='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}/>
           
            <label className="text-white">Password </label>
            <input 
            type='password'
            name='password'
            value={formData.password}
            onChange={handleInputChange}
            />
            
           {/*  <Link to="/journal"> */}
            <button className="btn btn-info" type="submit">
              Sign Up
            </button>
           {/*  </Link> */}
          </form>
      {/*   )} */}
      </div>
     {/*  {error && <div>Something went wrong!</div>} */}
    </div>
  );
};

export default Signup;
