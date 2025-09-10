import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './custom-ag-grid.css'; 
    
    // for expenses
    function Expense(){  

        const expenses = [
          {"month":"october", "category": "Salaries", "amount": 600000 },
          { "month":"december","category": "Supplies", "amount": 300000 },
          { "month":"november","category": "Utilities", "amount": 150000 },
          { "month":"april","category": "Maintenance", "amount": 100000 },
          { "month":"june","category": "Other Expenses", "amount": 300000 }
        ];
    
        const [colDefs] = useState([
          { field: 'month' },
          { field: 'category' },
          { field: 'amount' }
          
      ]);
    
    
          const [rowData, setRowData] = useState([]);
    
          useEffect(() => {
              setRowData(expenses);
          }, []);
    
          return(
         
            <div >
              <div> <h3 style={{fontSize:24,textAlign:'center', fontWeight:'bolder'}}> Expenses Report</h3></div>
              <div style={{ marginLeft:'10%',display: 'flex', width: '100%', height: '500px' }}>   
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

          export default Expense;