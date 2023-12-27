import React from 'react'
import './Style.css';
import Navbarchild from './Navbarchild';

function Navbar(props){  {/* step 2 */}
  return (
    <div>Hey this is Navbar

      <h1>{props.title}</h1>    {/* step 3 */}
      <p>{props.email}</p>
      <h2>{props.password}</h2>
      

      <div>
      <Navbarchild navbarchildclass={props.title} abc={props.email} hp={props.password} />  {/*navbarchid step1*/}
    </div>
    </div>
  )
}

export default Navbar