import React, { createContext, useState, useContext } from "react";

const MyContext = createContext();

export const SaveInputProvider = ({ children }) => {
  const [selectedInputs, setSelectedInputs] = useState([]);

  const addInput = (number, text) => {
    setSelectedInputs([...selectedInputs, { number, text }]);
  };

  return (
    <MyContext.Provider
      value={{
        selectedInputs,
        addInput,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useFormContext = () => useContext(MyContext);
