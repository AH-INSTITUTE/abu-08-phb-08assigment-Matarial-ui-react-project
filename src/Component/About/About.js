import React from 'react';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
const About = () => {
    return (
       <Container fixed>
           
           <h1>This is About Page</h1>
           <Link to="/home" className="cursor-pointer menu-item">Home</Link>
       </Container>
    );
};

export default About;