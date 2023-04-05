import React, { useEffect, useState } from "react";
import { getDentistById } from "../../Services/dentistService";
import { useParams } from "react-router-dom";
import TarjetaDetalle from "../Comun/TarjetaDetalle";

const Dentista = () => {
  const [dentista, setDentista] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const dentista = getDentistById(id);
    dentista
      .then((res) => setDentista(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Dentista Detalle</h1>
      {<TarjetaDetalle key={dentista.id} dentista={dentista} />}
    </div>
  );
};

export default Dentista;
