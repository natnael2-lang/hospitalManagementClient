import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './custom-ag-grid.css'; 

function Revenue(){ 
    const revanue = [
         { "month":"october","category": " Services", "amount": 1000000 },
         {"month":"october", "category": "products", "amount": 800000 }   
       ];

       const [colDefs] = useState([
         { field: 'month' },
         { field: 'category' },
         { field: 'amount' },
     ]);
       const [rowData, setRowData] = useState([]);

       useEffect(() => {
           setRowData(revanue);
       }, []);
 
    
       return(          
            <div>
              <div> <h3 style={{fontSize:24,textAlign:'center', fontWeight:'bolder'}}> Revenue Report </h3></div>
              <div style={{ marginLeft:'10%', display: 'flex', width: '100%', height: '500px' }}>
                <div style={{ flex: '1', overflow: 'hidden' }}>
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
     export default Revenue;