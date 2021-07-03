import React from "react";
import useStyles from "./useStyles";
import {
    Box,
    Container,
    Grid,
    Link,
    Paper,
    Sizing
} from "@material-ui/core";

const Footer = () => {
    const classes = useStyles();
    return (
        <footer>
            <Box>
                
                <div className={classes.mainDiv}>
                    <div className={classes.footerRoot} >
                        <Grid item sm={9} xs={12} >
                            <Paper className={classes.paper}>Get connected with us on social networks!</Paper>
                        </Grid>
                        <Grid item sm={3} xs={12}>
                            <Paper className={classes.paper}>
                                <Link className={classes.social} href="/" color="inherit"><i class="fab fa-facebook-f"></i></Link>
                                <Link className={classes.social} href="/" color="inherit"><i class="fab fa-twitter"></i></Link>
                                <Link className={classes.social} href="/" color="inherit"><i class="fab fa-google-plus-g"></i></Link>
                                <Link className={classes.social} href="/" color="inherit"><i class="fab fa-linkedin-in"></i></Link>
                                <Link className={classes.social} href="/" color="inherit"><i class="fab fa-instagram"></i></Link>
                            </Paper>
                        </Grid>
                    </div>
                    <Container maxWidth="lg"  className={classes.footerContainer} >


                        <Grid container spacing={5}>
                            <Grid item xs={12} sm={3}>
                                <Box borderBottom={1} lineHeight={2} fontWeight={900} fontSize={20}>
                                    About me

                                </Box>
                                <Box mt={5} lineHeight={2} color="inherit">
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    
                                </Box>


                            </Grid>

                            <Grid item xs={12} sm={3}>
                                <Box borderBottom={1} fontWeight={900} lineHeight={2} fontSize={20}>
                                    Product

                                </Box>
                                <Box mt={5} lineHeight={2} >
                                    <Link href="/" color="inherit">
                                        MDBootstrap
                                    </Link>
                                </Box>
                                <Box lineHeight={2} >
                                    <Link href="/" color="inherit">
                                        MDWordPress
                                    </Link>
                                </Box>
                                <Box lineHeight={2}>
                                    <Link href="/" color="inherit">
                                        BrandFlow
                                    </Link>
                                </Box>
                                <Box lineHeight={2}>
                                    <Link href="/" color="inherit">
                                        Bootstrap Angular
                                    </Link>
                                </Box>

                            </Grid>

                            <Grid item xs={12} sm={3}>
                                <Box borderBottom={1} fontWeight={900} lineHeight={2} fontSize={20}>
                                    Useful links

                                </Box>
                                <Box mt={5} lineHeight={2} >
                                    <Link href="/" color="inherit">
                                        Your Account
                                    </Link>
                                </Box>
                                <Box lineHeight={2}>
                                    <Link href="/" color="inherit">
                                        Become an Affiliate
                                    </Link>
                                </Box>
                                <Box lineHeight={2}>
                                    <Link href="/" color="inherit">
                                        Shipping Rates
                                    </Link>
                                </Box>
                                <Box lineHeight={2}>
                                    <Link href="/" color="inherit">
                                        Help
                                    </Link>
                                </Box>

                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Box borderBottom={1} fontWeight={900} lineHeight={2} fontSize={20}>
                                    Contacts

                                </Box>
                                <Box mt={5} lineHeight={2} >
                                    <Link href="/" color="inherit">
                                        Contact
                                    </Link>
                                </Box>
                                <Box lineHeight={2}>
                                    <Link href="/" color="inherit">
                                        New York, Avenue Street 10
                                    </Link>
                                </Box>
                                <Box lineHeight={2}>
                                    <Link href="/" color="inherit">
                                        042 876 836 908
                                    </Link>
                                </Box>
                                <Box lineHeight={2}>
                                    <Link href="/" color="inherit">
                                        company@example.com
                                    </Link>
                                </Box>
                                <Box lineHeight={2}>
                                    <Link href="/" color="inherit">
                                        Monday - Friday: 10-17
                                    </Link>
                                </Box>


                            </Grid>



                        </Grid>

                    </Container>
                    <div className={classes.footerLastDiv} >
                        <Grid item sm={12} xs={12} >
                            <Paper className={classes.footerLastPaper}>© 2020 Copyright: 
                                <Link href="https://mdbootstrap.com/" color="inherit">
                                     MDBootstrap.com
                                </Link>
                            </Paper>
                        </Grid>
                        
                    </div>
                </div>
                

            </Box>
            
        </footer>
    )
}

export default Footer
