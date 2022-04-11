import React, { useState } from 'react'
 
function App(){

  const [countnum,setcounter]=useState(0);

  const increase=()=>{
    setcounter(countnum+1);
  };

  const decrease=()=>{
    if(countnum===0){
      alert("lets stay positive");
    }
    else{
      setcounter((countnum-1))
    }
  };

  const reset=()=>{
    setcounter(0);
  };
  return(
    <>
      <h1>{countnum}</h1>
      <button onClick={increase}> Increment</button>
      <button onClick={decrease}>Deacrease</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}
export default App;