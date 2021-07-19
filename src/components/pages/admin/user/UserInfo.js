import React from 'react'
import TablesUser from "./TablesUser";
import TransitionsModal from "./TransitionModal";
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles({
    userDiv:{
        width: '800px',
    },
})


function UserInfo() {
    const classes = useStyles();
    return (
        <div className={classes.userDiv}>
            <TablesUser />
            <TransitionsModal />
            
        </div>
    )
}

export default UserInfo
