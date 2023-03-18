import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {AppBar, IconButton, Toolbar} from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';

const useStyles = makeStyles((theme) => ({
    appbar: {
      backgroundColor :'transparent',
      background: 'none'
    },
  }));

export default function Header(){
    const classes = useStyles();
    return (
        <div>
            <AppBar classesName={classes.appbar} elevation={0}>
                <Toolbar>
                <h1>
                    Portfolio
                </h1>
                <IconButton>
                    <SortIcon/>
                </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}