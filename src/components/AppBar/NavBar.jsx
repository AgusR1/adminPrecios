import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { ExitToApp, Menu } from "@mui/icons-material";
import { useState } from "react";
import SideBar from "../Drawer/SideBar";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export default function NavBar({ nombre }) {
  const [state, setState] = useState(false);
  const showDrawer = (show) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, drawer: show });

  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={showDrawer(true)}
              sx={{ mr: 2 }}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              INICIO
            </Typography>
            <Typography variant="h6" style={{ marginRight: "10px" }}>
              {`Bienvenido/a ${nombre}`}
            </Typography>
            <Button variant="outlined" startIcon={<ExitToApp />} onClick={() => { signOut(auth) }} color="inherit">LogOut</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <SideBar state={state} showDrawer={showDrawer} />
    </>
  );
}