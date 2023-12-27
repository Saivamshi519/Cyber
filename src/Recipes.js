import React , {useState ,useEffect} from 'react';

function Recipes() {

  const [yashwanth , setYashwanth ] = useState(1);

        const virat = () =>{
          setYashwanth(yashwanth + 1);
        }

        const Kohli = () =>{
          if (yashwanth > 1){
          setYashwanth(yashwanth - 1);
           }
           else {
            setYashwanth(yashwanth);
           }
        }

        useEffect( () => {
          console.log(yashwanth);
        } , [ ]);

  return (
    <div>Recipes
        <h2 className='bg-warning'> hey this is recipes component</h2>

      <div className='m-4'>
        <button className='btn btn-success m-2' onClick={ ()=> virat() }>+</button>
        {yashwanth}
        <button className='btn btn-danger m-2' onClick={ ()=> Kohli() }>-</button>
      </div>



    </div>
  )
}

export default Recipes