import React from 'react';
import './Header.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

function Header() {
    return (
      <div className= "header">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className="title">
                Hearthstone Hero Memory Game
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
  export default Header;