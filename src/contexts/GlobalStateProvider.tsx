import { ILeagues, ITeamPower } from "<src>/interfaces/ILeague";
import React, { createContext, useState } from "react";

interface IGlobalState {
  ligueFilter: ILeagues[];
  // setLigueFilter: React.Dispatch<React.SetStateAction<ILeagues[]>>;
  setLigueFilter: any;
  teamPowerFilter: ITeamPower;
  setTeamPowerFilter: any;
}

const allFilter = "All";

const GlobalState = createContext<IGlobalState>(null);

const GlobalStateProvider = ({ children }) => {
  // const [ligueFilter, setLigueFilter] = useState<ILeagues>(allFilter);
  const [ligueFilter, setLigueFilter] = useState<ILeagues[]>([]);
  const [teamPowerFilter, setTeamPowerFilter] = useState<ITeamPower>(allFilter);

  return (
    <GlobalState.Provider
      value={{
        ligueFilter,
        teamPowerFilter,
        setLigueFilter,
        setTeamPowerFilter,
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
