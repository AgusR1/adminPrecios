import { Container } from "@mui/material";
import NavBar from "./components/AppBar/NavBar";
import ListMenu from "./components/ListMenu/ListMenu";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <ListMenu />
      </Container>
    </>
  );
}

export default App;
