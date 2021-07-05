import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Sizing, Box, Link, Typography, TextField, Button, Checkbox, FormControlLabel, RadioGroup, Radio, Slider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 'auto',
        width: '100%',
    },
    
    input: {
        padding: 'none',


    },
    label:{
        display: 'block',
    },
    star:{
        padding: '17px 3px',
        color: '#007bff',
    },
    span:{
        margin: '5px',
    },
    slider:{
        width: 100,
    },
    margin: {
        height: theme.spacing(3),
    },
    
    
    
}));

const Main = () => {
    const [checked, setChecked] = useState(true);
    const classes = useStyles();
    return (
        <Grid container spacing={5} className={classes.root}>





            <Grid item xs={12} sm={4}>
                <Box >
                    <Box  fontWeight={900} lineHeight={2} fontSize={20}>
                        <Typography variant ='h5'>
                            Subcategories
                        </Typography>

                    </Box>
                    <Box mt={5} lineHeight={2} >
                        <Link href="/" color="inherit">
                            RETURN TO CLOTHING, SHOES, ACCESSORIES
                        </Link>
                    </Box>
                    <Box lineHeight={2} >
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
                
                <Box component='form' noValidate autoComplete="off">
                    <Typography variant='h5'>
                        Filters
                    </Typography>
                    <Box display='flex'>
                        <TextField id="outlined-basic" placeholder="Search..." variant="outlined" className={classes.textField} InputProps={{
                            className: classes.input,
                        }} />
                        <Button><i className="fas fa-search"></i></Button>
                    </Box>
                    <Box>
                        <Typography variant='h6'>
                            Condition
                        </Typography>
                        <Box component="div" >

                            <FormControlLabel
                                control={<Checkbox
                                    defaultChecked
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    
                                />}
                                label="NEW"
                                className={classes.label}
                                
                            />
                            <FormControlLabel
                                control={<Checkbox
                                    defaultChecked
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    
                                />}
                                label="USED"
                                className={classes.label}
                            />
                            <FormControlLabel
                                control={<Checkbox
                                    defaultChecked
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    
                                />}
                                label="COLLECTIBLE"
                                className={classes.label}
                            />
                            <FormControlLabel
                                control={<Checkbox
                                    defaultChecked
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    
                                />}
                                label="RENEWED"
                                className={classes.label}
                            />
                        </Box>
                        
                        
                    
                    </Box>

                    <Box component='div'>
                        <Typography variant='h6'>
                            Avg. Customer Review

                        </Typography>
                        <Box display='flex'>
                            <Link href="/" color="inherit" className={classes.star}>
                                <i className="fas fa-star"></i>
                            </Link>
                            <Link href="/" color="inherit" className={classes.star}>
                                <i className="fas fa-star"></i>
                            </Link>
                            <Link href="/" color="inherit" className={classes.star}>
                                <i className="fas fa-star"></i>
                            </Link>
                            <Link href="/" color="inherit" className={classes.star}>
                                <i className="fas fa-star"></i>
                            </Link>
                            <Link href="/" color="inherit" className={classes.star}>
                                <i className="far fa-star"></i>
                                
                            </Link>
                            <Link href="/" color="inherit">
                                <p>& UP</p>

                            </Link>
                        </Box>
                        <Box display='flex'>
                            <Link href="/" color="inherit" className={classes.star}>
                                <i className="fas fa-star"></i>
                            </Link>
                            <Link href="/" color="inherit" className={classes.star}>
                                <i className="fas fa-star"></i>
                            </Link>
                            <Link href="/" color="inherit" className={classes.star}>
                                <i className="fas fa-star"></i>
                            </Link>
                            <Link href="/" color="inherit" className={classes.star}>
                                <i className="far fa-star"></i>
                            </Link>
                            <Link href="/" color="inherit" className={classes.star}>
                                <i className="far fa-star"></i>

                            </Link>
                            <Link href="/" color="inherit">
                                <p>& UP</p>

                            </Link>
                        </Box>
                        <Box display='flex'>
                            <Link href="/" color="inherit" className={classes.star}>
                                <i className="fas fa-star"></i>
                            </Link>
                            <Link href="/" color="inherit" className={classes.star}>
                                <i className="fas fa-star"></i>
                            </Link>
                            <Link href="/" color="inherit" className={classes.star}>
                                <i className="far fa-star"></i>
                            </Link>
                            <Link href="/" color="inherit" className={classes.star}>
                                <i className="far fa-star"></i>
                            </Link>
                            <Link href="/" color="inherit" className={classes.star}>
                                <i className="far fa-star"></i>

                            </Link>
                            <Link href="/" color="inherit">
                                <p>& UP</p>

                            </Link>
                        </Box>
                        <Box display='flex'>
                            <Link href="/" color="inherit" className={classes.star}>
                                <i className="fas fa-star"></i>
                            </Link>
                            <Link href="/" color="inherit" className={classes.star}>
                                <i className="far fa-star"></i>
                            </Link>
                            <Link href="/" color="inherit" className={classes.star}>
                                <i className="far fa-star"></i>
                            </Link>
                            <Link href="/" color="inherit" className={classes.star}>
                                <i className="far fa-star"></i>
                            </Link>
                            <Link href="/" color="inherit" className={classes.star}>
                                <i className="far fa-star"></i>

                            </Link>
                            <Link href="/" color="inherit">
                                <p>& UP</p>

                            </Link>
                        </Box>

                    </Box>
                    <Box>
                        <Typography variant='h6'>
                                    Price
                        </Typography>
                        <RadioGroup aria-label="gender" name="gender1" >
                            <FormControlLabel value="1" control={<Radio />} label="UNDER $25" />
                            <FormControlLabel value="2" control={<Radio />} label="$25 TO $50" />
                            <FormControlLabel value="3" control={<Radio />} label="$50 TO $100" />
                            <FormControlLabel value="4" control={<Radio />} label="$100 TO $200" />
                            <FormControlLabel value="5" control={<Radio />} label="$200 & ABOVE" iconStyle={{ fill: 'white' }}/>
                            <Box display='flex' alignItems="center">
                                <TextField id="outlined-basic" label="$ Min" variant="outlined" />
                                <span className={classes.span}>-</span>
                                <TextField id="outlined-basic" label="$ Max" variant="outlined" />
                            </Box>
                            


                            
                        </RadioGroup>
                    </Box>

                    <Box>
                        <Typography variant='h6'>
                            Price
                        </Typography>
                        <Slider
                            defaultValue={20}
                            
                            aria-labelledby="discrete-slider-custom"
                            step={3}
                            className={classes.slider}
                           
                            
                        />

                    </Box>

                    


                </Box>

                















            </Grid>
            <Grid item xs={12} sm={8}>
                <Box >
                    jsbjgdhd
                </Box>



            </Grid>


        </Grid>
    )
}

export default Main
