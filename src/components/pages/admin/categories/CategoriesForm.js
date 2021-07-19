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

const CategoriesForm = () => {
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            category: '',

        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className={classes.form}>

            <label htmlFor="category">Category</label>
            <input
                id="category"
                name="category"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.category}
                className={classes.input}
            />
            <button type="submit" className={classes.input}>Submit</button>
        </form>
    );
};

export default CategoriesForm;
