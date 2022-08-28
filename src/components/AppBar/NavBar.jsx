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
import { Grid } from "@mui/material";

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
          <Toolbar style={{ justifyContent: "space-between" }}>
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
            <Grid sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} container spacing={2} >
              <Grid style={{ alignItems: "center", display: "flex" }} item xs={4} >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  INICIO
                </Typography>
              </Grid>
              <Grid style={{ alignItems: "center", display: "flex" }} item xs={4}>
                <Typography variant="body1" style={{ marginRight: "10px" }}>
                  {`Bienvenido/a ${nombre}`}
                </Typography>
              </Grid>
            </Grid>
            <Grid style={{ justifyContent: "end", display: "flex" }} item xs={12} >
              <IconButton style={{ color: "white" }} onClick={() => { signOut(auth) }} aria-label="delete">
                <ExitToApp />
              </IconButton>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      <SideBar state={state} showDrawer={showDrawer} />
    </>
  );
}