import { AppBar, Button, Container, Toolbar, Typography, Box, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from './Config';
import './Nav.css';

const Navbar = () => {
  const provider = new GoogleAuthProvider();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false); // State to handle loading
  const [error, setError] = useState(""); // State to store error message
  const navigate = useNavigate();

  // SignIn method to handle Google login
  const signIn = () => {
    setLoading(true); // Set loading to true when sign-in starts
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setName(user.displayName);
        localStorage.setItem("user", JSON.stringify(user));
        setLoading(false); // Set loading to false when sign-in is successful
      })
      .catch((error) => {
        setLoading(false); // Set loading to false if there is an error
        setError(error.message); // Set error message
      });
  };

  // Check if user is logged in when the component mounts
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      setName(parsedUser.displayName);
    }
  }, []);

  // Logout method
  const logout = () => {
    localStorage.removeItem("user");
    setName("");
    navigate("/"); // Redirect to home page after logout
  };

  return (
    <div>
      <AppBar sx={{ backgroundColor: '#6f4f28' }}>
        <Toolbar >
          <Typography variant="h6"> Food</Typography>
          <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Link to='/Menu'>
                <Button sx={{ color: 'white' }}>Menu</Button>
              </Link>
              <Link to='/About'>
                <Button sx={{ color: 'white' }}>About</Button>
              </Link>
              <Link to='/Contact'>
                <Button sx={{ color: 'white' }}>Contact</Button>
              </Link>
              <Link to='/Admin'>
                <Button sx={{ color: 'white' }}>Admin</Button>
              </Link>
            </Box>

            <Box>
              <Link to='/Cart'>
                <Button sx={{ color: 'white' }}>Cart</Button>
              </Link>
            </Box>

            <Box>
              {name ? (
                <div>
                  <Typography variant="h6" sx={{ color: 'white' }}>{name}</Typography>
                  <Button onClick={logout} sx={{ color: 'white' }}>LogOut</Button>
                </div>
              ) : (
                <div>
                  {loading ? (
                    <CircularProgress sx={{ color: 'white' }} />
                  ) : (
                    <Button onClick={signIn} sx={{ color: 'white' }}>Login</Button>
                  )}
                  {error && <Typography sx={{ color: 'red' }}>{error}</Typography>} {/* Display error message */}
                </div>
              )}
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
