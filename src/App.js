import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ListMenu from "./components/ListMenu/ListMenu";
import Login from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<ListMenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
