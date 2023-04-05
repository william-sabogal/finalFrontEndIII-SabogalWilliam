import * as React from "react";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import Switch from "@mui/material/Switch";



const NavbarLayout = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    navigate(value);
  }, [value]);

  return (
    <div className="navbar">
      <Box sx={{ width: "100%" , position: "sticky", top: "0px"}}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Home"
            icon={<HomeRoundedIcon />}
            onClick={() => {
              setValue("/");
            }}
          />
          <BottomNavigationAction
            label="Contacto"
            icon={<ContactPageIcon />}
            onClick={() => {
              setValue("/contacto");
            }}
          />
          <BottomNavigationAction
            label="Favoritos"
            icon={<FavoriteIcon />}
            onClick={() => {
              setValue("/favs");
            }}
          />
        </BottomNavigation>
      </Box>
      <Outlet />
      <div className="footer">
        <div>
          <Switch size="small" />
          Dark Mode
        </div>
        <h3>Todos los derechos reservados</h3>
      </div>
    </div>
  );
};

export default NavbarLayout;
