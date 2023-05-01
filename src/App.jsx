import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Country from "./Components/Country";
import Error from "./Components/Error";
import SingleCountry from "./Components/SingleCountry";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Country />}></Route>
        <Route path="/:name" element={<SingleCountry />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
