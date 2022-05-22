import React from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const Description: React.FC = () => {

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
          <CardMedia
            background-color="red"
            component="img"
            width="1200"
            height="350"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h2" component="div">
              Nome do Pokemon
            </Typography>
            <Typography variant="h3" color="text.secondary">
              Cor: x
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default Description;
