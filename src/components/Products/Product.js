import React from 'react';
import {phones} from "./productData"
import {Card, Button} from "react-bootstrap"
import { useState } from 'react';


function Product() {

  const[items,setItems]=useState(phones)
  return (
    <div>
      <h1 className='text-black' style={{marginLeft:'400px'}}> PRODUCTS </h1>

      {items.map((item)=>(
      <div className='d-inline-flex'> 
      <Card className='shadow p-3 m-2 bg-body-tertiary rounded' style={{width:'200px'}}>
        <Card.Img variant="top" src={require(`./assets/${item.image}.jpg`)} />
        <Card.Body>
          <Card.Title>{item.model}</Card.Title>
          <Card.Text>{item.desc}</Card.Text>
          <h5>Price: ₹ {item.price}</h5>
          <p>
            Qty :
            <Button className='m-1' style={{height:'35px'}}>-</Button>{item.qty}<Button className='m-1' style={{height:'35px'}}>+</Button>
          </p> 
          
          <Button>Add to cart</Button>
        </Card.Body>
      </Card>
      </div>
      ))}
    </div>
  );
}

export default Product;
