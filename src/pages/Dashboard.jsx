import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import Navbar from "../components/Nav"
import ExpensesList from "../components/elements/ExpensesList.jsx"
import ExpensesInput from "../components/ExpensesInput.jsx"
import GroupVisualitation from '../components/elements/groupVisualitation'
// import { Link } from "react-router-dom"
import Layout from "../layout/Dashboard"
import {useDisplayContext} from "../utils/context"
function Dashboard ({handleAuthenticated}){
    const [userName,setUserName] = useState('user')
   const display = useDisplayContext()
    const getName = async ()=>{
        await axios.get('http://localhost:3150/dashboard/',
             {headers:{
                 token: await localStorage.getItem('token')
             }}
         ).then(res=>setUserName(res.data.userData[0].name)
         )
     }
     useEffect(()=>{
        
         getName()
     },[])
     
     const handleLogout=()=>{
        handleAuthenticated(false)
         localStorage.removeItem('token')
        console.log('berhasil menghapus token')
     }
    return(
        
          <Layout >
              <Navbar handleLogout={handleLogout} username={userName}></Navbar>
              <div className="flex  ">
              <div className="w-[300px] h-[580px] bg-white border border-t-slate-300">

              </div>{!display||<ExpensesInput></ExpensesInput>}
              
             {display||<GroupVisualitation/>}
              
              <ExpensesList></ExpensesList>
              </div>
              
          </Layout>
            
    )
}
export default Dashboard