import React, { useState } from 'react';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send to an API)
        alert('Message submitted');
    };
    
    return (
        <div className="contact-container" style={{backgroundColor:"pink"}}>
            <h1>Contact Us</h1>
            
            <p>We would love to hear from you! Please fill out the form below to get in touch with us.</p>
            
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        style={{paddingTop:'10px',marginTop:'10px',marginBottom:'10px',marginLeft:'20px'}}
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        style={{marginBottom:'10px',marginLeft:'20px'}}
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        style={{height:'30px',marginLeft:'5px'}}
                    />
                </div>
                
                <button type="submit" style={{backgroundColor:'red',marginTop:'10px',alignItems:'center',border:"2px solid black"}}>Submit</button>
            </form>
    
            <div className="contact-details" style={{textAlign:'end',marginBottom:'10px',paddingLeft:'10px',paddingBottom:'20px'}}>
                <h2><strong>Our Contact Information</strong></h2>
                
                    <li><strong>Email:</strong> support@yourwebsite.com</li>
                    <li><strong>Phone:</strong> +1 234 567 890</li>
                    <li><strong>Address:</strong> 123 Your Street, City, Country</li>
                
                
                <h3 style={{marginTop:"100px"}}><strong>Find us on Social Media:</strong></h3>
                <ul className="social-links">
                    <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                </ul>
            </div>
        </div>
    );
};
