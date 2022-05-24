import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { findDetailsPokemon, PokemonDetailsResponse } from "../../services/Pokemon";

const Description: React.FC = () => {

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
    <div style={{ backgroundColor: "#2F4F4F", minHeight: "100vh" }}>
      <Grid container
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        sx={{ pt: 10 }}
      >
        <Card>
          {/* <CardMedia
            background-color="red"
            component="img"
            width="1200"
            height="350"
            image={details.sprite}
            alt="green iguana"
          /> */}
          <CardContent>
            <Typography gutterBottom variant="h2" component="div">
              {details?.name}
            </Typography>
            <Typography variant="h3" color="text.secondary">

            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default Description;
