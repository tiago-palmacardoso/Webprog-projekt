import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Header() {
    return (
        <AppBar position="static" color="primary" elevation={0}>
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="div">
                        Passantenfrequenzen Bahnhofstrasse Zürich
                    </Typography>
                    <Typography variant="caption" sx={{ opacity: 0.8 }}>
                        Open Data Zürich · hystreet.com GmbH
                    </Typography>
                </Box>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    Projektarbeit 3050
                </Typography>
            </Toolbar>
        </AppBar>
    );
}