import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { findDetailsPokemon, PokemonDetailsResponse } from "../../services/Pokemon";

const Description: React.FC = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState<PokemonDetailsResponse>();

  useEffect(() => {

    const find = async () => {
      const id = "1"
      const pokemonDetails = await findDetailsPokemon(id);
      setDetails(pokemonDetails);
    };

    find();
  }, []);


  return (
    <div style={{ backgroundColor: "#FFD700", minHeight: "100vh" }}>

      <Grid container alignItems="center">

        <Grid item sx={{ pt: "2rem", pl: "1.5rem" }} xs={12}>
          <Button style={{ color: "black" }} onClick={() => navigate('../inicio')} >
            <ArrowBackIcon fontSize="medium" />
            <Typography variant="h3" sx={{ pl: "0.5rem" }}>Voltar</Typography>
          </Button>
        </Grid>

        <Grid item textAlign="right" xs={3}>
          <Button style={{ color: "black" }} onClick={() => navigate('../inicio')} >
            <ArrowBackIosNewIcon fontSize="large" />
            <Typography variant="h3" sx={{ pl: "0.5rem" }}>Pokemon anterior</Typography>
          </Button>
        </Grid>

        <Grid container xs={6}
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          sx={{ pt: "2rem" }}
        >
          <Card sx={{ minHeight: 400 }}>
            <CardMedia
              component="img"
              width="300"
              height="300"
              image={details?.sprites.back_default}
            />

            <CardContent>

              <Typography gutterBottom variant="h2" component="div">
                Nome: {details?.name}
              </Typography>
              <Typography variant="h3" color="text.secondary">
                {/* Slot: {details?.types.slot} */}
              </Typography>
              <Typography variant="h3" color="text.secondary">
                {/* Tipo: {details?.types.type} */}
              </Typography>
              <Typography variant="h3" color="text.secondary">
                {/* Nome: {details?.types.type.name} */}
              </Typography>
              <Typography variant="h3" color="text.secondary">
                {/* Url: {details?.types.type.url} */}
              </Typography>

            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Button style={{ color: "black" }} onClick={() => navigate('../inicio')} >
            <Typography variant="h3" sx={{ pr: "0.5rem" }}>Próximo pokemon</Typography>
            <ArrowForwardIosIcon fontSize="large" />
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Description;
