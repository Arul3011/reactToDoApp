import React from 'react'
import './cointainer.css'
const Cointainer=(props)=>{
  return (

   <div className='div'>
      
    
    <div className="inputFeild">
      <input  type="text" 
      value={props.nameEL}
      onChange={(e)=> {
        props.setNameEl(e.target.value);
        
      } } 
      />
      <button onClick={()=>  props.udatearray(props.nameEL)}>Add</button>
      </div>
 
  {props.arr.length ==0 ? <p>Add Your List</p> : 
    <ul >
    {props.arr.map((val)=> 
         (<li key={val.id} >
             <input 
      
               type="checkbox" 
               onChange={()=>{props.checkchange(val.id)}}
               checked={val.checcked}
             />
              
             <span 
             style={{fontSize:"50px"}}
              onClick={()=>(props.checkchange(val.id))}
              >{val.name}</span>
              <button
              
                onClick={()=>(props.deleatval(val.id))}>Del</button>
             </li>))}
 
    </ul>  
    }
  
    


    
     


  </div>
  )
}

export default Cointainer;



