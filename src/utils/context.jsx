/* eslint-disable react-refresh/only-export-components */
import  { useState, createContext, useContext } from 'react';

const DisplayContext = createContext();
const UpdateDisplayContext = createContext();


export function DisplayContextProvider({ children }) {
  const [display, setDisplay] = useState(false);

  const updateDisplay = () => {
    setDisplay(prevdisplay=>!prevdisplay);
  };

  return (
    <DisplayContext.Provider value={display}>
      <UpdateDisplayContext.Provider value={updateDisplay}>
        {children}
      </UpdateDisplayContext.Provider>
    </DisplayContext.Provider>
  );
}

export const useDisplayContext = () => {
  return useContext(DisplayContext);
};

export const useDisplayUpdateContext = () => {
  return useContext(UpdateDisplayContext);
};
