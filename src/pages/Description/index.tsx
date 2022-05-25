import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageDescription from "./styles";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { findDetailsPokemon, PokemonDetailsResponse } from "../../services/Pokemon";

interface LocationState {
  url: string;
};

const Description: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [details, setDetails] = useState<PokemonDetailsResponse>();
  const { url } = location.state as LocationState;
  const [pokemonId, setPokemonId] = useState<number>();

  useEffect(() => {
    const getId = async () => {
      const initialPosition = url.indexOf("pokemon/") + 8;
      const finalPosition = url.length - 1;
      const id = url.substring(initialPosition, finalPosition);
      setPokemonId(+id);
    };
    getId();
  }, [url]);

  useEffect(() => {
    const find = async () => {
      const pokemonDetails = await findDetailsPokemon(`${pokemonId}`);
      setDetails(pokemonDetails);
    };
    if (pokemonId && pokemonId > 0)
      find();
  }, [pokemonId]);

  return (
    <PageDescription>

      <Grid container alignItems="center">

        <Grid item sx={{ pt: "2rem", pl: "1.5rem" }} xs={12}>
          <Button style={{ color: "black" }} onClick={() => navigate('../inicio')} >
            <ArrowBackIcon fontSize="medium" />
            <Typography variant="h3" sx={{ pl: "0.5rem" }}>Voltar</Typography>
          </Button>
        </Grid>

        <Grid item textAlign="right" xs={3}>
          <Button style={{ color: "black" }} onClick={() => {
            if (pokemonId && pokemonId > 1)
              setPokemonId(pokemonId - 1)
          }}>
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

              {details?.types?.map(item =>
              (<>
                <Typography variant="h3" color="text.secondary">
                  Slot: {item?.slot}
                </Typography>
                <Typography variant="h3" color="text.secondary">
                  Tipo: {item?.type?.name}
                </Typography>
              </>)
              )}

            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Button style={{ color: "black" }} onClick={() => {
            if (pokemonId)
              setPokemonId(pokemonId + 1)
          }}>
            <Typography variant="h3" sx={{ pr: "0.5rem" }}>Próximo pokemon</Typography>
            <ArrowForwardIosIcon fontSize="large" />
          </Button>
        </Grid>
      </Grid>
    </PageDescription>
  );
};

export default Description;
