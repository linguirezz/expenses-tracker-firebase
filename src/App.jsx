/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import {useState,useEffect} from 'react'
import axios from 'axios'
// components import
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import {DisplayContextProvider} from './utils/context' 

import { useAuthContext,useRegisterContext,useAuthUpdateContext } from './utils/authContext.jsx';
function App() {
  const isauthenticated = useAuthContext()
  const isRegister = useRegisterContext()
  const setAuthenticated = useAuthUpdateContext()
  useEffect((
  )=>{ 
    const {token}= localStorage
   
    axios.post('http://localhost:3150/auth/verify',null,{
      headers:{
        token:token
      }
    }).then(response=>{
      
      const {verify} = response.data
      if(verify){
        setAuthenticated(true)
      }
    })
  },[])
  useEffect(()=>{console.log('regis',isRegister),console.log('auth',isauthenticated)},[isRegister,isauthenticated])
  return (
 
       <DisplayContextProvider>
      <main>
      <BrowserRouter>
        <Routes>
        <Route exact path='/' 
    element={!isauthenticated?<Navigate to="/login" replace/> :<Navigate to="/dashboard"   />}/>
    <Route path='/login' element={!isauthenticated?<Login  />:<Navigate to="/dashboard" /> }/>
    <Route path='/register' element={!isauthenticated?<Register />:<Navigate to="/dashboard" />}/>
    <Route path='/dashboard' element={!isauthenticated?<Navigate  to="/login" replace/>:<Dashboard />}/>
        </Routes>
      </BrowserRouter>
    </main>
    </DisplayContextProvider>
   
   
    
  );
}

export default App;
