import React, { useState } from 'react'
import {groData} from "./Grocery.data"
import "bootstrap/dist/css/bootstrap.css"

const Grocery = () => {
    const [items, setItems] = useState(groData);

    const decQty = (id) =>{
        const newItem = items.map((item)=> item.id === id && item.qty > 1 ?{...item, qty:item.qty-1}:item)
        setItems(newItem)

    }

    const incQty = (id) =>{
        const newItem = items.map((item)=> item.id === id && item.qty <9 ?{...item, qty:item.qty+1}:item)
        setItems(newItem)

    }

  return (
    <div>
        <h1 style={{backgroundColor:'blue', color:'white'}}><center>Grocery</center></h1>

        {items.map((item)=>
        <div className='d-inline-flex p-3 m-4 ' key={item.id}>
                <div className="card shadow p-3 mb-5 bg-body-tertiary rounded " style={{width: '13rem'}}>
                <img className='p-2'style={{height: '10rem'}} src= {require(`./gro_images/${item.image}.png`)} class="card-img-top" alt="images"></img>
                    <div class="card-body" style={{height: '15rem'}}>
                        <h5 className="card-title text-primary">{item.model}</h5>
                        <p class="card-text">{item.desc}</p>
                        <h5>Price: ₹ {item.price}</h5>
                        <div>
                            <p>Qty:
                            <button type="button" class="btn btn-primary m-2" onClick={() => decQty(item.id)}>-</button>
                            {item.qty}
                            <button type="button" class="btn btn-primary m-2" onClick={() => incQty(item.id)}>+</button>
                            </p>
                        </div>
                        <a href="#" class="btn btn-primary">Add to Cart</a>
                    </div>
            </div>
        </div>
        )}



    </div>
  )
}

export default Grocery