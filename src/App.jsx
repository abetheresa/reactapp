import { useState,useReducer } from 'react'
import './App.css'

const initialState = {name:"",loggedIn:true};

function reducer(state,action) {
  switch(action.type){
    case "login" :
      return {...state,loggedIn:true,name:action.payload};
    case "logout" :
      return {...state,loggedIn:false,name:action.payload};
    default :
    return state;
  }
}

function App() {
  // using useState
  const [count,setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer,initialState);

  return(
    <div>
      {state.loggedIn ? (<div>
        <p>Welcome, {state.name}</p>
        <button onClick={() => dispatch({type:"logout"})}>Logout</button>
        </div>) : (<div>
          <p>You are not logged in</p>
          <button onClick={() => dispatch({type:"login",payload:"Alice"})}>Login</button>
        </div>)}
      <h2>{count}</h2>
      <button onClick={() => setCount(count+1)}>+ add</button>
      <button onClick={() => setCount(count-1)}>- substract</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  )
}

export default App
