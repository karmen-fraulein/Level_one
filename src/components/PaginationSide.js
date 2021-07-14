import {makeStyles} from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import {Box, Grid} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));
const PaginationSide = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={12}>
      <Box
        display="flex"
        justifyContent="flex-end"
        className={classes.root}
        mb={3}
      >
        <Pagination count={3} color="primary" />
      </Box>
    </Grid>
  );
};

export default PaginationSide;
