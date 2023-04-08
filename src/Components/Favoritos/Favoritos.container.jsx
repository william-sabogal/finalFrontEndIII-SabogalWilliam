import "../Home/Home.css";
import React, { useContext, useEffect, useState } from "react";
import Tarjeta from "../Comun/Tarjeta";
import { GlobalContext } from "../../Context/GlobalContextProvider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
const FavoritosContainer = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const likedUsersString = { ...localStorage };
  const likedUsers = [];
  const [isChanged, setIsChanged] = useState(false);
  Object.values(likedUsersString).forEach((dentista) => {
    likedUsers.push(JSON.parse(dentista));
  });
  useEffect(() => {
    dispatch({ type: "FAVS_ADD", payload: likedUsers });
  }, []);
  useEffect(() => {
    if (isChanged) {
      localStorage.clear();
      dispatch({ type: "FAVS_REM", payload: [] });
    }
  }, [isChanged]);
  return (
    <div id={state.isDark ? "dark" : ""}>
      <div id="cards">
        {likedUsers.map((dentista) => {
          return <Tarjeta key={dentista.id} dentista={dentista} />;
        })}
      </div>
      <Stack direction="column" spacing={2}>
        <Button
          margin="auto"
          variant="outlined"
          color="primary"
          startIcon={<DeleteIcon />}
          onClick={() => {
            setIsChanged(true);
          }}
        >
          Borrar Favoritos
        </Button>
      </Stack>
    </div>
  );
};

export default FavoritosContainer;
