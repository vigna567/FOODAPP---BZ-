import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import { Button, CardContent, Card, Box, TextField } from '@mui/material';
import './Home.css'
import { db } from './Config.'
import { collection,getDocs } from 'firebase/firestore'

const Fil = () => {
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
  };

  const handleChange = (e) => {
    console.log(e.target.checked);
    setChecked(e.target.checked);
    const filter=food.filter((item)=>
       item.yes===(e.target.checked)
    );
    setfilter(filter);
    
  };
    const change=(e)=>{
        setsearch(e.target.value);
        const filter=food.filter((item)=>{
            return item.dish.toLowerCase().includes(search.toLowerCase());
        });
        setfilter(filter);
    };
  return (
    <div >
        <Box >
            <Card>
                <CardContent className='block'>
                    <div className='top'>
      <input onKeyUp={(e)=>change(e)} placeholder='Search for your fav dish'/>
      
      <Button variant='contained'>Submit</Button>
      </div>
      <div className='box'>
      {(search?filter:food).map((name)=>{
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
      {/* {(checked?filter:food).map((name)=>{
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
})} */}
</div>
      
      
      </CardContent>
      </Card>
      </Box>
    </div>
  )
}

export default Fil;