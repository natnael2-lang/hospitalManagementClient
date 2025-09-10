
import React, { useState, useEffect,useCallback } from 'react';

import ReactDOM from 'react-dom';


const SimpleComp = p => {

  // pay the salary which display the employee information
  const paySalary = () => {
    const node= p.node
    const rowData = node.data;



    const screenWidth = window.screen.availWidth;
    const screenHeight = window.screen.availHeight;
    const windowWidth = 600; // Width of your window
    const windowHeight = 400; // Height of your window
    const left = (screenWidth - windowWidth) / 2;
    const newWindow = window.open('', '_blank', `width=${windowWidth},height=${windowHeight},left=${left}`);
    const container = newWindow.document.createElement('div');
    newWindow.document.body.appendChild(container);
    newWindow.document.body.style.backgroundColor = 'gray';


    ReactDOM.render(
      <React.Fragment >
        <div>

  <table style={{width: '100%', borderCollapse: 'collapse'}}>
  <tr>
    <th style={{padding: '8px' ,fontSize:'24px',fontWeight:'bolder',border: '1px solid'}}>parameters</th>
    <th style={{padding: '8px' ,fontSize:'24px',fontWeight:'bolder',border: '1px solid'}}>Value</th>
  </tr>
  <tr>
    <td style={{padding: '8px' ,fontSize:'24px',fontWeight:'bolder',border: '1px solid'}}>Name</td>
    <td style={{padding: '8px',fontSize:'24px',fontWeight:'bolder' ,border: '1px solid'}}>{rowData['name']}</td>
  </tr>
  <tr>
    <td style={{padding: '8px' ,fontSize:'24px',fontWeight:'bolder',border: '1px solid'}}>ID</td>
    <td style={{padding: '8px',fontSize:'24px',fontWeight:'bolder' ,border: '1px solid'}}>{rowData['id']}</td>
  </tr>
  <tr>
    <td style={{padding: '8px',fontSize:'24px',fontWeight:'bolder' ,border: '1px solid'}}>Salary</td>
    <td style={{padding: '8px' ,fontSize:'24px',fontWeight:'bolder',border: '1px solid'}}>{rowData['salary']}</td>
  </tr>
  <tr>
    <td style={{padding: '8px',fontSize:'24px',fontWeight:'bolder' ,border: '1px solid'}}>Bank Name</td>
    <td style={{padding: '8px' ,fontSize:'24px',fontWeight:'bolder',border: '1px solid'}}>{rowData['bankname']}</td>
  </tr>
  <tr>
    <td style={{padding: '8px' ,fontSize:'24px',fontWeight:'bolder',border: '1px solid'}}>Account Number</td>
    <td style={{padding: '8px' ,fontSize:'24px',fontWeight:'bolder',border: '1px solid'}}>{rowData['accountNumber']}</td>
  </tr>
</table>








<div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <button style={{ backgroundColor: 'white', height: '50px', width: '100px', borderRadius: '10px', marginTop: '20px' }} id="closeButton">Cancel</button>

  <button style={{ backgroundColor: 'rgb(0, 136, 214)', height: '50px', width: '100px', borderRadius: '10px', marginTop: '20px' }} id="paySalary">Proceed</button>
</div>
</div>


      </React.Fragment>,
      container
    );

    newWindow.document.getElementById('closeButton').addEventListener('click', () => {
      newWindow.close();
    });
    

  };





  // change the salary parameters which allow the manager to change the value of salary parameters
  const changeSalaryparameter = () => {

    const node= p.node
    const rowData = node.data;

    const screenWidth = window.screen.availWidth;
    const screenHeight = window.screen.availHeight;
    const windowWidth = 600; // Width of your window
    const windowHeight = 400; // Height of your window
    const left = (screenWidth - windowWidth) / 2;
    const newWindow = window.open('', '_blank', `width=${windowWidth},height=${windowHeight},left=${left}`);
    const container = newWindow.document.createElement('div');
    newWindow.document.body.appendChild(container);
    
    newWindow.document.body.style.backgroundColor = 'gray';


    ReactDOM.render(
      <React.Fragment s>


      <div><table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <tr>
    <th style={{ padding: '8px' , fontSize: '24px', fontWeight: 'bolder', border: '1px solid' }}>Parameters</th>
    <th style={{ padding: '8px' , fontSize: '24px', fontWeight: 'bolder',  border: '1px solid' }}>Value</th>
  </tr>
  <tr>
  <td style={{padding: '8px' , fontSize: '24px', fontWeight: 'bolder',border: '1px solid'}}>Name</td>
    <td style={{padding: '8px' , fontSize: '24px', fontWeight: 'bolder',border: '1px solid'}}>{rowData['name']}</td>
  </tr>
  <tr>
  <td style={{padding: '8px' , fontSize: '24px', fontWeight: 'bolder',border: '1px solid'}}>ID</td>
    <td style={{padding: '8px' , fontSize: '24px', fontWeight: 'bolder',border: '1px solid'}}>{rowData['id']}</td>
  </tr>
  <tr>
    <td style={{ padding: '8px', fontSize: '24px', fontWeight: 'bolder', border: '1px solid' }}>Salary</td>
    <td style={{ padding: '8px', border: '1px solid' }}>
      <input style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} type="float"  defaultValue={rowData['salary']} />
    </td>
  </tr>
  <tr>
    <td style={{ padding: '8px', fontSize: '24px', fontWeight: 'bolder', border: '1px solid' }}>Bank Name</td>
    <td style={{ padding: '8px', border: '1px solid' }}>
      <input style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} type="text"  defaultValue={rowData['bankname']} />
    </td>
  </tr>
  <tr>
    <td style={{ padding: '8px', fontSize: '24px', fontWeight: 'bolder', border: '1px solid' }}>Account Number</td>
    <td style={{ padding: '8px', border: '1px solid' }}>
      <input style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}type="text"  defaultValue={rowData['accountNumber']} />
    </td>
  </tr>
</table>
</div>


<div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <button style={{ fontWeight:'bold',backgroundColor: 'white', height: '50px', width: '100px', borderRadius: '10px', marginTop: '20px' }} id="closeButton">Cancel</button>

  <button style={{ backgroundColor: 'rgb(22, 172, 55)', height: '50px', width: '100px', borderRadius: '10px', marginTop: '20px' }} id="paySalary">Proceed</button>
</div>


      </React.Fragment>,
      container
    );

    newWindow.document.getElementById('closeButton').addEventListener('click', () => {
      newWindow.close();
    });

 
  };


  return (
    <>
      <button style={{ backgroundColor:  'rgb(0, 136, 214)', height: '100%', width: '60px' }} onClick={paySalary}>Pay</button>
      <button style={{ backgroundColor: 'rgb(22, 172, 55)', height: '100%', width: '60px' }} onClick={changeSalaryparameter}>Change</button>
    </>
  );
};

export default SimpleComp;
