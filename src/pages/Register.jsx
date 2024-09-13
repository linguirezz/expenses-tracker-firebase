import Authlayout from '../layout/Auth.jsx'
import Input from '../components/Input.jsx'
import { useState } from 'react';
import { useRegisterUpdateContext} from '../utils/authContext.jsx';
import { app } from '../utils/fireBaseConfig.js';
import axios from 'axios'
// import { app } from '../utils/fireBaseConfig.js'; TODO : turn on if you need something

function Register (){
 
  const setRegis = useRegisterUpdateContext()
  
    const [credential, setCredential] = useState({
        username:'',
        email: '',
        password: '',
      });
     
      const handleChange = (e) => {
      
        setCredential({
          ...credential,
          [e.target.name]: e.target.value,
        });
      };
     
      const handleSubmit= async (e)=>{
        e.preventDefault();
        try {
      
            
             await axios.post(`http://localhost:3150/auth/register`,credential,{
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
              }).then(response=>{
                // console.log(response.data)
                localStorage.setItem('token',response.data)
                setRegis(true)
                // console.log(register)
              })
        } catch (error) {
            console.error(error)
        }
    }
    return(
        <>
            <div>
                <Authlayout header="register in to your account" subheader="to create your account please input your credential"form="register" navigation="if you already have an account "
                body={credential}
                handleSubmit={handleSubmit}>
                <div className="w-inherit h-[100px] grid gap-2 grid-rows-2 my-5">
                <Input name="username" placeholder='username'
                type={'text'} handleChange={handleChange}/>
                <Input name="email" placeholder={'email'} type={'email'} handleChange={handleChange}/>
                <Input name="password" placeholder={'password'} type={'password'} handleChange={handleChange}/>
                </div> 
                </Authlayout>
            </div>
            </>
    )
}
export default Register