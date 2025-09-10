import { createContext,useState } from "react";
export const LabRequestContext=createContext();




export const LabContext=({children})=>{
    
     const [selectRequest,setSelectRequest]=useState(false);
     const [requestForm,setRequestForm]=useState({});
    
     const handlePopUpClose=()=>{
        setSelectRequest(false)
     }

     const requestHandler=(data)=>{
            setRequestForm(data)
     }

    
    
    return(

    <LabRequestContext.Provider value={{selectRequest,requestHandler,handlePopUpClose,requestForm}}>
        {children}
    </LabRequestContext.Provider>
  

          )

}
