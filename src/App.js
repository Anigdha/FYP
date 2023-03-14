import React, { useRef } from 'react';
import { Switch ,Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Service from './Component/Services';
import Contact from './Component/Contact';
import Error from './Component/Error';
import List from './Component/List';
import SignUpForm from './Component/SignUpForm';
import SignInForm from './Component/SignInForm';

const App=()=>{
  
  return(
    <>
    {/* List always remains at top of every component */}
      <List/> 
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/about" component = {About} />
        <Route path="/services" component = {Service} />
        <Route path="/contact" component = {Contact} />
        <Route path="/signin" component = {SignInForm} />
        <Route path="/signup" component = {SignUpForm} />
        <Route component = {Error} />
      </Switch>

      {/* <About/>
      <Service/>
      <Contact/> */}
    </>
  )
}
export default App;