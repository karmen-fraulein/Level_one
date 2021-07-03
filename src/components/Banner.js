import React from "react";
import useStyles from "./useStyles";

import {Box, Typography, CardMedia, Card} from "@material-ui/core";

const Banner = () => {
  const classes = useStyles();
  return (
    <Box component="div" height={400}>
      <Card className={classes.cardStyle}>
        <CardMedia
          className={classes.cardMedia}
          component="img"
          image="https://mdbootstrap.com/img/Photos/Others/clothes(5)-crop.jpg"
        />
        <div className={classes.overley}>
          <div className={classes.overleyDiv}>
            <Typography variant="h4">Shop</Typography>
          </div>
        </div>
      </Card>
    </Box>
  );
};

export default Banner;
