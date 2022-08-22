import React from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import './index.css';
import { createTheme, ThemeProvider } from "@mui/material";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const theme = createTheme();
root.render(
  <React.StrictMode>
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </CssBaseline>
  </React.StrictMode>
);
