import React, { createContext, useState } from "react";
import { ILeagues, ITeamPower, ITeams } from "<src>/interfaces/ILeague";

interface IGlobalState {
  ligueFilter: ILeagues[];
  // setLigueFilter: React.Dispatch<React.SetStateAction<ILeagues[]>>;
  teamPowerFilter: ITeamPower;
  randomTeams: ITeams[];
  isRandomTeamsCalculated: boolean;

  setIsRandomTeamsCalculated: React.Dispatch<React.SetStateAction<boolean>>;
  setTeamPowerFilter: any;
  setRandomTeams: React.Dispatch<React.SetStateAction<ITeams[]>>;
  setLigueFilter: any;
  noResult: boolean;
  setNoResult: React.Dispatch<React.SetStateAction<boolean>>;
}

const allFilter = "All";

const GlobalState = createContext<IGlobalState>(null);

const GlobalStateProvider = ({ children }) => {
  // const [ligueFilter, setLigueFilter] = useState<ILeagues>(allFilter);
  const [ligueFilter, setLigueFilter] = useState<ILeagues[]>([]);
  const [teamPowerFilter, setTeamPowerFilter] = useState<ITeamPower>(allFilter);
  const [randomTeams, setRandomTeams] = useState<ITeams[]>(null);
  const [isRandomTeamsCalculated, setIsRandomTeamsCalculated] = useState(false);
  const [noResult, setNoResult] = useState(false);

  return (
    <GlobalState.Provider
      value={{
        ligueFilter,
        teamPowerFilter,
        randomTeams,
        isRandomTeamsCalculated,
        noResult,
        setIsRandomTeamsCalculated,
        setLigueFilter,
        setTeamPowerFilter,
        setRandomTeams,
        setNoResult,
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
