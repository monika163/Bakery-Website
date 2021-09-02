import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";

  import Login from './Login';
import CustomerSupport from './CustomerSupport';
import About from './About';
import Home from './Home';
import RegisterForm from './RegisterForm';



const Main = () => {
    return (
        <div>
            
            <Route   exact = {true} path = "/"> <Home /> </Route>
            <Route   exact = {true} path = "/login"> <Login /> </Route>
<Route path= "/customer">  <CustomerSupport />  </Route>

<Route path = "/about">   <About /> </Route>



<Route path = "/registration">   <RegisterForm /> </Route>





        </div>
    )
}

export default Main
