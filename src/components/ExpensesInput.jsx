import axios from "axios"
import { useState } from "react"
import {time,formattedDate} from '../utils/date.js'
import {useDisplayUpdateContext} from '../utils/context'
function ExpensesInput ({setMount}){
    const [input,setInput]=useState({
        title:'',
        amount:'',
    })
    const handleDisplay = useDisplayUpdateContext()

    const handleChange=(e)=>{
        setInput({...input,
            [e.target.name] : e.target.value
        })
    }
    const handleForm =async(e)=>{
        e.preventDefault()
        try {
            const token = await localStorage.getItem('token')
            const data = {...input,date:formattedDate,time}
           axios.post('http://localhost:3150/dashboard/add',data,{headers:{
            "Content-Type": "application/json",
            token:token
           }}).then(res=>{console.log(res.data)
            
            handleDisplay()
           }) 
        } catch (error) {
            console.log(error)
        }
    }


    // useEffect(()=>{
    //    console.log({...input,date:formattedDate,time})
        
    // },[input])
     return(
        <div className="w-full h-full absolute border border-black  blurry-background">
        <div className="w-[400px] h-[200px] border border-black bg-white  absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] ">
       <form onSubmit={handleForm}>
           <div className="flex flex-col p-2  justify-evenly "> 
               <button className="self-start bg-red-600 text-white" onClick={handleDisplay}>back</button>
               <input name="title" className="mb-3" type="text" placeholder="add new expenses " onChange={handleChange} />
               <input name="amount" type="number"
               placeholder="amount"
               onChange={handleChange}/> 
            <button type='submit' className="bg-blue-700 rounded-sm font-semibold uppercase px-2 text-white self-end" >confirm</button> 
           </div>
       
       </form>
   </div>
   </div>
    )
       
  
    }
       
    

export default ExpensesInput