import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Uncomment import statements below after building queries and mutations
import { useMutation, useQuery } from "@apollo/client";


const Journal = () => {
  return (
    <>
    <div>
      <ul id='continentlist' className="text-white">
        <li>North America</li>
        <li>South America</li>
        <li>Africa</li>
        <li>Europe</li>
        <li>Asia</li>
        <li>Oceania</li>
        <li>Antarctica</li>
      </ul>
    </div>
      <div className="card bg-white card-rounded w-25">
        <div className="card-header bg-dark text-center">
          <h1>Animal</h1>
        </div>
        <div className="card-body m-5 text-center"></div>
      </div>

      <div className="card bg-white card-rounded w-25">
        <div className="card-header bg-dark text-center">
          <h1>Plant</h1>
        </div>
        <div className="card-body m-5 text-center"></div>
      </div>

      <div className="card bg-white card-rounded w-25">
        <div className="card-header bg-dark text-center">
          <h1>Landmark</h1>
        </div>
        <div className="card-body m-5 text-center"></div>
      </div>
    </>
  );
};

export default Journal;
