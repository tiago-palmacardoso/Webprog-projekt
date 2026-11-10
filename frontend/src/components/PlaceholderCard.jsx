import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function PlaceholderCard({ title, subtitle, height = 320 }) {
    return (
        <Card elevation={1} sx={{ height: "100%" }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
                {subtitle && (
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        {subtitle}
                    </Typography>
                )}
                <Box
                    sx={{
                        mt: 2,
                        height,
                        border: "2px dashed",
                        borderColor: "divider",
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "text.secondary",
                    }}
                >
                    <Typography variant="body2">Visualisierung folgt</Typography>
                </Box>
            </CardContent>
        </Card>
    );
}