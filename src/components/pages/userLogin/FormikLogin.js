import React, { useState, useContext } from "react";
import {Formik, useFormik} from "formik";
import * as Yup from "yup";
import {Box, Link as Mlink, Typography, TextField, Checkbox, FormControlLabel, Button, Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import {REGISTER} from "../../../rote";
import AuthContext from "../../../store/auth-context";

const useStyles = makeStyles(() => ({
    form:{
        display: 'flex',
        flexDirection: 'column',
        width: '44%',
        margin: 'auto',
        marginTop: '65px',
    },
    input:{
        height: '24px',

        marginBottom: '40px',
        outline: 'none',
    },
    checkboxDiv:{
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'center',
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

}));

const Schema = Yup.object().shape({
    password: Yup.string().required("This field is required"),
    email: Yup.string().email("Invalid email format").required("Required"),



});

function FormikLogin(props) {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const ctxCont = useContext(AuthContext)
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
        email: "",
            password: "",

    },
    // validationSchema :{Schema},
    onSubmit: (values) => {
            console.log(values)
        // event.preventDefault();
        ctxCont.onLogin(values.email, values.password);
    }
    })
    return (
                    <form onSubmit={formik.handleSubmit} className={classes.form}>
                        <TextField
                            size="small"
                            id='email'
                            label="Your email"
                            variant="outlined"
                            type="email"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            placeholder="Your email"
                            className={classes.input}
                        />
                        <span className="error" style={{color: "red"}}>

            </span>
                        <TextField
                            size="small"
                            id="password"
                            label="Your password"
                            variant="outlined"
                            type="password"
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            placeholder="Your password"
                            className={classes.input}
                        />
                        <span className="error" style={{ color: "red" }}>

            </span>
                        <Box component='div' className={classes.checkboxDiv}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                }
                                label="Remember me"
                            />

                            <Link>
                                <Typography variant="paragraf">Forgot password?</Typography>
                            </Link>
                        </Box>

                        <Button
                            className={classes.button}
                            variant="contained"
                            type='submit'
                            color="primary">
                            SIGN IN
                        </Button>
                        <Grid container className={classes.gridContainer}>
                            <Grid item xs={12} className={classes.gridBox }>
                                <Typography variant="paragraf">Not a member?</Typography>
                                <Mlink component={Link} to={REGISTER}>
                                    <Typography variant="paragraf">Register</Typography>
                                </Mlink>
                            </Grid>
                            <Grid item xs={12} className={classes.gridBox}>
                                <Typography variant="paragraf">or sign in with:</Typography>
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



                    </form>
                );

}

export default FormikLogin
