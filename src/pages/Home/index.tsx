import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Typography } from "@mui/material";

const Home: React.FC = () => {

  const navigate = useNavigate();

  return (
    <div>
      <Grid container >
        <Grid item>
          <Typography variant="h1">Hello World!</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
