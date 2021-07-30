import { AppBar, Avatar, IconButton, InputBase, makeStyles, Paper, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import HomeIcon from '@material-ui/icons/Home'
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';


const useStyles= makeStyles(() => ({
    app:{
        backgroundColor:"#f5f5f5",
    },
    tool:{
        marginLeft:260,
    },
    input:{
        marginLeft:260,
        paddingLeft: 50,
    },
    icon:{
        marginLeft: 130,
        color: 'black',
    },
    icn:{
        fontSize:25,
    },
    home:{
        marginLeft:20,
        fontSize:25,
    },
    avatar:{
        width:24,
        height:24,
    },
    a:{
        marginLeft:17,
    },
}));

function Header() {
    const classes = useStyles();
    return(
        <React.Fragment>
            <AppBar position='sticky' className={classes.app}>
                <Toolbar className={classes.tool}>
                    <a href=''><img src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' /></a>
                    <Paper className={classes.input}>
                        <InputBase placeholder='search' />
                    </Paper>
                    <div className={classes.icon}>
                    <a href=""><HomeIcon /></a>
                    <a href='' className={classes.home}><ForumOutlinedIcon /></a>
                    <a href="" className={classes.home}><ExploreOutlinedIcon /></a> 
                    <a href="" className={classes.home}><FavoriteBorderOutlinedIcon /></a>
                    </div>
                    <a href="" className={classes.a}><Avatar className={classes.avatar}  src="https://instagram.fpat3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/101342358_1313266228866779_5825083467175559168_n.jpg?_nc_ht=instagram.fpat3-1.fna.fbcdn.net&_nc_ohc=cYXoUQ0DilsAX8W-IpR&tp=1&oh=ae0b5ac5d1128db4849feaa277b893f1&oe=6023D1C6" /></a>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
export default Header;