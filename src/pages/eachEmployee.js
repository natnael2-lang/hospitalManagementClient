import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import { Employeecontext } from './Context/Employeecontext.js';
import { Employeecontext } from '../Componenet/EmployeeMain/Context/Employeecontext.js';
import EmployeeDetail from '../Componenet/EmployeeMain/EmployeeDetail/EmployeDetail.js'

const EachEmployee = () => {
    const { AllProducts } = useContext(Employeecontext);
    console.log(AllProducts)
    const param = useParams();
    const [product, setProduct] = useState(null);
    let {EmployeeId} = param; 
    
    useEffect(() => {
        const foundProduct =AllProducts.find((product) => product.id === Number(EmployeeId));
        setProduct(foundProduct);  
    }, [AllProducts, EmployeeId]);
    
    if(!product){
        setProduct(AllProducts[0]);
    }
    

    return (
        <div>
            <EmployeeDetail product={product} />        
        </div>
    );
}

export default EachEmployee;
