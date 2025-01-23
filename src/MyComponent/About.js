import React from 'react';
import './About.css'

export const About = () => {
    return (
        <div className='container' style={{backgroundColor:"lightblue"}}>
            <h1>About Us</h1>
            <p style={{textDecorationColor:'blue'}}>
                <strong>Welcome to My To-Do List!</strong><br />
                Our goal is to help you manage your tasks easily and stay organized. With a simple and intuitive interface, you can add, delete, and track tasks effortlessly.
                Our mission is to make your daily task management simple, efficient, and reliable. Thank you for choosing <strong>My To-Do List</strong>!

            </p>
            <img
                src={`${process.env.PUBLIC_URL}/about.jpg`}
                alt="About page"
                style={{ maxWidth: '70%', height: 'auto' }}
            />
          
        </div>
    );
};
