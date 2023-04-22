import React, { createContext, useState } from "react";

interface IGlobalState {
  ligueFilter: any;
  setLigueFilter: any;
}

const defaultLiguesValue = "All Ligues";

const GlobalState = createContext<IGlobalState>(null);

const GlobalStateProvider = ({ children }) => {
  const [ligueFilter, setLigueFilter] = useState(defaultLiguesValue);

  return (
    <GlobalState.Provider
      value={{
        ligueFilter,
        setLigueFilter,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};

const useGlobalState = () => {
  const context = React.useContext(GlobalState);
  if (context === undefined) {
    throw new Error("useGlobalState must be used within a Provider");
  }

  return context;
};

export { GlobalStateProvider, useGlobalState };
