import React, { useContext, useEffect, useState } from 'react';
import './EmployeeDetail.css';
import { useParams } from "react-router-dom";
import { Employeecontext } from "../Context/Employeecontext";
import EmployeeDetaileInfo from '../employeeDetailInfo/EmployeeDetaileInfo';
import EmployeeAttendance from '../Attendance/Attendance';

const EmployeeDetail = () => {
    const { AllProducts } = useContext(Employeecontext);
    const { EmployeeId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (AllProducts.length > 0) {
            const foundProduct = AllProducts.find((product) => product.id === Number(EmployeeId));
            setProduct(foundProduct);
        }
    }, [AllProducts, EmployeeId]);
    console.log("Employee: ", product);
    if (!product) {
        return <div>Loading...</div>;
    }

    
    
    

    return (
        <div >
            <div className='employeeDetail'>
                <div className='employeeDetail-img'>
                    <img src={product.image} alt='' />
                    <h1>{product.name}</h1>
                    <div className='attendance'>
                        
                        <EmployeeAttendance product={product}/>
                    </div>
                </div>
                <div className='Employee-display'>
                    <EmployeeDetaileInfo product={product}/> 
                </div>
                
            </div>
            
        </div>
    );
}

export default EmployeeDetail;
