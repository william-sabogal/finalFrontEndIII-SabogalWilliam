import "./Home.css";
import React from "react";
import Tarjeta from "../Comun/Tarjeta";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
