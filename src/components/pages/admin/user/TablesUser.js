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

});



export default function TablesUser() {
    const [data, setData] = useState([])

    const classes = useStyles();
    useEffect(()=>{
        API.getAllData('/users').then((user)=>{
            setData(user)
        })
    },[])



    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>

                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">Username</TableCell>
                        <TableCell align="left">Password</TableCell>
                        <TableCell align="left">FirstName</TableCell>
                        <TableCell align="left">LastName</TableCell>
                        <TableCell align="left">City</TableCell>
                        <TableCell align="left">Phone</TableCell>
                        <TableCell align="left">Id</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {!!data && data.map((row) => (
                        <TableRow key={row.id}>

                            <TableCell align="left">{row.email}</TableCell>
                            <TableCell align="left">{row.username}</TableCell>
                            <TableCell align="left">{row.password}</TableCell>
                            <TableCell align="left">{row.name.firstname}</TableCell>
                            <TableCell align="left">{row.name.lastname}</TableCell>
                            <TableCell align="left">{row.address.city}</TableCell>
                            <TableCell align="left">{row.phone}</TableCell>
                            <TableCell align="left">{row.id}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}