import React, { useState,} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../../src/main-page/NavBar";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({});

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.username) newErrors.username = '* Username is required';
        if (!formData.password) newErrors.password = '* Password is required';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                const result = await axios.post('https://hospitalmanagementserver-nqol.onrender.com/auth/login', { username: formData.username, password: formData.password }, { withCredentials: true });
                if (result.status === 200) {
                    const redirectPath = result.data.redirect;
                    navigate(redirectPath);
                }
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <section className='flex flex-col justify-center items-center flex-1'>
                <div className='mx-auto my-auto'>
                    <h2 className='bg-gradient-to-r text-center from-blue-500 to-red-800 text-transparent bg-clip-text md:font-bold text-2xl mb-4'>
                        Log in
                    </h2>

                    <form onSubmit={handleSubmit} className='p-4 flex flex-col bg-blue-100 shadow-md rounded-lg min-w-[300px] w-full gap-4'>
                        <div className='flex flex-col gap-1'>
                            <label>Username</label>
                            <input
                                className='input '
                                type='text'
                                name='username'
                                value={formData.username}
                                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                            />
                            {errors.username && <p className='text-red-500 text-sm'>{errors.username}</p>}
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label>Password</label>
                            <input
                                className='input '
                                type='password'
                                name='password'
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                            {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}
                        </div>

                        <button type='submit' className='w-full bg-blue-500 hover:bg-blue-700 p-2 text-white font-bold rounded'>
                            Login
                        </button>
                    </form>

                    <div className='text-right mt-4'>
                        <Link to="/forgotPassword" className='text-blue-500 hover:underline'>
                            Forgot password?
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;