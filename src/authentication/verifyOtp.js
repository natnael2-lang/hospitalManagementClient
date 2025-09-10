import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



const VerifyOtp = () => {
    const [ otp, setOtp ] = useState('');
    const [ errorFromServer, setErrorFromServer ] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/verifyOtp', {otp: otp});

            console.log(response.data);
            navigate('/changePassword'); 
        } catch (error) {
            console.error(error);
            setErrorFromServer('Wrong OTP');
        }
    };
    return (
        <>
            {errorFromServer && <div className='error'>{errorFromServer}</div>}
            <form onSubmit={handleSubmit}>
                <label>
                    Verify
                    <input type="text" onChange={ (event) => setOtp(event.target.value)} />
                </label>
                <button type="submit">Submit</button>
                <Link to="/forgotPassword">Send again?</Link>
            </form>
        </>
    );
};

export default VerifyOtp;