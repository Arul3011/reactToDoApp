import React from 'react'
import { useState } from 'react'
import Cointainer from './Cointainer';
import Heade from './Heade';
import Footer from './Footer';
import "./App.css";

const App=()=> {
  const [nameEL, setNameEl] = useState("");
  
  const [count, setCount] = useState([]);
const checkchange=(id)=>{
    const newarray=count.map(item => (item.id===id ? {...item,checcked:!item.checcked} : item))
    setCount(newarray)
}
const deleatval=(id)=>{
  const delarray=count.filter(item => (item.id!=id))
  setCount(delarray)
}
const udatearray=(ele)=>{
  const newarray = {
    
      id:count.length==0 ? 0 : Number(count.length)+1,
    name:ele,
    checcked:false
  }
  
  
  setCount(count=> [...count,newarray])
  setNameEl("");
}

  return (
    
    
    
      <div className='cointainer' >
        <div className="main">
        <Heade />
        <Cointainer

      arr={count}
      nameEL={nameEL}
      checkchange={checkchange}
      deleatval={deleatval}
      udatearray={udatearray}
      setNameEl={setNameEl} />
      <Footer /></div>
      </div>
     




  )
}

export default App
