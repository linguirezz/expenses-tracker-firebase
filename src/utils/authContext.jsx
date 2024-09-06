/* eslint-disable react-refresh/only-export-components */
import  { useState, createContext, useContext } from 'react';

const AuthContext = createContext();
const UpdateAuthContext = createContext();
const RegisterContext = createContext();
const UpdateRegisterContext = createContext();


export function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(false);
  const [register, setRegister] = useState(false);

  const updateAuht = (bool) => {
    setAuth(bool);
  };
  const updateRegis = (bool) => {
    setRegister(bool);
  };

  return (
    <AuthContext.Provider value={auth}>
      <UpdateAuthContext.Provider value={updateAuht}>
        <RegisterContext.Provider value = {register}>
            <UpdateRegisterContext.Provider value={updateRegis}>
                  {children}
            </UpdateRegisterContext.Provider>
        </RegisterContext.Provider>
      </UpdateAuthContext.Provider>
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const useRegisterUpdateContext = () => {
  return useContext(UpdateRegisterContext);
};
export const useRegisterContext = () => {
  return useContext(RegisterContext);
};

export const useAuthUpdateContext = () => {
  return useContext(UpdateAuthContext);
};
