import React, { useState, useEffect } from 'react';
import './Comment.css';
import FeedbackIcon from '@material-ui/icons/Feedback';
import { Button } from '@material-ui/core';

const Comment = ({ postId }) => {
    //console.log(postId);
    const [comment, setCommnet] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
            .then(r => r.json())
            .then(d => setCommnet(d));
    }, [postId]);
    //console.log(comment);

//get random user img with fetched
// ran means random 
    const [ranImg, setRanImg] = useState([]);
    useEffect(() => {
        const getRanImgUrl = async () => {
            await fetch("https://randomuser.me/api/")
              .then((r) => r.json())
              .then((d) => setRanImg(d.results[0].picture.large));
          };
          getRanImgUrl();
    }, [])
   // console.log(ranImg);

//replayClick Function for replay click
    //const [userReplay, setUserReplay] = useState();
    const replayClick = () => {
        console.log('click');
    }
    return (
        <div>
           
            <br/>
            <div className="comment-input">
                <div className="comment-area">
                    <h2>Write a comment :</h2><FeedbackIcon className="feed-back-icon"/>
                </div>
                <input type="text" placeholder="Comment..."/>
            </div>
            {
                comment.map(p => {
                    return (
                        <div key={p.id}>
                            <div className="older-comment">
                                <div className="comment-parent">
                                    <div className="comment-man-img">
                                        <img src={ranImg} alt={p.email}/>
                                    </div>  
                                    <div className="commenter-name"> 
                                        <p>{p.name}</p>
                                    </div>
                                </div>
                                <div className="comment-text">
                                    <p>{p.body}</p>

                                    <br/><br/>
                                    <div className="replay-sec">
                                        <input type="text" placeholder="Replay...."/>
                                        <Button 
                                        variant="outlined" 
                                        color="primary"
                                        onClick={()=> replayClick()}
                                        >
                                            Replay
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Comment;