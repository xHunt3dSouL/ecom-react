import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/Navbar";

//Setup Routes

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
