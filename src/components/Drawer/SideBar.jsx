import { ExitToApp, HomeOutlined } from "@mui/icons-material";
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
const SideBar = ({ showDrawer, state }) => {

    return (
        <Drawer
            anchor="left"
            open={state['drawer']}
            onClose={showDrawer(false)}
        >
            <div role="presentation" onKeyDown={showDrawer(false, false)}>
                <List>
                    <ListItem
                        button
                        onClick={showDrawer(false)}
                        component={Link}
                        to="/"
                        key="INICIO"
                    >
                        <ListItemIcon>
                            <HomeOutlined />
                        </ListItemIcon>
                        <ListItemText primary="INICIO" />
                    </ListItem>
                    <Divider />
                    <ListItem
                        button
                        onClick={() => { showDrawer(false); signOut(auth) }}
                        key="SALIR"
                    >
                        <ListItemIcon>
                            <ExitToApp />
                        </ListItemIcon>
                        <ListItemText primary="SALIR" />
                    </ListItem>
                </List>
            </div>
        </Drawer>
    );
}

export default SideBar;