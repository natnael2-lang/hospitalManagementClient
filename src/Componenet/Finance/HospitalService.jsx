import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import givenservice from './givenservice.json'
import './custom-ag-grid.css'; 

function HospitalService() { 
    const [colDefs] = useState([
        { field: 'service_id' },
        { field: 'name' },
        { field: 'description' },
        { field: 'department' },
        { field: 'paidPrice' },
        { field: 'paidBy' },
        {field:'payerName'}
    ]);

    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        setRowData(givenservice);
        }, []);
    const totalPrice=10;
    return (
    <div>       
            <div> <h3 style={{fontSize:24,textAlign:'center', fontWeight:'bolder'}}> Given Services </h3></div>
            <div style={{  marginLeft:'10%',display: 'flex', width: '100%', height: '500px' }}>
            
                <div style={{ flex: '1', overflow: 'hidden' }}>
                    <div className="ag-theme-alpine" style={{ height: '100%', width: '100%' }}>
                        <AgGridReact
                            rowData={rowData}
                            columnDefs={colDefs}
                        />
                    </div>
                </div>
            </div>

            <div style={{height : '100px',alignContent:'center'}}>              
       <h2
        style={{textAlign:'center', fontWeight:'bold',paddingTop:'2%',height: '100px', width: '400px', marginLeft: '40%', 
     }} > The total Price of the given service in this month    : {  totalPrice} </h2>
      </div>
        </div>      
    );
}

export default HospitalService;
