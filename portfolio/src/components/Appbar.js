import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse, Menu } from '@material-ui/core';
import MenuWidget from './Menu';
import Button from '@mui/material-next/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
    },
    appbar: {
        background: 'none',
    },
    appbarWrapper: {
        width: '90%',
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: '1',
        // margin: '3'
    },
    icon: {
        color: '#CDDC39',
        fontSize: '2rem',
    },
    colorText: {
        flexGrow: '1',
        color: '#CDDC39',
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: '#fff',
        fontSize: '4.5rem',
    },
    goDown: {
        color: '#5AFF3D',
        fontSize: '4rem',
    },
}));

export default function ResponsiveAppBar() {
    const classes = useStyles();
    return (<AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
            <h1 className={classes.appbarTitle}>
                Tech<span className={classes.colorText}>Sprunity</span>
            </h1>
            <Button
            style={{fontSize: '22px'}}
                variant='text'
                color='white'
                size='large'
                className={classes.colorText}
            >services</Button>
            <Button
            style={{fontSize: '22px'}}
                variant='text'
                color='white'
                size='large'
                className={classes.colorText}
            >contact us</Button>
            <Button
            onClick={'/quote'}
            style={{fontSize: '22px'}}
                variant='text'
                color='white'
                size='large'
                className={classes.colorText}
            >free quote</Button>
            <IconButton className={classes.icon}>
                <MenuWidget />
            </IconButton>
        </Toolbar>
    </AppBar>
    );
}