import React from 'react'
import styles from './cyber.module.css';

import yashwanth from './images/img1.webp';
import vamshi from './images/img2.webp';
import { FaYoutube } from "react-icons/fa";


function Nav({name,age,duration,course}) {
    const cyberaegis ={
        color:"orange",
        fontSize:"40px",
        wordSpacing:"30px",
        letterSpacing:"5px",
    }
  return (
    <div>


        <div>
            <h4 style={{color:"red", fontSize:"50px",backgroundColor:"yellow"}}>Hey How r u ??</h4>
                <img class={styles.image123} src='https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''></img>    
        </div>

        <div>
        <table>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>duration</th>
            <th>course</th>
          </tr>
          <tr>
            <td>{name}</td>
            <td>{age}</td>
            <td>{course}</td>
            <td>{duration}</td>
          </tr>
        </table>
      </div>
       


        
    <div>
    <FaYoutube />
    </div>
    
    <div>
            <img src={yashwanth} alt='sampletextimage'></img>
            <img src={vamshi} alt='sampletextimage'></img>
            <img src={require("./images/img5.webp")} alt=''></img>
            <img src={require('./images/img4.webp')}></img>
    </div>

    <div>
        <ul className='mouse'>
          <li>about</li>
          <li>profile</li>
          <li>about</li>
          <li>logo</li>
          <li>email</li>
        </ul>
    </div>

    

    </div>
  )
}

export default Nav

