import "./Home.css";
import React from "react";
import Tarjeta from "../Comun/Tarjeta";

const Home = ({ dentistas }) => {
  return (
    <div>
      <h1>Home</h1>
      <div id="cards">
        {dentistas.map((dentista) => {
          return <Tarjeta key={dentista.id} dentista={dentista} />;
        })}
      </div>
    </div>
  );
};

export default Home;
