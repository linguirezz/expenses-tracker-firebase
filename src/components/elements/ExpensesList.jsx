import ExpensesChild from "../Expenses"
import ExpensesInput from "../ExpensesInput"
import axios from'axios'
import { useEffect,useState } from "react"
import { useDisplayUpdateContext,useDisplayContext } from '../../utils/context'
function Tracker (){
   
    const [list,setList]=useState([])
    // const [display,setDisplay]=useState(false)
    // ! hapus absolute untuk untuk menambah element lain
    const handleClick = useDisplayUpdateContext()
    const display = useDisplayContext()
    // const setMount =(fetch)=>{
    //     setFetch(fetch)
    // }
    // const handleDisplay =(bool)=>{
    //     setDisplay(bool)
    // }
   
    
    useEffect(()=>{
        axios.get('http://localhost:3150/dashboard/',{
            headers:{
                token:localStorage.getItem('token')
            }
        }).then(res=>{
            console.log('terender')
            setList(res.data.expensesData)})    
    },[display])
 
    return(
        
         
            

            <div className="ml-auto w-[300px] h-[580px] bg-white z-1">
            {/* header */}
            <div className="w-full h-[10%] grid place-items-center border border-x-0">
                <span className="w-fit h-">
                this is your expenses
                </span>
            </div>
            {/* list */}
            <div className="h-[80%]  w-full flex flex-col ">
                
                {list?list.map(data=>{
                 
                    
                     
                    return(
                    <ExpensesChild title={data.description} amount={data.amount} date={data.date} key={data.id}></ExpensesChild>
                )}):<div>loading....</div>}
                
            </div>
            <div className=" w-full h-[10%] flex items-center p-3">
            <div>
                
            </div>
            {/* add column */}
            <div className="w-6 h-6 border mr-1"></div>
            <span className="text-sm font-thin">Missing transaction?</span>
            <button className="w-fit h-6 ml-auto bg-blue-700 rounded-sm foont-bold px-2 text-white uppercase" onClick={handleClick}>add new</button>
            </div>
        </div>
        
        
    )
}
export default Tracker