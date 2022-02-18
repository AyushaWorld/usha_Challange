import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function NavBar() {
    const classes = useStyles();
   
  return (
    <div className={classes.root}>
            <AppBar position="static" color={"primary"}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Food Resturant's
                    </Typography>
                    <span className="icons mr-5">
                        <Badge badgeContent={6}
                            color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
					</span>
                    <Link to="/fooditems" style={{textDecoration: 'none'}} ><Button className='button' variant="contained" color="secondary">Food List</Button></Link> 
                    <Link to="/" style={{textDecoration: 'none'}}><Button className='button ml-5' variant="contained" color="secondary">Go to Home</Button></Link> 
                </Toolbar>
            </AppBar>
        </div>
  )
}

export default NavBar;