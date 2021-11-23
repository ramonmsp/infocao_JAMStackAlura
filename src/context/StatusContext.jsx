import React, { createContext, useContext, useState } from "react";

const StatusContext = createContext();

export function useStatus() {
  return useContext(StatusContext).status;
}

export function useSetStatus() {
  return useContext(StatusContext).setStatus;
}

export function StatusContextProvider({ children }) {
  const [status, setStatus] = useState(
    "Você ainda não selecionou nenhuma raça :("
  );

  return (
    <StatusContext.Provider value={{ status, setStatus }}>
      {children}
    </StatusContext.Provider>
  );
}
