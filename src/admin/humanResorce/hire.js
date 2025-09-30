import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function EmployeeForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [showFormSubmitted, setFormSubmitted] = React.useState(false);
    const [showAdditionalAttributes, setShowAdditionalAttributes] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");

    const onSubmit = async (data) => {
        setFormSubmitted(true);
       

        try {

            const response = await axios.post(`${process.env.REACT_APP_CURRENT_URL}/admin/hire`, {data});
            if (response.status === 201) {
                alert(`User registered successfully with id  ${response.data.id}`);
                reset(); 
            }
            else if(response.status===409){alert("employee with this username already exits")}

        } catch (error) {
            
                setErrorMessage("Network error. Please check your connection.");
            
        }
    };

    return (
        <div className="container mx-auto">
            <div className="w-full max-w-md mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="shadow-md bg-gray-100 rounded px-8 pt-6 pb-8 mb-4">
                    {/* First Name */}
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <label className="block text-gray-700">First Name:</label>
                            <input
                                {...register("firstName", { required: "First name is required." })}
                                className={`form-input mt-1 block outline-none w-full bg-slate-300 ${errors.firstName ? 'border-red-500' : ''}`}
                            />
                            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <label className="block text-gray-700">Last Name:</label>
                            <input
                                {...register("lastName", { required: "Last name is required." })}
                                className={`form-input mt-1 block outline-none w-full bg-slate-300 ${errors.lastName ? 'border-red-500' : ''}`}
                            />
                            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                        </div>
                    </div>

                    {/* Role Selection */}
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full px-3 mb-6">
                            <label className="block text-gray-700">Role</label>
                            <select
                                {...register("role",{ required: "Please select your role." })}
                                className="form-select mt-1 block w-full outline-none bg-slate-200"
                                onChange={(e) => setShowAdditionalAttributes(e.target.value === "doctor" || e.target.value === "radiologist")}
                            >
                                <option value=""></option>
                                <option value="doctor">Doctors</option>
                                <option value="radiologist">Radiologist</option>
                                <option value="labTechnician">Lab Technician</option>
                                <option value="pharmacist">Pharmacist</option>
                                <option value="reception">Receptionist</option>
                                <option value="contentCreator">Content Creator</option>
                                <option value="admin">Admin</option>
                            </select>
                            {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p> }
                        </div>
                    </div>

                    {/* Specialization for specific roles */}
                    {showAdditionalAttributes && (
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block text-gray-700">Specialization</label>
                                <input
                                    {...register("specialization")}
                                    className="form-input mt-1 block outline-none w-full bg-slate-300"
                                    placeholder="Enter specialization"
                                />
                            </div>
                        </div>
                    )}

                    {/* Other fields */}
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <label className="block text-gray-700">Phone Number:</label>
                            <input
                                {...register("phoneNumber", { required: "Phone number is required." })}
                                className={`form-input mt-1 outline-none block w-full bg-slate-300 ${errors.phoneNumber ? 'border-red-500' : ''}`}
                            />
                            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <label className="block text-gray-700">Emergency Contact:</label>
                            <input
                                {...register("emergencyContact", { required: "Emergency contact is required." })}
                                className={`form-input mt-1 outline-none block w-full bg-slate-300 ${errors.emergencyContact ? 'border-red-500' : ''}`}
                            />
                            {errors.emergencyContact && <p className="text-red-500 text-sm">{errors.emergencyContact.message}</p>}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <label className="block text-gray-700">Total Salary:</label>
                            <input
                                type="number"
                                {...register("salary", { required: "Salary is required." })}
                                className={`form-input mt-1 outline-none block w-full bg-slate-300 ${errors.salary ? 'border-red-500' : ''}`}
                            />
                            {errors.salary && <p className="text-red-500 text-sm">{errors.salary.message}</p>}
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <label className="block text-gray-700">Bank Account:</label>
                            <input
                                {...register("bank", { required: "Bank account is required." })}
                                className="form-input mt-1 outline-none block w-full bg-slate-300"
                            />
                            {errors.bank && <p className="text-red-500 text-sm">{errors.bank.message}</p>}
                        </div>
                    </div>
        
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <label className="block text-gray-700">Password:</label>
                            <input
                                type="password"
                                {...register("password", { required: "Password is required." })}
                                className="form-input mt-1 outline-none block w-full bg-slate-300"
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <label className="block text-gray-700">Email:</label>
                            <input
                                type="email"
                                {...register("email", { 
                                    required: "Email is required.", 
                                    pattern: { 
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
                                        message: "Please enter a valid email address." 
                                    }
                                })}
                                className={`form-input mt-1 outline-none block w-full bg-slate-300 ${errors.email ? 'border-red-500' : ''}`}
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                    </div>
                
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full px-3 mb-6">
                            <label className="block text-gray-700">Birthday:</label>
                            <input
                                type="date"
                                {...register("birthday", { required: "Birthday is required." })}
                                className="form-input mt-1 outline-none block w-full bg-slate-300"
                            />
                            {errors.birthday && <p className="text-red-500 text-sm">{errors.birthday.message}</p>}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full px-3 mb-6">
                            <label className="block text-gray-700">Gender:</label>
                            <select
                                {...register("gender", { required: "Please select your gender." })}
                                className={`form-select mt-1 block w-full outline-none bg-slate-300 ${errors.gender ? 'border-red-500' : ''}`}
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full px-3 mb-6">
                            <label className="block text-gray-700">Address:</label>
                            <input
                                type="text"
                                {...register("address", { required: "Address is required." })}
                                className="form-input mt-1 outline-none block w-full bg-slate-300"
                            />
                            {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-4 rounded hover:bg-blue-700 px-20 mx-10"
                    >
                        Hire Employee
                    </button>
                    {showFormSubmitted && (
                        <p className="text-green-600 mt-4">
                            The form is submitted successfully!
                        </p>
                    )}
                    {errorMessage && (
                        <p className="text-red-500 mt-4">
                            {errorMessage}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}