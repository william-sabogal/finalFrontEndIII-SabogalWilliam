import React, { useContext, useEffect, useState } from "react";
import Home from "./Home";
import { getDentists } from "../../Services/dentistService";
import { GlobalContext } from "../../Context/GlobalContextProvider";

const HomeContainer = () => {
  const { state, dispatch } = useContext(GlobalContext);
  /* const [dentistas, setDentistas] = useState([]);
  useEffect(() => {
    const dentists = getDentists();
    dentists
      .then((res) => setDentistas(res.data))
      .catch((err) => console.log(err));
  }, []); */
  useEffect(() => {
    const dentists = getDentists();
    dentists
      .then((res) => dispatch({ type: "GET_USERS", payload: res.data }))
      .catch((err) => console.log(err));
  }, []);

  /* retornar sin state
    return <div><Home dentistas={dentistas} /></div> */

  return <div>{<Home dentistas={state.users} />}</div>;
};

export default HomeContainer;
