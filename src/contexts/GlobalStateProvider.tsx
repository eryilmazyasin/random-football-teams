import { ILeagues, ITeamPower, ITeams } from "<src>/interfaces/ILeague";
import React, { createContext, useState } from "react";

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
}

const allFilter = "All";

const GlobalState = createContext<IGlobalState>(null);

const GlobalStateProvider = ({ children }) => {
  // const [ligueFilter, setLigueFilter] = useState<ILeagues>(allFilter);
  const [ligueFilter, setLigueFilter] = useState<ILeagues[]>([]);
  const [teamPowerFilter, setTeamPowerFilter] = useState<ITeamPower>(allFilter);
  const [randomTeams, setRandomTeams] = useState<ITeams[]>(null);
  const [isRandomTeamsCalculated, setIsRandomTeamsCalculated] = useState(false);

  return (
    <GlobalState.Provider
      value={{
        ligueFilter,
        teamPowerFilter,
        randomTeams,
        isRandomTeamsCalculated,
        setIsRandomTeamsCalculated,
        setLigueFilter,
        setTeamPowerFilter,
        setRandomTeams,
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
