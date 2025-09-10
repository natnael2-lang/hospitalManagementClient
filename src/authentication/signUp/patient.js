import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { parseISO, isFuture } from 'date-fns';
import axios from 'axios';





const Signup = () => {
    const navigate = useNavigate();
    const [ formData, setFormData ] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        role: '',
        username: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [ errors, setErrors ] = useState({});
    const [ errorFromServer, setErrorFromServer ] = useState('');
    
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    }

    const validate = () => {
        const { firstName, lastName, dateOfBirth, gender, role, username, phoneNumber, email, password, confirmPassword } = formData;
        const newErrors = {};

        if (!firstName) newErrors.firstName = '* This field is required';
        if (!lastName) newErrors.lastName = '* This field is required';
        if (!dateOfBirth) newErrors.dateOfBirth = '* Date of birth is required';
        if (isFuture(parseISO(dateOfBirth))) newErrors.dateOfBirth =
        '* Date of birth cannot be in the future';
        if (!gender) newErrors.gender = '* Gender is required';
        if (!role) newErrors.role = '* This field is required';

        const usernameRegex = /^[a-z0-9]{6,}$/;
        if (!usernameRegex.test(username)) newErrors.username =
        '* Username must have at least 6 characters, and contain only small letters and numbers';

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phoneNumber)) newErrors.phoneNumber = '* Invalid phone number';

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) newErrors.email = '* Invalid email address';

        if (password.length < 6) newErrors.password = '* Password must be at least 6 characters long';
        if (password !== confirmPassword) newErrors.confirmPassword = '* Passwords do not match';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

   const  handleSubmit = async (event) => {
        event.preventDefault();
        if (validate()) {
            try {
                const response = await axios.post('/api/patient/signup', formData);
                const role = response.data.role;
                const roleUrl = `/${role}`;
                navigate(roleUrl); 
            } catch (err) {
                console.error(err.response.data);
                setErrorFromServer(err.response.data);
            }
        }
    }

    
    return (
        <section className="container">
            <h1>Create an Account</h1>
            <p>Already have an account? <Link className='link' to="/login">Login</Link></p>
            {errorFromServer && <div className='error'>{errorFromServer}</div>}
            <form onSubmit={handleSubmit} noValidate>
                <label>
                    First Name<br />
                    <input type='text' name='firstName' value={formData.firstName}
                    onChange={handleChange} /><br />
                    {errors.firstName && <div className="error">{errors.firstName}</div>}
                </label>
                <label> 
                    Last Name<br />
                    <input type='text' name='lastName' value={formData.lastName}
                    onChange={handleChange}/><br />
                    {errors.lastName && <div className="error">{errors.lastName}</div>}
                </label>
                <label> 
                    Date of Birth<br />
                    <input type='date' name='dateOfBirth' value={formData.dateOfBirth}
                    onChange={handleChange}/><br />
                    {errors.dateOfBirth && <div className="error">{errors.dateOfBirth}</div>}
                </label>
                <label>
                    Gender<br />
                    <select name='gender' value={formData.gender} onChange={handleChange}>
                        <option value="">Please select</option> 
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    {errors.gender && <div className="error">{errors.gender}</div>}
                </label>
                <label>
                    Role<br />
                    <select name='role' value={formData.role} onChange={handleChange}>
                        <option value="">Please select</option> 
                        <option value="patient">Patient</option>
                        <option value="doctor">Doctor</option>
                        <option value="labtechnician">Lab Technician</option>
                        <option value="radiologist">Radiologist</option>
                        <option value="pharmacist">Pharmacist</option>
                        <option value="receptionist">Receptionsit</option>
                        <option value="humanResource">Human Resource</option>
                        <option value="finance">Finance</option>
                        <option value="manager">Manager</option>
                        <option value="contentCreator">Content Creator</option>
                    </select><br />
                    {errors.role && <div className="error">{errors.role}</div>}
                </label>
                <label>
                    Choose a username<br />
                    <input type='text' name='username' value={formData.username}
                    onChange={handleChange}/><br />
                    {errors.username && <div className="error">{errors.username}</div>}
                </label>
                <label>
                    Phone Number<br />
                    <input type='tel' name='phoneNumber' value={formData.phoneNumber}
                    placeholder='ex: 0912345678' onChange={handleChange}/><br />
                    {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
                </label>
                <label>
                    Email<br />
                    <input type='email' name='email' value={formData.email}
                    onChange={handleChange}/><br />
                    {errors.email && <div className="error">{errors.email}</div>}
                </label>
                <label>
                    Password<br />
                    <input type='password' name='password' value={formData.password}
                    onChange={handleChange}/><br />
                    {errors.password && <div className="error">{errors.password}</div>}
                </label>
                <label>
                    Confirm Password<br />
                    <input type='password' name='confirmPassword' value={formData.confirmPassword}
                    onChange={handleChange}/><br />
                    {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
                </label>

                <button type='submit'>Signup</button>
            </form>
        </section>
    );
}

export default Signup;
