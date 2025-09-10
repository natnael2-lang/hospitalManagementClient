import React, { createContext, useState } from 'react';
import AllProducts from "../../asset/all_product.js";
// import Allprodacts from "../Componenet/asset/all_product.js"

export const Employeecontext = createContext(null);

const Employeecontextprovider = (props) => {
    const Contextvalue={AllProducts}
    const [employeeItems, setEmployeeItems] = useState(0); // Corrected variable name

    return (
        <Employeecontext.Provider value={Contextvalue}>
            {props.children}
        </Employeecontext.Provider>
    );
}

export default Employeecontextprovider;
