import React from 'react'
import Navbargrandchild from './Navbargrandchild'

function Navbarchild(props) {   {/*navbarchid step 2*/}
  return (
    <div> 
        <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
        hey this Navbarchild component
        <h1>{props.navbarchildclass}</h1>     {/*navbarchid step 3*/}
        <h1>{props.abc}</h1>
        <h1>{props.hp}</h1>
        

        <br></br>
        <br></br><br></br><br></br><br></br><br></br>
        <div>
            <Navbargrandchild dell={props.navbarchildclass} micro={props.abc} /> 
        </div>
    </div>
  )
}

export default Navbarchild