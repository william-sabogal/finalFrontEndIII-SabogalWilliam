import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarLayout from "../Components/Layout/NavbarLayout";
import ContactoContainer from "../Components/Contacto/Contacto.container";
import HomeContainer from "../Components/Home/Home.container";
import FavoritosContainer from "../Components/Favoritos/Favoritos.container";
import "./App.css";
import GlobalContextProvider from "../Context/GlobalContextProvider";
import Dentista from "../Components/Dentista/Dentista";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalContextProvider>
          <Routes>
            <Route element={<NavbarLayout />}>
              <Route path="/" element={<HomeContainer />} />
              <Route path="/dentist/:id" element={<Dentista />} />
              <Route path="/contacto" element={<ContactoContainer />} />
              <Route path="/favs" element={<FavoritosContainer />} />
            </Route>
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </GlobalContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
