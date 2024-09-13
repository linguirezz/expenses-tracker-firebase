import Auhtlayout from '../layout/Auth.jsx';
import Input from '../components/Input.jsx';
import { useState } from 'react';
import axios from 'axios'
import { app } from '../utils/fireBaseConfig.js';
import { useAuthUpdateContext} from '../utils/authContext'


function Login() {
 
  const setAuth = useAuthUpdateContext()
  const [credential, setCredential] = useState({
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
    
         await axios.post(`https://expenses-tracker-api-3e3x.vercel.app/auth/login`,credential,{
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }).then(response=>{
            console.log(response.data)
            localStorage.setItem('token',response.data)
            setAuth(true)
          })
    } catch (error) {
        console.error(error)
    }
}

  return (
    <div className="w-[100vw] h-[100vw]">
        
      <Auhtlayout
        header="Login to your account"
        subheader="Welcome back! Please input your credentials"
        navigation="If you don't have an account"
        handleSubmit={handleSubmit}
        form="login"
      >
        <form>

        </form>
        <div className="w-inherit h-[100px] grid gap-2 grid-rows-2 my-5">
          <Input placeholder="email" type="email" name="email" handleChange={handleChange} />
          <Input placeholder="password" type="password" name="password" handleChange={handleChange}/>
        </div>
        <div className="flex flex-col my-3">
          <div className="flex justify-between">
            <div className="flex">
              <input name="check" type="checkbox" />
              <label
                className="text-[11px] ml-1 font-[100] capitalize text-slate-700 self-center"
                htmlFor="check"
              >
                Remember me
              </label>
            </div>
            <span className="text-[13px] ml-1 font-[100] capitalize text-secondary hover:cursor-pointer select-none">
              Forgot password?
            </span>
          </div>
        </div>
      </Auhtlayout>
    </div>
  );
}

export default Login;
