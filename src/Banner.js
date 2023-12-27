import React from 'react'
import { CiSearch } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import Nav from './Nav';
import { Link } from 'react-router-dom';


function Banner() {

        const Virat = () => {
          alert("Hey click me");
        };

       
  return (
    <div>

      
        <div>
            <ul>
                <li><CiSearch /></li>
                <li><Link to='/Recipes'>Recipes</Link></li>
                <li> <Link to="/Routingcode ">Routingcode</Link></li>
                <li><Link to="/Videos ">Videos</Link></li>
                <li>
                    <img class="image1" src='https://www.pickuplimes.com/static/images/logo/pul_logo_main_flat_987_247.9cf5ed7b1374.png'/>
                </li>
                <li class="class1">App</li>
                <li>Shop</li>
                <li>About</li>
                <li><HiOutlineMail /></li>
            </ul>
        </div>

      <button onClick={() => Virat() }>Click me</button>

     

    


      

      

     
    
           

      {/*      
       <div>
        <Nav  name="yashwanth" age={22} course="python full stack" duration={6}/>
      </div>
      
          */}


    </div>
  )
}

export default Banner