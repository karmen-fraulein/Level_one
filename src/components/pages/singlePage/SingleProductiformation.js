import React, { useState } from 'react';
import { Box, Typography, Grid, Button, Radio, FormControlLabel } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    firstInfoDiv: {
        height: "auto",
        
    },
    lastBox: {
        display: "flex"
    },
    cart:{
        alignItems: 'center',
    },
    fieldset:{
        marginTop: '14px'
    },
    star:{
    fontSize: '19px',
    color: '#1266f1',
    },
    quantity:{
        marginBottom: '17px',
    },
}))


function SingleProductiformation({singleData}) {
    const classes = useStyles();
    const [count, setCount] = useState(1);
    return (
        <Grid item xs={12} sm={12} md={6} >
        <Box  className={classes.firstInfoDiv}>
            <Typography variant="h5">
                   {singleData.title}
            </Typography>
            <Typography variant="paragraf">
                    {singleData.category}
            </Typography>
                <Box component="div" mb={3} borderColor="transparent" className={classes.fieldset}>
                    <Rating name="read-only" defaultValue ={3} readOnly className={classes.star} />
                </Box>
                <Typography variant="h6" className={classes.fieldset}>
                    {singleData.price}%
                </Typography>
                <Typography variant="paragraf" className={classes.fieldset}>
                    {singleData.description}
                </Typography>
                <Grid sm={6} xs={12} >
                    <Box marginTop='30px' fontSize='15px' color='#4F4F4F' display='flex' justifyContent='space-between'>
                        <Box fontWeight='bold'> Model </Box>
                        <Box>Shirt 5407X</Box>
                    </Box>
                    <Box marginTop='30px' fontSize='15px' color='#4F4F4F' display='flex' justifyContent='space-between'>
                        <Box fontWeight='bold'>Color </Box>
                        <Box >Blue</Box>
                    </Box>
                    <Box marginTop='30px' fontSize='15px' color='#4F4F4F' display='flex' justifyContent='space-between'>
                        <Box fontWeight='bold'>Delivery </Box>
                        <Box >	USA, Europe</Box>
                    </Box>
                    
                </Grid>
                <Box component="hr" marginTop='30px'></Box>
                <Box >
                    <Box mt='20px' display='flex' className={classes.cart}>
                        <Box>
                            <Box color='#554F4F' fontSize='15px' className={classes.quantity}>Quantity</Box>
                            <Box>
                                <form noValidate autoComplete="off" >
                                    <Button variant='outlined' onClick={() => setCount(count - 1)} >-</Button>
                                    <Button className={classes.textfield} variant="outlined">{count}</Button>
                                    <Button variant='outlined' onClick={() => setCount(count + 1)} >+</Button>
                                </form>
                            </Box>
                        </Box>
                        <Box ml='15px'>
                            <Box color='#554F4F' fontSize='15px'>Select size</Box>
                            <Box display='flex' mt='10px'>
                                <FormControlLabel value="small" control={<Radio color="primary" />} label="SMALL" />
                                <FormControlLabel value="medium" control={<Radio color="primary" />} label="MEDIUM" />
                                <FormControlLabel value="large" control={<Radio color="primary" />} label="LARGE" />
                            </Box>
                        </Box>
                    </Box>
                    <Box display='flex' mt='25px'>
                        <Box><Button variant="contained" color="primary" >buy Now</Button></Box>
                        <Box ml='5px'><Button variant="contained"><ShoppingCartIcon />Add to Cart</Button></Box>
                    </Box>

                </Box>
        </Box>
        
        </Grid>
    )
}

export default SingleProductiformation
