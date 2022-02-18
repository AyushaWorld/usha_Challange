import React,{ useState } from 'react';
import Button from '@material-ui/core/Button';
import foodData from './DataBase.js/FoodData';
import { Link } from "react-router-dom";

function FoodItems() {
const [item, setItem] =  useState(0);

  return (
    <>
    <div className='container'>
      <div className='cards container mt-5 d-flex justify-content-between'>
        {foodData.map((foodList,i)=>{
          // console.log(foodList);
          return(
            <>
            <div className='card mr-5' style={{width:"360px"}}>
          {/* <img src='./assets/burger.jpeg' alt="rendom img"/> */}
                <img src={`./assets/${foodList.image}`} alt="foodList"/>
                <div className='card-body '>
                    <span>{foodList.name}</span>
                    <h5>price: {foodList.price} </h5>
                    <h6>total item: {item}</h6>
                    <h6>total price: {item*foodList.price}</h6>
                    <Button onClick={()=>setItem(item+1)} variant="contained" color="primary">+</Button>
                    <Button onClick={()=>setItem(item-1)} className='button ml-5' variant="contained" color="secondary">-</Button>
                </div>
            </div>
            </>
          );
          
        })}

      </div>
    <Link to="/thankyou"><Button className='button mt-5' variant="contained" color="secondary">Submit</Button></Link>
    </div>
    </>
  )
}

export default FoodItems;