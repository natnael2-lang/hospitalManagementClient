import React, { useContext,useState } from 'react'
import { Employeecontext } from '../Componenet/EmployeeMain/Context/Employeecontext.js'
import ReactDOM from 'react-dom';
import Item from '../Componenet/EmployeeMain/item/Item.js';
import "./css/employee.css"
import { Link } from 'react-router-dom'

const Employee = (props) => {
  const {AllProducts}=useContext(Employeecontext);
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const filteredProducts = AllProducts.filter(item => {
   
      return item.name.toLowerCase().includes(searchQuery.toLowerCase());
    
  });
  return (
    <div className='catagory'>
      <div className='show-each'>
      
        <form className='Search-form'>
          <input
            type="text"
            placeholder="Search by name..."
            className='search-input'
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </form>
      
      </div>
      <h2 className='search'>Search Result</h2>
      <div className='show2'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, i) => (
            
              <Link to={{pathname: `${item.id}`, state: {item}}}>
                            
                <Item key={i} id={item.id} name={item.name} image={item.image} bouns={item.bonus} Salary={item.Salary}></Item>
              
              </Link>
           
          ))
        ) : searchQuery && <div className='not-found'>No match found.</div>}
      </div>
      <h1>All staff member</h1>
      <div className='show2'>
        
        {AllProducts.map((item,i)=>{
          if (item.Catagory===props.Catagory){
            return (
              <Link to={{pathname: `${item.id}`, state: {item}}}>
              
                <Item key={i} id={item.id} name={item.name} image={item.image} bouns={item.bonus} Salary={item.Salary}></Item>
              
              </Link>
              )
              
              
          }
        else{
          return null
        }
        })}

      </div>
      
    </div>
  )
}

export default Employee
