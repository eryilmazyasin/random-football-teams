import { ILeagues, ITeamPower, ITeams } from "<src>/interfaces/ILeague";
import React, { createContext, useState } from "react";

interface IGlobalState {
  ligueFilter: ILeagues[];
  // setLigueFilter: React.Dispatch<React.SetStateAction<ILeagues[]>>;
  setLigueFilter: any;
  teamPowerFilter: ITeamPower;
  setTeamPowerFilter: any;
  setFilterResults: React.Dispatch<React.SetStateAction<ITeams[]>>;
  filterResults: ITeams[];
}

const allFilter = "All";

const GlobalState = createContext<IGlobalState>(null);

const GlobalStateProvider = ({ children }) => {
  // const [ligueFilter, setLigueFilter] = useState<ILeagues>(allFilter);
  const [ligueFilter, setLigueFilter] = useState<ILeagues[]>([]);
  const [teamPowerFilter, setTeamPowerFilter] = useState<ITeamPower>(allFilter);
  const [filterResults, setFilterResults] = useState<ITeams[]>(null);

  return (
    <GlobalState.Provider
      value={{
        ligueFilter,
        teamPowerFilter,
        filterResults,
        setLigueFilter,
        setTeamPowerFilter,
        setFilterResults,
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
