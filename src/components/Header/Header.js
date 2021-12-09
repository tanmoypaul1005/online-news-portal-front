import React, { useEffect, useState } from 'react';
import './Header.css'
import {useNavigate, useLocation,Link, NavLink} from 'react-router-dom';
import Avatar from '@mui/material/Avatar';


const Header = () => {

  const lode=()=>{
    useNavigate.go(0)
  }
  const [User, SetUser] = useState({});
  useEffect(() => {
    fetch('http://localhost:5000/user')
      .then(res => res.json())
      .then(data => SetUser(data))
  }, [])
  return (
    <div>
      <div className="row m-3">
        <div className="col-md-11"> <h2 className="logo">Online News Portal</h2></div>
        <div className="col-md-1" >
          <Avatar src={User.image} sx={{ width: 56, height: 56 }} />
        </div>
      </div>

      <header className="header">
        <nav>
          <Link to="/home" onClick={lode} >Home</Link>
          <Link to="/entertainment" onClick={lode} >Entertainment</Link>
          <Link to="/sports" onClick={lode} >Sports</Link>
          <Link to="/business" onClick={lode} >Business</Link>
          <Link to="/technology" onClick={lode} >Technology & Arts</Link>
          <Link to="/health" onClick={lode}>Health</Link>
          <Link to="/login" onClick={lode} >Login</Link>
          <Link to="userprofile" onClick={lode}><img src={User.image} style={{borderRadius:"50%",padding:".2rem",backgroundColor:'white',height:"3rem"}}/></Link>
          

        </nav>
       
      </header>
      
    </div>
  );
};

export default Header;