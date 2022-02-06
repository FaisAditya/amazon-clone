import React, { createContext, useContext, useReducer } from "react";

//prepares the dataLayer
export const StateContext = createContext();

//WRAP OUR APP AND PROVIDE THE DATALAYER
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//PULL INFORMATION FROM THE DATA LAYER
export const useStateValue = () => useContext(StateContext);
