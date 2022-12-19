import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/superheroes").then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);
  return (
    <div>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          {data.map((d) => (
            <h3 key={d.name}>{d.name}</h3>
          ))}
        </div>
      )}
    </div>
  );
};

export default SuperHeroesPage;
