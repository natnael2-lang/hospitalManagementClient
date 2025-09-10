import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const ForgotPassword = () => {
    const [ email, setEmail] = useState('');
    const [ errorFromServer, setErrorFromServer ] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const submitButton = event.target.querySelector('button[type="submit"]');
        if (submitButton) {
            submitButton.disabled = true;
        }

        try {
            const response = await axios.post('/api/forgotPassword', { email: email });

            console.log(response.data);
            navigate('/verifyOtp'); 
        } catch (err) {
            console.error(err);
            submitButton.disabled = false;
            setErrorFromServer(err.response.data);
        }
    };

    return <>
            {errorFromServer && <div className='error'>{errorFromServer}</div>}
            <form onSubmit={handleSubmit}>
                <label>
                    Email
                    <input type="email" onChange={(event) => {
                        setEmail(event.target.value);
                        setErrorFromServer('')}} />
                </label>
                <button type="submit">Send OTP</button>
            </form>
        </>;
};

export default ForgotPassword;