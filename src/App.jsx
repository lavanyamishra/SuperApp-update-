import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Components/HomeSection/Home";
import Register from "./Components/Auth/Register";
import Category from "./Components/Category/Category";
import Movies from "./Components/Movies/Movies";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/category" element={<Category />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
