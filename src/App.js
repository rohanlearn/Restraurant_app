import Header from "./components/Layout/Header";
import { Fragment } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
function App() {
    const [cartState,changeCartState] = useState(false)

    const cartStateHandler = ()=>{
        changeCartState(!cartState)
        console.log(!cartState)
    }

  

  return (
    <>
    {cartState && <Cart cartState={cartStateHandler}/>}
      <Header cartSState={cartStateHandler}/>
      <main>
      <Meals/>

      </main>
     
    </>
  );
}

export default App;
