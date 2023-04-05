import React, { useEffect, useState, useContext } from "react";
import Contacto from "./Contacto";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { emailIsNotValid, nameIsNotValid } from "../../Services/authService";
import { GlobalContext } from "../../Context/GlobalContextProvider";

const ContactoContainer = () => {
  const { state } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    name: "",
    email: "",
  });
  const [inputValid, setInputValid] = useState({
    nameValid: false,
    emailValid: false,
  });
  /*   const [errmsg, setErrmsg] = useState({
    msg: "",
    pos: 0,
  }); */

  const [errmsg, setErrmsg] = useState("");

  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    setInputValid({
      ...inputValid,
      nameValid: nameIsNotValid(contact.name),
      emailValid: emailIsNotValid(contact.email),
    });
  }, [contact]);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  useEffect(() => {
    if (isChanged) {
      if (!inputValid.nameValid) {
        setErrmsg("Por favor verifique su información de nombre!");
      }
      if (!inputValid.emailValid) {
        setErrmsg("Por favor verifique su información de email!");
      }
      if (!inputValid.nameValid && !inputValid.emailValid) {
        setErrmsg("Por favor verifique su información de nombre y email!");
      }
      /* if (!inputValid.nameValid) {
        setErrmsg({
          ...errmsg,
          msg: "Por favor verifique su información de nombre!",
          pos: 1,
        });
      }
      if (!inputValid.emailValid) {
        setErrmsg({
          ...errmsg,
          msg: "Por favor verifique su información de email!",
          pos: 2,
        });
      }
      if (!inputValid.nameValid && !inputValid.emailValid) {
        setErrmsg({
          ...errmsg,
          msg: "Por favor verifique su información de nombre y email!",
          pos: 3,
        });
      } */
    }
  }, [isChanged]);

  const handleChange = (event) => {
    event.preventDefault();
    setContact({ ...contact, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      name: contact.name,
      email: contact.email,
    };
    setIsChanged(true);

    if (inputValid.nameValid && inputValid.emailValid) {
      Toast;
      Toast.fire({
        icon: "success",
        title: `Gracias ${
          data.name.split(" ")[0]
        }, te contactaremos cuando antes vía mail!`,
      });
      navigate("/");
    } else {
      Toast;
      Toast.fire({
        icon: "warning",
        title: "Por favor verifique su información nuevamente!",
      });
    }
  };
  return (
    <div id={state.isDark ? "dark" : ""}>
      <Contacto
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        errmsg={errmsg}
      />
    </div>
  );
};

export default ContactoContainer;
