import "../Home/Home.css";
import React, { useContext } from "react";
import Tarjeta from "../Comun/Tarjeta";
import { GlobalContext } from "../../Context/GlobalContextProvider";

const FavoritosContainer = () => {
  const { state } = useContext(GlobalContext);
  const likedUsersString = { ...localStorage };
  const likedUsers = [];
  Object.values(likedUsersString).forEach((dentista) => {
    likedUsers.push(JSON.parse(dentista));
  });
  console.log(likedUsers);
  return (
    <div id={state.isDark ? "dark" : ""}>
      <div id="cards">
        {likedUsers.map((dentista) => {
          return <Tarjeta key={dentista.id} dentista={dentista} />;
        })}
      </div>
    </div>
  );
};

export default FavoritosContainer;
