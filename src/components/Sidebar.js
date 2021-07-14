import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Rating} from "@material-ui/lab";

import {
  Grid,
  Sizing,
  Box,
  Container,
  Link,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  RadioGroup,
  Radio,
  Slider,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    width: "100%",
  },

  input: {
    padding: "none",
  },
  label: {
    display: "block",
  },
  star: {
    color: "#007bff",
  },
  span: {
    margin: "5px",
  },
  slider: {
    width: 100,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const Sidebar = () => {
  const [checked, setChecked] = useState(true);
  const classes = useStyles();
  return (
    <>
      <Box mb={3}>
        <Box fontWeight={900} lineHeight={2} fontSize={20}>
          <Typography variant="h5">Subcategories</Typography>
        </Box>
        <Box mt={5} lineHeight={2}>
          <Link href="/" color="inherit">
            RETURN TO CLOTHING, SHOES, ACCESSORIES
          </Link>
        </Box>
        <Box lineHeight={2}>
          <Link href="/" color="inherit">
            DRESSES
          </Link>
        </Box>
        <Box lineHeight={2}>
          <Link href="/" color="inherit">
            TOPS, TEES & BLOUSES
          </Link>
        </Box>
        <Box lineHeight={2}>
          <Link href="/" color="inherit">
            SWEATERS
          </Link>
        </Box>
        <Box lineHeight={2}>
          <Link href="/" color="inherit">
            FASHION HOODIES & SWEATSHIRTS
          </Link>
        </Box>
        <Box lineHeight={2}>
          <Link href="/" color="inherit">
            JEANS
          </Link>
        </Box>
      </Box>

      <Box component="form" noValidate autoComplete="off" mb={3}>
        <Typography variant="h5">Filters</Typography>
        <Box display="flex">
          <TextField
            id="outlined-basic"
            placeholder="Search..."
            variant="outlined"
            className={classes.textField}
            InputProps={{
              className: classes.input,
            }}
          />
          <Button>
            <i className="fas fa-search"></i>
          </Button>
        </Box>
        <Box mb={3}>
          <Typography variant="h6">Condition</Typography>
          <Box component="div">
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  color="primary"
                  inputProps={{"aria-label": "secondary checkbox"}}
                />
              }
              label="NEW"
              className={classes.label}
            />
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  color="primary"
                  inputProps={{"aria-label": "secondary checkbox"}}
                />
              }
              label="USED"
              className={classes.label}
            />
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  color="primary"
                  inputProps={{"aria-label": "secondary checkbox"}}
                />
              }
              label="COLLECTIBLE"
              className={classes.label}
            />
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  color="primary"
                  inputProps={{"aria-label": "secondary checkbox"}}
                />
              }
              label="RENEWED"
              className={classes.label}
            />
          </Box>
        </Box>

        <Box component="div" mb={3}>
          <Typography variant="h6">Avg. Customer Review</Typography>
          <Box component="fieldset" p={0} borderColor="transparent">
            <Box display="flex" alignItems="center">
              <Rating defaultValue={4} className={classes.star} readOnly />
              <Box component="h5">& UP</Box>
            </Box>
          </Box>
          <Box component="fieldset" p={0} borderColor="transparent">
            <Box display="flex" alignItems="center">
              <Rating defaultValue={3} className={classes.star} readOnly />
              <Box component="h5">& UP</Box>
            </Box>
          </Box>
          <Box component="fieldset" p={0} borderColor="transparent">
            <Box display="flex" alignItems="center">
              <Rating defaultValue={2} className={classes.star} readOnly />
              <Box component="h5">& UP</Box>
            </Box>
          </Box>
          <Box component="fieldset" p={0} borderColor="transparent">
            <Box display="flex" alignItems="center">
              <Rating defaultValue={1} className={classes.star} readOnly />
              <Box component="h5">& UP</Box>
            </Box>
          </Box>
        </Box>
        <Box mb={3}>
          <Typography variant="h6">Price</Typography>
          <RadioGroup aria-label="gender" name="gender1">
            <FormControlLabel value="1" control={<Radio />} label="UNDER $25" />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label="$25 TO $50"
            />
            <FormControlLabel
              value="3"
              control={<Radio />}
              label="$50 TO $100"
            />
            <FormControlLabel
              value="4"
              control={<Radio />}
              label="$100 TO $200"
            />
            <FormControlLabel
              value="5"
              control={<Radio />}
              label="$200 & ABOVE"
              iconStyle={{fill: "white"}}
            />
            <Box display="flex" alignItems="center">
              <TextField id="outlined-basic" label="$ Min" variant="outlined" />
              <span className={classes.span}>-</span>
              <TextField id="outlined-basic" label="$ Max" variant="outlined" />
            </Box>
          </RadioGroup>
        </Box>

        <Box mb={3}>
          <Typography variant="h6">Price</Typography>
          <Slider
            defaultValue={20}
            aria-labelledby="discrete-slider-custom"
            step={3}
            className={classes.slider}
          />
        </Box>
        <Box mb={3}>
          <Typography variant="h6">Size</Typography>
          <Box component="div">
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  inputProps={{"aria-label": "secondary checkbox"}}
                />
              }
              label="34"
              className={classes.label}
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  inputProps={{"aria-label": "secondary checkbox"}}
                />
              }
              label="36"
              className={classes.label}
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  inputProps={{"aria-label": "secondary checkbox"}}
                />
              }
              label="38"
              className={classes.label}
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  inputProps={{"aria-label": "secondary checkbox"}}
                />
              }
              label="40"
              className={classes.label}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
