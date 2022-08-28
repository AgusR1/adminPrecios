import * as React from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { signInWithPopup, GoogleAuthProvider, getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { auth } from '../firebase/firebaseConfig';
import { Snackbar } from '@mui/material';
import GoogleButton from 'react-google-button'

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Login() {
    const [status, setStatus] = React.useState("");
    const provider = new GoogleAuthProvider();
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const navigate = useNavigate();

    const registerGoogle = async () => {
        setPersistence(auth, browserLocalPersistence)
            .then(async () => {
                try {
                    await signInWithPopup(auth, provider);
                    setOpenSnackbar(true);
                    setStatus("LOGIN EXITOSO");
                    setTimeout(() => { navigate("/"); }, 2000);
                } catch (error) {
                    setOpenSnackbar(true);
                    setStatus(`${error}`);
                }
            })
            .catch((error) => {
                setOpenSnackbar(true);
                setStatus(`${error}`);
            });
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    return (
        <Container sx={{ height: "100%", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }} component="main" maxWidth="xs">
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleClose}
                message={status}
            />
            <Box
                sx={{
                    width: 300,
                    height: 300,
                    margin: "0px 0px 16px",
                    textDecoration: "none",
                    color: "rgb(0, 114, 229)",
                    fontWeight: "700",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "auto",
                    backgroundColor: "rgba(243, 246, 249, 0.4)",
                    border: "1px solid rgb(224, 227, 231)",
                    borderRadius: "10px",
                    transitionProperty: "all",
                    justifyContent: "center",
                    padding: "1em",
                }}
            >
                <GoogleButton
                    style={{ borderRadius: "5px" }}
                    onClick={() => { registerGoogle() }}
                />
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container >
    );
}