import React from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';



function FoodApp() {
  return (
    <>
    <div className='container'>
      <div className='container main-content mt-5 d-flex justify-content-center'>
          <div className="card card text-center">
              <div className="card-body font-weight-bold font-20">
              <h1>Welcome to Food's  Kitchen</h1>
              <Link to='/fooditems'><Button variant="contained" color="primary">Go to menu</Button></Link>
              </div>
          </div>
  
      </div>
   </div>
   </>
  )
}

export default FoodApp;