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

const ProductsForm = () => {
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            title: '',
            price: '',
            description: '',
            image: '',
            category: '',

        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className={classes.form}>
            <label htmlFor="title">Product Title</label>
            <input
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.title}
                className={classes.input}
            />
            <label htmlFor="price">Product Price</label>
            <input
                id="price"
                name="price"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.price}
                className={classes.input}
            />
            <label htmlFor="description">Product Description</label>
            <input
                id="description"
                name="description"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.description}
                className={classes.input}
            />

            <label htmlFor="image">Product Image</label>
            <input
                id="image"
                name="image"
                type="url"
                onChange={formik.handleChange}
                value={formik.values.image}
                className={classes.input}
            />
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

export default ProductsForm;
