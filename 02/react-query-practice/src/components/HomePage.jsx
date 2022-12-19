import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <div>
        <h1>This is the home page</h1>
        <Link to="/super-heroes">Regular Super Heroes</Link>
        <Link to="/rq-super-heroes">RQ Super Heroes</Link>
      </div>
    </div>
  );
};

export default HomePage;
