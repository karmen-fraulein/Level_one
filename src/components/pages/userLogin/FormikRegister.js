import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {Box, Link as Mlink, Typography, TextField, Checkbox, FormControlLabel, Button, Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import {REGISTER} from "../../../rote";

const useStyles = makeStyles(() => ({
    form:{
        display: 'flex',
        flexDirection: 'column',
        width: '44%',
        margin: 'auto',
        marginTop: '65px',
        marginBottom:'40px'
    },
    input:{
        height: '24px',

        marginBottom: '40px',
        outline: 'none',
    },
    checkboxDiv:{
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        marginTop: '20px',
    },
    button:{
        width: '100px',
        margin: '10px auto',
    },
    gridContainer:{
        marginTop: '20px',
    },
    gridBox:{
        marginBottom: '20px',

    },
    LastGridBox:{
        display: 'flex',
        justifyContent: 'space-around',
        margin: 'auto',
        fontSize: '15px',
        marginBottom: '20px',
    },
    icon:{
        padding: '8px',
        border: '50%',
        borderRadius: '50%',
        width: '21px',
        color: '#fff',
        boxShadow: '1px 3px 5px 0px #c1c1c1',
    },
    one:{
        background: '#3b5998',
    },
    two:{
        background:'#56acee',
    },
    three:{
        background: '#0082ca',
    },
    four:{
        background: '#333333',
    },
    firstBox:{
        display: 'flex',
        justifyContent: 'space-between',
    },
    inputBox:{
        display:'flex',
        flexDirection: 'column',
    },
    name:{
        width: '259px',
    },
    hr:{
        width: '100%',
        borderTop: '1px solid #f1ecec',
        marginBottom: '15px'
    }

}));

const Schema = Yup.object().shape({
    firstName: Yup.string().required("required"),
    lastName: Yup.string().required("required"),
    password: Yup.string()
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Enter strong password"
        )
        .required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    number: Yup.string().required("required"),



});

function FormikRegister() {
    const classes = useStyles();
    return (
        <Formik
            initialValues={{
                firstName:"",
                lastName: "",
                email: "",
                password: "",
                number: "",


            }}
            validationSchema={Schema}
            onSubmit={() => {}}
        >
            {({ values, errors, handleSubmit, handleChange, handleBlur }) => {
                return (
                    <form onSubmit={handleSubmit} className={classes.form}>
                        <Box component='div'className={classes.firstBox}>
                            <Box component='div' className={classes.inputBox}>
                                <TextField
                                    size="small"
                                    id="outlined-basic"
                                    label="First name"
                                    variant="outlined"
                                    type="text"
                                    name="firstName"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.firstName}
                                    placeholder="First name"
                                    className={classes.input + ' ' + classes.name}
                                />
                                <span className="error" style={{color: "red"}}>
              {errors.firstName}
            </span>
                            </Box>
                            <Box component='div' className={classes.inputBox}>
                                <TextField
                                    size="small"
                                    id="outlined-basic"
                                    label="Last name"
                                    variant="outlined"
                                    type="text"
                                    name="lastName"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.lastName}
                                    placeholder="Last name"
                                    className={classes.input + ' ' + classes.name}
                                />
                                <span className="error" style={{color: "red"}}>
              {errors.lastName}
            </span>
                            </Box>


                        </Box>

                        <TextField
                            size="small"
                            id="outlined-basic"
                            label="Your email"
                            variant="outlined"
                            type="email"
                            name="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            placeholder="Your email"
                            className={classes.input}
                        />
                        <span className="error" style={{color: "red"}}>
              {errors.email}
            </span>
                        <TextField
                            size="small"
                            id="outlined-basic"
                            label="Your password"
                            variant="outlined"
                            type="password"
                            name="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.password}
                            placeholder="Your password"
                            className={classes.input}
                            helperText="At least 8 characters and 1 digit"
                        />
                        <span className="error" style={{ color: "red" }}>
              {errors.password}
            </span>

                        <TextField
                            size="small"
                            id="outlined-basic"
                            label="Phone number"
                            variant="outlined"
                            type="number"
                            name="number"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.number}
                            placeholder="Phone number"
                            className={classes.input}
                            helperText="Optional - for two step authentication"
                        />
                        <span className="error" style={{color: "red"}}>
              {errors.number}
            </span>
                        <Box component='div' className={classes.checkboxDiv}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                }
                                label="SUBSCRIBE TO OUR NEWSLETTER"
                            />


                        </Box>

                        <Button
                            className={classes.button}
                            variant="contained"
                            color="primary">
                            SIGN UP
                        </Button>
                        <Grid container className={classes.gridContainer}>

                            <Grid item xs={12} className={classes.gridBox}>
                                <Typography variant="paragraf">or sign up with:</Typography>
                            </Grid>
                            <Grid item xs={5} className={classes.gridBox + ' ' + classes.LastGridBox}>
                                <Link className={classes.icon + ' ' + classes.one}>
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                                <Link className={classes.icon + ' ' + classes.two}>
                                    <i className="fab fa-twitter"></i>
                                </Link>
                                <Link className={classes.icon + ' ' + classes.three}>
                                    <i className="fab fa-linkedin-in"></i>
                                </Link>
                                <Link className={classes.icon + ' ' + classes.four}>
                                    <i className="fab fa-github"></i>
                                </Link>
                            </Grid>

                        </Grid>
                        <hr className={classes.hr}/>
                        <Typography variant='paragraf'>By clicking <i>Sign up</i> you agree to our
                        <Mlink>
                            <Typography variant='paragraf'> terms of service</Typography>
                        </Mlink></Typography>



                    </form>
                );
            }}
        </Formik>
    );
}

export default FormikRegister

