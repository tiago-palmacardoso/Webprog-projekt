import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        mode: "light",
        primary: { main: "#1e3a8a" },
        secondary: { main: "#0ea5e9" },
        background: { default: "#f8fafc" },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h4: { fontWeight: 600 },
        h6: { fontWeight: 600 },
    },
});