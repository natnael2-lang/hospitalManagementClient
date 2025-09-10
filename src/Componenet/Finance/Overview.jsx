        import React, { useState, useEffect } from 'react';
        import { AgGridReact } from 'ag-grid-react';
        import 'ag-grid-community/styles/ag-grid.css';
        import 'ag-grid-community/styles/ag-theme-alpine.css';
        import './custom-ag-grid.css'; 
  




        function Overview(){  

            const financeOverview = 
            [{"month":"October",
                "totalRevenue" : 2500000,
                "totalExpenses":1800000,
                "netIncome":700000,
            
            }];


            const [colDefs] = useState([
            { field: 'month' },
            { field: 'totalRevenue' },
            { field: 'totalExpenses' },
            {  field:'netIncome'}
        ]);

        const [rowData, setRowData] = useState([]);

        useEffect(() => {
            setRowData(financeOverview);
        }, []);

        return(                    
            <div >
              <div> <h3 style={{fontSize:24,textAlign:'center', fontWeight:'bolder'}}> Overview Report </h3></div>
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

        export default Overview;


