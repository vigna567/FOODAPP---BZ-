import React, { useEffect, useState, useContext } from 'react';
import { Button, CardContent, Card, Box } from '@mui/material';
import './Menu.css';
import { db } from './Config';
import { collection, getDocs } from 'firebase/firestore';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import { CartContext } from './App'; // Import the CartContext

const Menu = () => {
  const { cart, addToCart } = useContext(CartContext); // Access cart and addToCart function from context
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const [checked, setChecked] = useState(false);
  const [food, setFood] = useState([]);
  const [select, setselect] = useState("");

  const handleAdd = (item) => {
    addToCart(item); // Call the addToCart function from context to add item to cart
  };

  const fetch = async () => {
    let foodArray = [];
    const querySnapshot = await getDocs(collection(db, "Food"));
    querySnapshot.forEach((doc) => {
      foodArray.push(doc.data());
    });
    setFood(foodArray);
    setFilter(foodArray);
  };

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [search, select, checked]);

  const swap = (e) => {
    setChecked(e.target.checked);
  };

  const handleChange = (e) => {
    setselect(e.target.value);
  };

  const applyFilters = () => {
    let filtered = food;
    if (select) {
      filtered = filtered.filter(item => item.type === select);
    }
    if (search) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (checked) {
      filtered = filtered.filter(item => item.vegnon === "Non-veg");
    }
    setFilter(filtered);
  };

  return (
    <div>
      <Box>
        <Card>
          <CardContent className='block'>
            <div className='top'>
              <Switch
                checked={checked}
                onChange={swap}
                inputProps={{ 'aria-label': 'controlled' }}
              />
              <input
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search for your fav dish'
                value={search}
              />
              <Select
                value={select}
                
                label="Type"
                onChange={handleChange}
              >
                <MenuItem value={"Main-course"}>Main-Course</MenuItem>
                <MenuItem value={"Beverage"}>Beverages</MenuItem>
                <MenuItem value={"Dessert"}>Dessert</MenuItem>
              </Select>
              <Button variant='contained'>Submit</Button>
            </div>
            <div className='box'>
              {filter.map((item) => (
                <Box key={item.name}>
                  <Card className='card'>
                    <CardContent className='cardcontent'>
                      <img src={item.img} alt={item.name} />
                      <h2>{item.name}</h2>
                      <h1>{item.type}</h1>
                      <h1>{item.vegnon}</h1>
                      <h1>{item.quantity}</h1>
                      <h3>{item.price}</h3>
                      <Button onClick={() => handleAdd(item)} variant='contained'>
                        ADD TO CART
                      </Button>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </div>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Menu;
