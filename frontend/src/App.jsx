import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Header from "./components/Header.jsx";
import PlaceholderCard from "./components/PlaceholderCard.jsx";

export default function App() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <Container maxWidth="lg" sx={{ py: 4, flexGrow: 1 }}>
        {/* Sezione Fokusfrage */}
        <Paper elevation={0} sx={{ p: 3, mb: 4, bgcolor: "background.default" }}>
          <Typography variant="h4" gutterBottom>
            Fokusfrage
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Die Fokusfrage wird in einem nächsten Schritt festgelegt. Hier
            erscheint später die Hauptvisualisierung, welche die gewählte Frage
            beantwortet.
          </Typography>
          <Box sx={{ mt: 3 }}>
            <PlaceholderCard
              title="Hauptvisualisierung"
              subtitle="Antwort auf die Fokusfrage (in Vorbereitung)"
              height={360}
            />
          </Box>
        </Paper>

        <Divider sx={{ my: 4 }} />

        {/* Sezione Esplorazione */}
        <Typography variant="h4" gutterBottom>
          Exploration
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Freie Erkundung des Datensatzes nach Zeit, Ort und Thema.
          Filtermöglichkeiten und Diagramme werden hier eingebunden.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <PlaceholderCard
              title="Zeitliche Verteilung"
              subtitle="Passanten pro Stunde / Tag / Monat"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <PlaceholderCard
              title="Räumliche Verteilung"
              subtitle="Vergleich der Standorte"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <PlaceholderCard
              title="Karte"
              subtitle="Standorte an der Bahnhofstrasse (React-Leaflet)"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <PlaceholderCard
              title="Wetter & Temperatur"
              subtitle="Zusammenhang mit Passantenfrequenz"
            />
          </Grid>
        </Grid>
      </Container>

      <Box
        component="footer"
        sx={{
          py: 2,
          textAlign: "center",
          borderTop: "1px solid",
          borderColor: "divider",
          color: "text.secondary",
        }}
      >
        <Typography variant="caption">
          Datenquelle: Open Data Zürich · Stadtentwicklung, Präsidialdepartement ·
          hystreet.com GmbH · Lizenz CC BY
        </Typography>
      </Box>
    </Box>
  );
}