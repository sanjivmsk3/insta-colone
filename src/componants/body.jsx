import React from 'react';
import {Typography, Container, makeStyles, Paper, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    cont:{
        marginLeft: 265,
    },
    paper1:{
        width:610,
        marginTop:30,
    },
    root:{
        display: 'flex',
        '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    },
}));

function Bodys() {
    const classes = useStyles();
    return(
        <React.Fragment>
            <Container className={classes.cont}>
                <Paper className={classes.paper1}>
                    <div className={classes.root}>
                    <Avatar src='https://instagram.fpat3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/101342358_1313266228866779_5825083467175559168_n.jpg?_nc_ht=instagram.fpat3-1.fna.fbcdn.net&_nc_ohc=cYXoUQ0DilsAX8W-IpR&tp=1&oh=ae0b5ac5d1128db4849feaa277b893f1&oe=6023D1C6' />
                    <Avatar src='https://instagram.fpat3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/101342358_1313266228866779_5825083467175559168_n.jpg?_nc_ht=instagram.fpat3-1.fna.fbcdn.net&_nc_ohc=cYXoUQ0DilsAX8W-IpR&tp=1&oh=ae0b5ac5d1128db4849feaa277b893f1&oe=6023D1C6' />
                    <Avatar src='https://instagram.fpat3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/101342358_1313266228866779_5825083467175559168_n.jpg?_nc_ht=instagram.fpat3-1.fna.fbcdn.net&_nc_ohc=cYXoUQ0DilsAX8W-IpR&tp=1&oh=ae0b5ac5d1128db4849feaa277b893f1&oe=6023D1C6' />
                    <Avatar src='https://instagram.fpat3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/101342358_1313266228866779_5825083467175559168_n.jpg?_nc_ht=instagram.fpat3-1.fna.fbcdn.net&_nc_ohc=cYXoUQ0DilsAX8W-IpR&tp=1&oh=ae0b5ac5d1128db4849feaa277b893f1&oe=6023D1C6' />
                    <Avatar src='https://instagram.fpat3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/101342358_1313266228866779_5825083467175559168_n.jpg?_nc_ht=instagram.fpat3-1.fna.fbcdn.net&_nc_ohc=cYXoUQ0DilsAX8W-IpR&tp=1&oh=ae0b5ac5d1128db4849feaa277b893f1&oe=6023D1C6' />
                    <Avatar src='https://instagram.fpat3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/101342358_1313266228866779_5825083467175559168_n.jpg?_nc_ht=instagram.fpat3-1.fna.fbcdn.net&_nc_ohc=cYXoUQ0DilsAX8W-IpR&tp=1&oh=ae0b5ac5d1128db4849feaa277b893f1&oe=6023D1C6' />
                    <Avatar src='https://instagram.fpat3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/101342358_1313266228866779_5825083467175559168_n.jpg?_nc_ht=instagram.fpat3-1.fna.fbcdn.net&_nc_ohc=cYXoUQ0DilsAX8W-IpR&tp=1&oh=ae0b5ac5d1128db4849feaa277b893f1&oe=6023D1C6' />
                    <Avatar src='https://instagram.fpat3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/101342358_1313266228866779_5825083467175559168_n.jpg?_nc_ht=instagram.fpat3-1.fna.fbcdn.net&_nc_ohc=cYXoUQ0DilsAX8W-IpR&tp=1&oh=ae0b5ac5d1128db4849feaa277b893f1&oe=6023D1C6' />
                    </div>
                </Paper>
            </Container>
        </React.Fragment>
    )
};
export default Bodys;