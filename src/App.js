import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About/about";
import Menu from "./component/Menu/menu";
import Tugas from "./component/Tugas/tugas";
import Index from "./component";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/component/Tugas" element={<Tugas />} />
        <Route path="/component/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
