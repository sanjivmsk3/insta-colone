import { makeStyles, Typography,Avatar,Card, CardHeader, IconButton, CardMedia, CardActions, InputBase, Link } from '@material-ui/core';
import React from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';

const useStyles = makeStyles(() => ({
    pape:{
        marginTop: 30,
        marginLeft: 289,
        width:610,
    },
    input:{
        width:570,
    }, 
}));

function Body1() {
    const classes = useStyles();
    return(
        <React.Fragment>
            <Card className={classes.pape}>
                <CardHeader avatar={ 
                <Avatar src='https://instagram.fpat3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/101342358_1313266228866779_5825083467175559168_n.jpg?_nc_ht=instagram.fpat3-1.fna.fbcdn.net&_nc_ohc=cYXoUQ0DilsAX8W-IpR&tp=1&oh=ae0b5ac5d1128db4849feaa277b893f1&oe=6023D1C6' /> 
                }
                action={
                    <IconButton aria-label='settings'>
                        <MoreHorizIcon />
                    </IconButton>
                }
                title='comedy.jokesofficial'
                />
                <CardMedia>
                    <img src="https://www.pixelstalk.net/wp-content/uploads/2016/10/New-and-latest-wallpaper-hd-768x480.jpg" height='600' width='610' alt=""/>
                </CardMedia>
                <CardActions disableSpacing>
                    <IconButton>
                        <FavoriteBorderOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <ChatBubbleOutlineIcon />
                    </IconButton>
                    <IconButton>
                        <NearMeOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <BookmarkBorderOutlinedIcon edge='end' />
                    </IconButton>
                </CardActions>
                <Typography variant="body2">47,000 likes</Typography>
                <Typography variant="body2" color="textSecondary" component="p">View all 52 comments</Typography>
                <Typography variant="body2">sangitakahar1942020 👏</Typography>
                <Typography variant="body2">vivek_tiwari_7362 😂😂😂😂😂😂😂😂😂😂😂</Typography>
                <Typography variant="body2" color="textSecondary" component="p">7 HOURS AGO</Typography>
                <br/>
                <InputBase className={classes.input} placeholder='Add a comment...' />
                <Link href=''>Post</Link>
            </Card>

            <Card className={classes.pape}>
                <CardHeader avatar={ 
                <Avatar src='https://instagram.fpat3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/101342358_1313266228866779_5825083467175559168_n.jpg?_nc_ht=instagram.fpat3-1.fna.fbcdn.net&_nc_ohc=cYXoUQ0DilsAX8W-IpR&tp=1&oh=ae0b5ac5d1128db4849feaa277b893f1&oe=6023D1C6' /> 
                }
                action={
                    <IconButton aria-label='settings'>
                        <MoreHorizIcon />
                    </IconButton>
                }
                title='comedy.jokesofficial'
                />
                <CardMedia>
                    <img src="https://th.bing.com/th/id/OIP.E_9HAatA-vnJNtbyjgoh4wHaEo?pid=Api&rs=1" width='609' height='600' alt=""/>
                </CardMedia>
                <CardActions disableSpacing>
                    <IconButton>
                        <FavoriteBorderOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <ChatBubbleOutlineIcon />
                    </IconButton>
                    <IconButton>
                        <NearMeOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <BookmarkBorderOutlinedIcon edge='end' />
                    </IconButton>
                </CardActions>
                <Typography variant="body2">47,000 likes</Typography>
                <Typography variant="body2" color="textSecondary" component="p">View all 52 comments</Typography>
                <Typography variant="body2">sangitakahar1942020 👏</Typography>
                <Typography variant="body2">vivek_tiwari_7362 😂😂😂😂😂😂😂😂😂😂😂</Typography>
                <Typography variant="body2" color="textSecondary" component="p">7 HOURS AGO</Typography>
                <br/>
                <InputBase className={classes.input} placeholder='Add a comment...' />
                <Link href='' >Post</Link>
            </Card>     
            <Card className={classes.pape}>
                <CardHeader avatar={ 
                <Avatar src='https://instagram.fpat3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/101342358_1313266228866779_5825083467175559168_n.jpg?_nc_ht=instagram.fpat3-1.fna.fbcdn.net&_nc_ohc=cYXoUQ0DilsAX8W-IpR&tp=1&oh=ae0b5ac5d1128db4849feaa277b893f1&oe=6023D1C6' /> 
                }
                action={
                    <IconButton aria-label='settings'>
                        <MoreHorizIcon />
                    </IconButton>
                }
                title='comedy.jokesofficial'
                />
                <CardMedia>
                    <img src="https://www.pixelstalk.net/wp-content/uploads/2016/10/New-and-latest-wallpaper-hd-768x480.jpg" height='600' width='610' alt=""/>
                </CardMedia>
                <CardActions disableSpacing>
                    <IconButton>
                        <FavoriteBorderOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <ChatBubbleOutlineIcon />
                    </IconButton>
                    <IconButton>
                        <NearMeOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <BookmarkBorderOutlinedIcon edge='end' />
                    </IconButton>
                </CardActions>
                <Typography variant="body2">47,000 likes</Typography>
                <Typography variant="body2" color="textSecondary" component="p">View all 52 comments</Typography>
                <Typography variant="body2">sangitakahar1942020 👏</Typography>
                <Typography variant="body2">vivek_tiwari_7362 😂😂😂😂😂😂😂😂😂😂😂</Typography>
                <Typography variant="body2" color="textSecondary" component="p">7 HOURS AGO</Typography>
                <br/>
                <InputBase className={classes.input} placeholder='Add a comment...' />
                <Link href='' >Post</Link>
            </Card>

            <Card className={classes.pape}>
                <CardHeader avatar={ 
                <Avatar src='https://instagram.fpat3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/101342358_1313266228866779_5825083467175559168_n.jpg?_nc_ht=instagram.fpat3-1.fna.fbcdn.net&_nc_ohc=cYXoUQ0DilsAX8W-IpR&tp=1&oh=ae0b5ac5d1128db4849feaa277b893f1&oe=6023D1C6' /> 
                }
                action={
                    <IconButton aria-label='settings'>
                        <MoreHorizIcon />
                    </IconButton>
                }
                title='comedy.jokesofficial'
                />
                <CardMedia>
                    <img src="https://th.bing.com/th/id/OIP.E_9HAatA-vnJNtbyjgoh4wHaEo?pid=Api&rs=1" width='609' height='600' alt=""/>
                </CardMedia>
                <CardActions disableSpacing>
                    <IconButton>
                        <FavoriteBorderOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <ChatBubbleOutlineIcon />
                    </IconButton>
                    <IconButton>
                        <NearMeOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <BookmarkBorderOutlinedIcon edge='end' />
                    </IconButton>
                </CardActions>
                <Typography variant="body2">47,000 likes</Typography>
                <Typography variant="body2" color="textSecondary" component="p">View all 52 comments</Typography>
                <Typography variant="body2">sangitakahar1942020 👏</Typography>
                <Typography variant="body2">vivek_tiwari_7362 😂😂😂😂😂😂😂😂😂😂😂</Typography>
                <Typography variant="body2" color="textSecondary" component="p">7 HOURS AGO</Typography>
                <br/>
                <InputBase className={classes.input} placeholder='Add a comment...' />
                <Link href='' >Post</Link>
            </Card>
        </React.Fragment>
    )
};
export default Body1;