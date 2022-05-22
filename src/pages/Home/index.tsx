import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, TextField, Typography } from "@mui/material";

const Home: React.FC = () => {

  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#B0E0E6", minHeight: "100vh" }}>
      <Grid container
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        sx={{ p: 5 }}
      >
        <Grid item textAlign="center" xs={12} sx={{ pt: 2, pb: 2 }}>
          <Typography variant="h1">Vamos caçar pokemons?</Typography>
        </Grid>
        <Grid item textAlign="center" xs={6} sx={{ pb: 4 }}>
          <TextField fullWidth label="Pesquisar" id="fullWidth" />
        </Grid>

      </Grid>
    </div>
  );
};

export default Home;
