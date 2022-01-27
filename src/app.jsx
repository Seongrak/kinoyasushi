import "./app.css";
import Contents from "./components/contents";
import Footer from "./components/footer";
import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/menu";
import Reservation from "./components/reservation";
import Drink from "./components/drink";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Contents />
              <Footer />
            </>
          }
        />

        <Route path="menu" element={<Menu />} />
        <Route path="contact" element={<Footer />} />
        <Route
          path="reservation"
          element={
            <>
              <Reservation />
              <Footer />
            </>
          }
        />
        <Route path="drink" element={<Drink />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
