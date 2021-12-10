import React, { createContext, useContext, useState } from "react";

const picturesContext = createContext();

export const usePicturesContext = () => useContext(picturesContext);

export const PicturesProvider = ({ children }) => {
  const picturesState = useState([]);

  return (
    <picturesContext.Provider value={{ picturesState }}>
      {children}
    </picturesContext.Provider>
  );
};
