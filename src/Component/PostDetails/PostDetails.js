import React, { useEffect, useState } from 'react';
import './PostDetails.css';
import { useParams, Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Comment from '../Comment/Comment';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
const PostDetails = () => {
    let {postId} = useParams();
    //console.log(postId);

//Get Post By Dynamic id 
    const [post, setPost] = useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(r => r.json())
        .then(d => setPost(d))
    }, [postId])
    const {title, body,id} = post;

//get Photos by : https://jsonplaceholder.typicode.com/photos Api
    const [postImg, setPostImg] = useState([]);
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/photos/${postId}`;
        fetch(url)
        .then(r => r.json())
        .then(d => setPostImg(d))
    }, [postId])
    //console.log(postImg);
    const {url} = postImg;
    return (
        <Container fixed>    
            <section id="post-details-section">
                <section className="">
                    <Link to="/home" className="go-back"><span><KeyboardBackspaceIcon /></span> <span>Go Back</span></Link>  
                </section>
                <div className="post-details">
                    <div className="post-details-img">
                        <img src={url} alt=""/>
                    </div>
                    <div className="post-details-text">
                        <small>Post Id : {id}</small>
                        <h3>{title}</h3>
                        <p>{body}</p>
                    </div>
                </div>
            </section>
            <section className="post-comment-section">
                <Comment postId={postId}/>
            </section>
        </Container>
    );
};

export default PostDetails;