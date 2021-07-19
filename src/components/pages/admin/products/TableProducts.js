import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import API from "../../../../fetchApi";
import { CardMedia } from "@material-ui/core";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    cardmedia: {
        height: '60px',
        width: '60px',
    },
});



export default function TableProducts() {
    const [data, setData] = useState([])

    const classes = useStyles();
    useEffect(()=>{
        API.getAllData('/products').then((product)=>{
            setData(product)
        })
    },[])



    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Image</TableCell>
                        <TableCell align="left">Title</TableCell>
                        <TableCell align="left">Price</TableCell>
                        <TableCell align="left">Description</TableCell>
                        <TableCell align="left">Categories</TableCell>
                        <TableCell align="left">id</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {!!data && data.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                <CardMedia image={row.image} className={classes.cardmedia}/>
                            </TableCell>
                            <TableCell align="left">{row.title}</TableCell>
                            <TableCell align="left">{row.price}</TableCell>
                            <TableCell align="left">{row.description}</TableCell>
                            <TableCell align="left">{row.category}</TableCell>
                            <TableCell align="left">{row.id}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}