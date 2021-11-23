import React, { createContext, useContext } from "react";

const RacasContext = createContext();

export function useRacas() {
  return useContext(RacasContext).racas;
}

export function RacasContextProvider({ racas, children }) {
  return (
    <RacasContext.Provider value={{ racas }}>{children}</RacasContext.Provider>
  );
}
