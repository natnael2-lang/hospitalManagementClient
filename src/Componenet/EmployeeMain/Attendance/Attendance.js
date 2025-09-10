import React, { useState } from 'react';

const EmployeeAttendance = ({ product }) => {
    const [attendance, setAttendance] = useState(false);

    const toggleAttendance = () => {
        setAttendance(!attendance);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (attendance) {
            alert(`${product.name} attended.`);
        } else {
            alert(`${product.name} did not attend.`);
        }
    };

    return (
        <div className="py-4">
            <form onSubmit={handleSubmit}>
                {product && (
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Employee Attendance</h2>

                        <label className="flex items-center mb-2 ml-48 py-5">
                            <input 
                                type="checkbox" 
                                onChange={toggleAttendance} 
                                checked={attendance} 
                                className="form-checkbox ml-2 "
                            />
                            <span className="text-gray-700-center ml-30 aligh">Employee name : {product.name}</span>
                        </label>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Submit</button>
                    </div>
                )}
            </form>
        </div>
    );
}

export default EmployeeAttendance;
