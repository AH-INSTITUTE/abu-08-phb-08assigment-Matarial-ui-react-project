import React, { useEffect, useState } from 'react';
import logo from './../../logo.png';
import './Home.css'
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Post from '../Post/Post';
const Home = () => {
    const [post, setPost] = useState([]);
    useEffect(()=>{
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(r => r.json())
        .then(d => setPost(d))
    } ,[])
    return (
    <Container fixed>
        <header id="header" className="">
            <div id="logo">
                <img src={logo} alt="" />
            </div>
            <div id="main-menu">
                <ul>
                    <li><Link to="/home" className="cursor-pointer menu-item">Home</Link></li>
                    <li> <Link to="/about" className="cursor-pointer menu-item">About</Link></li>
                    <li><Link to="/Login" className="cursor-pointer menu-item">Login</Link></li>
                    <li> <Link to="/singup" className="cursor-pointer menu-item">Sing Up</Link></li>
                </ul> 
            </div>
        </header>
        <main id="main">
           {
               post.map(p => <Post posts={p} key={p.id} />)
           }
        </main>
    </Container>
    );
};

export default Home;