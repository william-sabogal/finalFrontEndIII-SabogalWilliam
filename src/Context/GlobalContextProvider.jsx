import React, { createContext, useReducer } from "react";

export const GlobalContext = createContext();
const initialState = {
  users: [],
  isDark: false,
  favs: [],
};
const globalReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload };
    case "SWITCH_MODE":
      return { ...state, isDark: !state.isDark };
    case "FAVS_ADD":
      return { ...state, favs: action.payload };
    case "FAVS_REM":
      return { ...state, favs: action.payload };
    default:
      state;
  }
};
const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
