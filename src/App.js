import './Style.css';
import Banner from './Banner';
import Navbar from './Navbar';
import {Routes , Route} from "react-router-dom";
import Routingcode from './Routingcode';
import Home from './Home';
import Errorpage from './Errorpage';
import Recipes from './Recipes';
import Videos from './Videos';
import Login from './Login';


function App() {
  return (
    <>
    <div>
    
    
    
    <Routes>

        <Route path='/' element={<Login/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/banner' element={<Banner/>} />
        <Route path='/Routingcode' element={<Routingcode/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/Recipes' element={<Recipes/>} />
        <Route path='/Videos' element={<Videos/>} />

        <Route path='*' element={<Errorpage/>} />

    </Routes>


    
    


    {/* 

    <div>
        <Navbar title="React js class" email="saivamshi@gmail.com" password={1234} />
      </div>
    */}
    
    </div>

    </>
  );
}

export default App;



