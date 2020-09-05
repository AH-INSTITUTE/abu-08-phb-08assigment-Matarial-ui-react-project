import React, { useState } from 'react';
import './Post.css'
import { makeStyles } from '@material-ui/core/styles';

import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Avatar,
    IconButton,
    Typography,
} from '@material-ui/core';

import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    margin: '20px 0 0 0',
    boxShadow: '0 0 8px gray'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    fontSize: '8px'
  },
  button: {
    margin: theme.spacing(1),
    marginLeft: 'auto',
  },
}));
const Post = ({posts}) => {
    const {title, id} = posts;
    const classes = useStyles();

    //const [expanded, setExpanded] = React.useState(false);
    // const handleExpandClick = () => {
    //   setExpanded(!expanded);
    // };
    const [likeCount, setLikeCount] = useState(0);
    const favOneC = () =>{
        const newCount = likeCount + 1;
        setLikeCount(newCount);
    }

    const history = useHistory();
    const clickpostDetails = (id, userId) => {
        console.log('object');
        const url = `/post-details/${id}`
        history.push(url);  
    }
    return (
        <section>
            <div id="card-section">
                <Card className={classes.root}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                Post:{id}
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={title}
                        subheader="September 14, 2016"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {title}. This impressive paella is a perfect party dish and a fun meal to cook together with your
                            guests. Add 1 cup of frozen peas along with the mussels, if you like...... <br/> if you want to <span className="extra-style">read more</span> plase click <span className="extra-style">See more</span> Button
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites"  onClick={()=> favOneC()}>
                            <FavoriteIcon />
                            <small className="count-like"> like {likeCount}</small>
                        </IconButton>
                        <IconButton aria-label="share" className="shear-icon">
                            <ShareIcon />
                        </IconButton>   
                        <Button
                            onClick={()=> clickpostDetails(id)}
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            endIcon={<DoubleArrowIcon />}
                        >
                            See More
                        </Button>             
                    </CardActions>                
                </Card>
            </div>
            <div id="post-catagories">

            </div>
        </section>
    );
};

export default Post;