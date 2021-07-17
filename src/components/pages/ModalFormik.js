import React from 'react';
import { useFormik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    form:{
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        width: '320px',

    },
    input: {
        marginBottom: '20px',
    }

}));

const SignupForm = () => {
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            address: '',
            phone: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className={classes.form}>
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                className={classes.input}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                className={classes.input}
            />
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className={classes.input}
            />
            <label htmlFor="password">Password</label>
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                className={classes.input}
            />
            <label htmlFor="address">Address</label>
            <input
                id="address"
                name="address"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.address}
                className={classes.input}
            />
            <label htmlFor="phone">Phone</label>
            <input
                id="phone"
                name="phone"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.phone}
                className={classes.input}
            />
            <button type="submit" className={classes.input}>Submit</button>
        </form>
    );
};

export default SignupForm;
