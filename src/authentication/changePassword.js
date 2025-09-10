import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ChangePassword = () => {
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ errors, setErrors ] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newErrors = {};

        if (password.length < 6) newErrors.password = '* Password must be at least 6 characters long';
        if (password !== confirmPassword) newErrors.confirmPassword = '* Passwords do not match';

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await axios.post('/api/changePassword', { password: password });
                const role = response.data.role;
                const roleUrl = `/${role}`;
                navigate(roleUrl);
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input type="password" placeholder="New Password"
                onChange={(event) => setPassword(event.target.value)} />
                {errors.password && <div className="error">{errors.password}</div>}
            </label>
            <label>
                <input type="password" placeholder="Confirm Password"
                onChange={(event) => setConfirmPassword(event.target.value)} />
                {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
            </label>
            <button type="submit" onSubmit={handleSubmit}>Submit</button>
        </form>
    );
};

export default ChangePassword;