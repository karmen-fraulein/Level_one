import React from 'react'
import TableProducts from "./TableProducts";
import ProductsModal from "./ProductsModal";
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles({
    productDiv:{
        width: '800px',
    },
})


function ProductsInfo() {
    const classes = useStyles();
    return (
        <div className={classes.productDiv}>
            <TableProducts />
            <ProductsModal />

            
        </div>
    )
}

export default ProductsInfo
