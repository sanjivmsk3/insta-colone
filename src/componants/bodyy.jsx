import { Card, Container, List, ListItem, makeStyles, Paper, ListItemAvatar, Avatar, ListItemText, Link, ListItemSecondaryAction } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() =>({
    conn:{
        width:400,
        marginLeft:900,
        marginTop:-3750,
        position: "fixed",
    },
}));

function Bidy() {
    const classes = useStyles();
    return(
        <React.Fragment>
            <Container className={classes.conn} >
                <Card>
                    <List>
                        <ListItem>
                            <ListItemAvatar >
                                <Avatar src='https://instagram.fpat3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/101342358_1313266228866779_5825083467175559168_n.jpg?_nc_ht=instagram.fpat3-1.fna.fbcdn.net&_nc_ohc=cYXoUQ0DilsAX8W-IpR&tp=1&oh=ae0b5ac5d1128db4849feaa277b893f1&oe=6023D1C6' />
                            </ListItemAvatar>
                            <ListItemText primary='Chaurasia-sandi' secondary='(っ◔◡◔)っ ♥ sandip ♥' />
                            <ListItemSecondaryAction><Link href=''>Switch</Link></ListItemSecondaryAction>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Suggestions For You" />
                            <ListItemSecondaryAction><Link href='' variant='body2' color="inherit">See All</Link></ListItemSecondaryAction>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar >
                                <Avatar src='https://instagram.fpat3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/101342358_1313266228866779_5825083467175559168_n.jpg?_nc_ht=instagram.fpat3-1.fna.fbcdn.net&_nc_ohc=cYXoUQ0DilsAX8W-IpR&tp=1&oh=ae0b5ac5d1128db4849feaa277b893f1&oe=6023D1C6' />
                            </ListItemAvatar>
                            <ListItemText primary='vivekxyz007' secondary='Followed by ankit1691kumar + 1 more' />
                            <ListItemSecondaryAction variant='body2'><Link href=''>Follow</Link></ListItemSecondaryAction>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar >
                                <Avatar src='https://instagram.fpat3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/101342358_1313266228866779_5825083467175559168_n.jpg?_nc_ht=instagram.fpat3-1.fna.fbcdn.net&_nc_ohc=cYXoUQ0DilsAX8W-IpR&tp=1&oh=ae0b5ac5d1128db4849feaa277b893f1&oe=6023D1C6' />
                            </ListItemAvatar>
                            <ListItemText primary='vivekxyz007' secondary='Followed by ankit1691kumar + 1 more' />
                            <ListItemSecondaryAction variant='body2'><Link href=''>Follow</Link></ListItemSecondaryAction>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar >
                                <Avatar src='https://instagram.fpat3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/101342358_1313266228866779_5825083467175559168_n.jpg?_nc_ht=instagram.fpat3-1.fna.fbcdn.net&_nc_ohc=cYXoUQ0DilsAX8W-IpR&tp=1&oh=ae0b5ac5d1128db4849feaa277b893f1&oe=6023D1C6' />
                            </ListItemAvatar>
                            <ListItemText primary='vivekxyz007' secondary='Followed by ankit1691kumar + 1 more' />
                            <ListItemSecondaryAction variant='body2'><Link href=''>Follow</Link></ListItemSecondaryAction>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar >
                                <Avatar src='https://instagram.fpat3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/101342358_1313266228866779_5825083467175559168_n.jpg?_nc_ht=instagram.fpat3-1.fna.fbcdn.net&_nc_ohc=cYXoUQ0DilsAX8W-IpR&tp=1&oh=ae0b5ac5d1128db4849feaa277b893f1&oe=6023D1C6' />
                            </ListItemAvatar>
                            <ListItemText primary='vivekxyz007' secondary='Followed by ankit1691kumar + 1 more' />
                            <ListItemSecondaryAction variant='body2'><Link href=''>Follow</Link></ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </Card>
            </Container>
        </React.Fragment>
    )    
};
export default Bidy;