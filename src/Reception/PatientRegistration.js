import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';


const PatientRegistration = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [registrationMessage, setRegistrationMessage] = useState('');
   

    useEffect(() => {
        const fetchReceptionData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_CURRENT_URL}/reception`);
                if (res.status === 200) {
                   
                } else {
                  
                }
            } catch (err) {
                console.error("Error fetching reception data:", err);
            }
        };

        fetchReceptionData();
    }, []); 

    const onSubmit = async (data) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_CURRENT_URL}/reception/registration`, { data },{withCredentials:true});
            if (response.status === 200) {
                setRegistrationMessage(`Patient registered successfully! Registration Number: ${response.data.cardNumber}`);
                reset(); 
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setRegistrationMessage('The email already exists. Please try another.');
            } else {
                setRegistrationMessage('Failed to register patient. Server error.');
            }
            console.error("Registration error:", error);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
            <h2 className="text-2xl font-bold mb-4">Patient Registration</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="mb-4">
                    <legend className="text-lg font-semibold">Personal Information:</legend>

                 
                    <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="firstName">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            {...register('firstName', { required: true })}
                            className={`mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.firstName && <p className="text-red-500 text-sm">This field is required</p>}
                    </div>

                    {/* Last Name Field */}
                    <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="lastName">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            {...register('lastName', { required: true })}
                            className={`mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400 ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.lastName && <p className="text-red-500 text-sm">This field is required</p>}
                    </div>

                    {/* Other fields remain unchanged */}
                    {['birthDay', 'gender', 'maritalStatus', 'occupation', 'region', 'zone', 'woreda', 'kebele', 'city', 'phone'].map((field) => (
                        <div key={field} className="mb-3">
                            <label className="block text-sm font-medium text-gray-700" htmlFor={field}>
                                {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                            </label>
                            <input
                                type="text"
                                id={field}
                                {...register(field, { required: true })}
                                className={`mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400 ${errors[field] ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors[field] && <p className="text-red-500 text-sm">This field is required</p>}
                        </div>
                    ))}

                    <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email" // Changed to email type
                            id="email"
                            {...register('email', { required: true })}
                            className={`mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.email && <p className="text-red-500 text-sm">This field is required</p>}
                    </div>
                </fieldset>

                <h3 className="text-lg font-semibold mt-4">Emergency Contact:</h3>
                {['name', 'relationship', 'phone'].map((field) => (
                    <div key={field} className="mb-3">
                        <label className="block text-sm font-medium text-gray-700" htmlFor={`emergencyContact.${field}`}>
                            {field.charAt(0).toUpperCase() + field.slice(1)}
                        </label>
                        <input
                            type="text"
                            id={`emergencyContact.${field}`}
                            {...register(`emergencyContact.${field}`, { required: true })}
                            className={`mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400 ${errors.emergencyContact?.[field] ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.emergencyContact?.[field] && <p className="text-red-500 text-sm">This field is required</p>}
                    </div>
                ))}

                <h3 className="text-lg font-semibold mt-4">Insurance Information:</h3>
                {['tenaMedihn', 'tenaMedihnNumber'].map((field) => (
                    <div key={field} className="mb-3">
                        <label className="block text-sm font-medium text-gray-700" htmlFor={`insuranceInfo.${field}`}>
                            {field.charAt(0).toUpperCase() + field.slice(1)}
                        </label>
                        <input
                            type="text"
                            id={`insuranceInfo.${field}`}
                            {...register(`insuranceInfo.${field}`, { required: true })}
                            className={`mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400 ${errors.insuranceInfo?.[field] ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.insuranceInfo?.[field] && <p className="text-red-500 text-sm">This field is required</p>}
                    </div>
                ))}

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-200"
                >
                    Register Patient
                </button>
            </form>
            {registrationMessage && <p className="mt-4 text-red-500">{registrationMessage}</p>}
        </div>
    );
};

export default PatientRegistration;
