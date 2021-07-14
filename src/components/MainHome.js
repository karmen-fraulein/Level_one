import Sidebar from "./Sidebar";
import {Grid, Container} from "@material-ui/core";

import {makeStyles} from "@material-ui/core/styles";

import CardLists from "./CardLists";
import PaginationSide from "./PaginationSide";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    width: "100%",
  },
}));

const MainHome = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Grid container spacing={5} className={classes.root}>
        <Grid item xs={12} sm={4}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} sm={8}>
          <PaginationSide />
          <CardLists />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainHome;
