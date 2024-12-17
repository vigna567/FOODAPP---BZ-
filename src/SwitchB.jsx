import React, { useEffect, useState } from 'react';

import Switch from '@mui/material/Switch';
import { Button, CardContent, Card, Box, TextField } from '@mui/material';
import './Home.css'
import { db } from './Config'
import { collection,getDocs } from 'firebase/firestore'

const Home = () => {
    const [search,setsearch]=useState("");
    const [filter,setfilter]=useState([]);
    const [checked, setChecked] = React.useState(false);
    const [food, setfood] = useState([]);
    const fetch = async () => {
    console.log("firebase is called");
    let foodarray = [];
    const querySnapshot = await getDocs(collection(db, "Food")); //replace collection name
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      foodarray.push(doc.data());
    });
    setfood(foodarray);
    setfilter(foodarray);
  };
  useEffect(()=>{
    fetch();
  },[]);
  useEffect(()=>{
    change();
  },[filter])
  const handleChange = (e) => {
    console.log(e.target.checked);
    setChecked(e.target.checked);
    const filter=food.filter((item)=>
       item.yes===(e.target.checked)
    );
    setfilter(filter);
    
  };
    const change=()=>{
        
        const filtered=food.filter((item)=>{
            return item.name.toLowerCase().includes(search.toLowerCase());
        });
        setfilter(filtered);
    };
  return (
    <div >
        <Switch
      checked={checked}
      onChange={(e)=>handleChange(e)} 
      inputProps={{ 'aria-label': 'controlled' }}
    />
        <Box >
            <Card>
                <CardContent className='block'>
                    <div className='top'>
      
      
      </div>
      <div className='box'>
      {/* {(search?filter:food).map((item)=>{
        return(
            
              <Box >
            <Card className='card'>
                <CardContent className='cardcontent'>
                
              <img src={item.img} alt={item.name}/>
              <h2>{item.name}</h2>
              <h1>{item.type}</h1>
              <h1>{item.vegnon}</h1>
              <h1>{item.quantity}</h1>
              <h3>{item.price}</h3>
           
        <Button variant='contained'>ADD TO CART</Button>
                        </CardContent>
                    </Card>
                </Box>
       
    );
})} */}
      {(checked?filter:food).map((name)=>{
        return(
            
              <Box >
            <Card className='card'>
                <CardContent className='cardcontent'>
                    <img src={name.image} alt="not found"/>
                            <h2>{name.dish}</h2>
        <p>{name.type}</p>
        <p>{name.vegnon}</p>
        <p>{name.price}</p>
        <Button variant='contained'>ADD TO CART</Button>
                        </CardContent>
                    </Card>
                </Box>
       
    );
})}
</div>
      
      
      </CardContent>
      </Card>
      </Box>
    </div>
  )
}

export default Home;
