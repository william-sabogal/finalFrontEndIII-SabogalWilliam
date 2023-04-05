import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Tarjeta = ({ dentista }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        width: "250px",
        height: "fitcontent",
        border: "1px solid black",
        margin: " 5px auto",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          {dentista.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {dentista.email}
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => navigate(`/dentist/${dentista.id}`)}
          size="small"
          variant="contained"
        >
          Ver Dentista
        </Button>
      </CardActions>
    </Card>
  );
};

export default Tarjeta;
