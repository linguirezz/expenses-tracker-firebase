import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import {app} from '../utils/fireBaseConfig.js'
import { signInWithRedirect,signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth';

function Auth({ header, subheader, form, children, navigation, handleSubmit }) {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const loginWithGoogle = async () => {
    try {
      await signInWithRedirect(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div className="flex absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[800px] h-[500px] bg-primary p-0">
      <div className="w-[50%] h-inherit p-7">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <Icon />
          <header className="text-2xl font-semibold">
            {header}
          </header>
          <div className="text-[13px] font-[300]">{subheader}</div>
          {children}
          <button type="submit" className="bg-blue-900 text-white font-[100] text-[12px] rounded-md py-2 hover:cursor-pointer">
            {form}
          </button>
          <button className="w-full h-fit bg-white border border-black text-[12px] rounded-md py-2 hover:cursor-pointer" onClick={loginWithGoogle}>
            Sign in with Google
          </button>
          <div className="text-[13px] font-[100] my-3">
            <span>{navigation}</span>
            <Link to='/register' className='text-blue-900'>, Click here!</Link>
          </div>
        </form>
      </div>
      <div className="w-[50%] h-inherit bg-secondary border"></div>
    </div>
  );
}

export default Auth;
