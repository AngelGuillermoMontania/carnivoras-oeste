import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
// import Home from "./components/Home";
// import ListaPrsecios from "./components/ListaPrecios";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/listaPrecios" element={<ListaPrecios />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
