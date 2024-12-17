import React from 'react'
import { collection,addDoc } from 'firebase/firestore'
import { db } from './Config'
import { useState } from 'react'
import "./Admin.css"
const Admin = () => {
    const [name,setname]=useState("");
    const[price,setprice]=useState(0);
    const[img,setimg]=useState("");
    const[quantity,setquantity]=useState("");
    const[type,settype]=useState("");
    const[vegnon,setvegnon]=useState("");
    const add=async()=>{
        const docRef=await addDoc(collection(db,"Food"),
        {
            name:name,
            price:price,
            img:img,
            quantity:quantity,
            type:type,
            vegnon:vegnon,
        });
        setname("");
        setprice(0);
        setimg("");
        setquantity(0);
        settype("");
        setvegnon("");
        console.log(img);
        alert("Inserted successfully!")
    }
  return (
    <div className='div1'>
        <input type='text' value={name} placeholder='Enter name:' onChange={(e)=>setname(e.target.value)}/>
        <input type='number' value={price} placeholder='Enter price:' onChange={(e)=>{setprice(e.target.value)}}/>
        <input type='text' value={img} placeholder='Enter image link:' onChange={(e)=>{setimg(e.target.value)}}/>
        <input type='number' value={quantity} placeholder='Enter quantity:' onChange={(e)=>{setquantity(e.target.value)}}/>
        <input type='text' value={vegnon} placeholder='Enter veg/non-veg:' onChange={(e)=>{setvegnon(e.target.value)}}/>
        <input type='text' value={type} placeholder='Enter Type:' onChange={(e)=>{settype(e.target.value)}}/>
        <button onClick={add}>Add</button>
    </div>
  )
}

export default Admin;