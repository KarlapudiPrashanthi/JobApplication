import React, { useState } from 'react';
import "./login.css"; // Import the CSS for styling
import axios from 'axios';

function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        aadhar: '',
        dob: '',
        fatherName: '',
        fatherPhone: '',
        motherName: '',
        motherPhone: '',
        college: '',
        cgpa: '',
        password: '',
        confirmPassword: '',
        userType: 'Student', // Default user type
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (formData.password !== formData.confirmPassword) {
            alert("Adding User Failed! The two passwords do not match.");
            return;
        }
    
        try {
            const response = await axios.post('http://localhost:8080/api/users/signup', formData);
            if (response.status === 200) {
                alert("User Added Successfully!");
                // Reset form data
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    aadhar: '',
                    dob: '',
                    fatherName: '',
                    fatherPhone: '',
                    motherName: '',
                    motherPhone: '',
                    college: '',
                    cgpa: '',
                    password: '',
                    confirmPassword: '',
                    userType: 'Student',
                });
            }
        } catch (error) {
            console.error('There was an error signing up!', error);
            alert("There was an error adding the user. Please try again.");
        }
    };

    return (
        <div className='signup'>
            <div className="logincontainer">
                <h2>Add User</h2>
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    
                    <label>Phone:</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                    
                    <label>Date of Birth:</label>
                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
                    
                    <label>Father's Name:</label>
                    <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required />
                    
                    <label>Mother's Name:</label>
                    <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} required />
                    
                    <label>Parent's Phone:</label>
                    <input type="tel" name="parentsPhone" value={formData.motherPhone} onChange={handleChange} required />
                    
                    <label>College:</label>
                    <input type="text" name="college" value={formData.college} onChange={handleChange} required />
                    
                    <label>CGPA:</label>
                    <input type="number" step="0.01" name="cgpa" value={formData.cgpa} onChange={handleChange} required />

                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                    
                    <label>Confirm Password:</label>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />

                    <button className="button" type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
