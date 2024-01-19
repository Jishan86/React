import logo from './logo.svg';
import './App.css';
import { Link,Outlet,useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function App() {
  const [isloggedin,setLoggedin]=useState(null);
 const [readval,setVal]=useState(" ");
 const handeldata=(event)=>{
    setVal(event.target.value);
 };
 const navigate=useNavigate();
   const check= (event)=>{
   if (event.target.value==="LoggedIn"){
   const data={readval};
    sessionStorage.setItem("key",JSON.stringify(data))
     setVal(" ");
  setLoggedin(true)
   }
 else 
 {
  sessionStorage.setItem("key","")
   
   setLoggedin(false)
   navigate("/");
 }
}
 
  return (
    <div>
      <nav>
        <ul>
          <li>     <Link to="/Home">Home</Link> </li>
          <li>     <Link to="/Contactus">Contactus</Link> </li>
          <li>     <Link to="/ListEmp">ListEmp</Link> </li>
          <li>     <Link to="/Example">Example</Link> </li>
          <li>     <Link to="*">Nopage</Link> </li>
        </ul>
      </nav>
            <span><input type="text" value={readval} onInput={handeldata}/></span>
      {isloggedin?      
        <button  onClick={check} value="LoggedOut">LoggedOut</button>
      :
      <button onClick={check} value="LoggedIn">LoggedIn</button>
      }

      <Outlet></Outlet>
    </div>
  );

}
