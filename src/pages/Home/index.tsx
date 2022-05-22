import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

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

        <Grid item textAlign="center" xs={12} sx={{ pt: 2 }}>
          <Typography variant="h1">Vamos caçar pokemons?</Typography>
        </Grid>

        <Grid container
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          sx={{ pb: 4, pt: 4 }}
        >
          <Grid item xs={8}>
            <TextField fullWidth label="Digite aqui o nome do pokemon ou o ID dele e pesquise" id="fullWidth" />
          </Grid>
          <Grid item textAlign="left" xs={1}>
            <Button>
              <SearchIcon fontSize="large" style={{ color: "black" }} />
            </Button>
          </Grid>

        </Grid>


      </Grid>
    </div >
  );
};

export default Home;
