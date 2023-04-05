import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const TarjetaDetalle = ({ dentista }) => {
  const [like, setLike] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  useEffect(() => {
    if (like) {
      Toast;
      Toast.fire({
        icon: "success",
        title: `Gracias! 
            ${dentista.username} ha sido gregado a favoritos!`,
      });
    } else {
      if (isChanged) {
        Toast;
        Toast.fire({
          icon: "info",
          title: `${dentista.username} ha sido retirado de favoritos!`,
        });
      }
    }
  }, [like]);

  return (
    <Card
      sx={{
        width: "350px",
        height: "fitcontent",
        border: "1px solid black",
        margin: " 5px auto",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" align="center">
          {dentista.name}
        </Typography>
        <CardMedia
          component="img"
          height="fitcontent"
          image="https://purepng.com/public/uploads/large/purepng.com-female-doctorwomenpeoplepersonsfemaledoctor-1121525112296kstwm.png"
          alt="Female Doctor"
        />
        <Typography variant="h5" color="text.primary" align="center">
          {dentista.username}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {dentista.email}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {dentista.phone}
        </Typography>
      </CardContent>
      <BottomNavigation>
        <BottomNavigationAction
          label="Like"
          icon={<FavoriteIcon />}
          onClick={() => {
            setLike(!like);
            setIsChanged(true);
          }}
        />
      </BottomNavigation>
    </Card>
  );
};

export default TarjetaDetalle;
