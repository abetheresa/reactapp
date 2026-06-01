import { useState,useReducer } from 'react'
import './App.css'

const initialState = {name:"",loggedIn:false};

function reducer(state,action) {
  switch(action.type){
    case "login" :
      return {...state,loggedIn:true,name:action.payload};
    case "logout" :
      return {...state,loggedIn:false,name:""};
    default :
    return state;
  }
}

function App() {
  // using useState
  const [count,setCount] = useState(0);
  const [input,setInput] = useState("");
  const [state, dispatch] = useReducer(reducer,initialState);

  return(
    <div>
      {state.loggedIn ? (<div>
        <p>Welcome, {state.name}</p>
        <button onClick={() => dispatch({type:"logout"})}>Logout</button>
        </div>) : (<div>
          <p>You are not logged in</p>
          <input 
          type="text" 
          placeholder="Enter your name" 
          value={input} 
          onChange={(e) => setInput(e.target.value)}>
          </input>
          <button onClick={() => dispatch({type:"login",payload:input})}>Login</button>
        </div>)}
      <h2>{count}</h2>
      <button onClick={() => setCount(count+1)}>+ add</button>
      <button onClick={() => setCount(count-1)}>- substract</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  )
}

export default App
