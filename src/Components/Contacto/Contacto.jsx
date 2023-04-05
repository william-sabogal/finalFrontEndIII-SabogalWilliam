import React from "react";

const Contacto = ({ handleSubmit, handleChange, errmsg }) => {
  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit}
        style={{
          border: "1px solid white",
          margin: "10% auto",
          padding: "10px",
          width: "fit-content"
        }}
      >
        <h2>Formulario de Contacto</h2>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nombre y Apellido"
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
      <span style={{ color: "red" }}>{errmsg}</span>
    </div>
  );
};

export default Contacto;
