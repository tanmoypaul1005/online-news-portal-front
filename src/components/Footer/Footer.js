import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <div className="Footer-link d-flex justify-content-around" >
    
      <div className="footer-li">
          <h4>Category</h4>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/entertainment" >Entertainment</Link></li>
          <li><Link to="/sports" >Sports</Link></li>
          <li><Link to="/business" >Business</Link></li>
          <li><Link to="/technology" >Technology & Arts</Link></li>
          <li><Link to="/health" >Health</Link></li>
          </div>

          <div className="footer-li">
          <h4>QUICK LINKS</h4>
          <li><Link to="/">About Us</Link></li>
          <li><Link to="/" >Contact Us</Link></li>
          <li><Link to="/" >Sports</Link></li>
          <li><Link to="/" >Contribute</Link></li>
          <li><Link to="/" >Privacy Policy</Link></li>
          <li><Link to="/" >Sitemap</Link></li>
         </div>

        <div className="m-5">
        <p class="copyright-text" style={{color: 'white'}}>Copyright &copy; Online News Protal </p>
          <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
        </div>   
  );
};

export default Footer;
