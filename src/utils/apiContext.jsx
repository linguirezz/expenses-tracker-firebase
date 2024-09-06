import  { useState, createContext,useContext } from 'react';

const MountContext = createContext();
const UpdateContext = createContext();

export function FetchApi() {
  const [fetch, setFetch] = useState('');

  const setMount = (fetch) => {
    setFetch(fetch);
  };

  return (
    <MountContext.Provider value={fetch}>
      <UpdateContext.Provider value={setMount}>
        {/* Komponen anak */}
      </UpdateContext.Provider>
    </MountContext.Provider>
  );
}
export const useMountContext = () => {
  return useContext(MountContext);
};

export const useMountUpdateContext = () => {
  return useContext(UpdateContext);
};


