import React, { useState, useEffect,useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import data from './data.json';
import './custom-ag-grid.css'; 
import SimpleComp from './TakeAction';




function EmployeeTable() {

  
 
    const [colDefs] = useState([
      {
        field: 'Take Action', cellRenderer: SimpleComp
      },
      {field: "name"},
      { field: "id" },
      { field: "salary" },
      { field: "bankname" },
      { field: "accountNumber" },
      { field: "paid" },
      {field: "onleave"}

    ]);

  

    const [rowData, setRowData] = useState([]);

    useEffect(() => {
      setRowData(data);
    }, []);

 
    return (
      
  <div >
      <div> <h3 style={{fontSize:24,textAlign:'center', fontWeight:'bolder'}}> Salary Payment </h3></div>
      <div style={{ marginLeft:'10%', display: 'flex', width: '100%', height: '500px' }}>
        <div style={{ flex: '1', overflow: 'hidden' }}>
          {/* This div takes up the remaining 90% of the width */}
          <div className="ag-theme-alpine" style={{ height: '100%', width: '100%' }}>
            <AgGridReact
              rowData={rowData}
              columnDefs={colDefs}
            />
          </div>
        </div>
      </div>

      </div>      
    );
  }

  export default EmployeeTable;
