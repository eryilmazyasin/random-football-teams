import React, { useMemo } from "react";
import Image from "next/image";
import versusLogo from "../../public/versus.png";
import { useGlobalState } from "<src>/contexts/GlobalStateProvider";
import GenerateButton from "./GenerateButton";
import ILeague from "<src>/interfaces/ILeague";

import classes from "./GeneratedTeamsResult.styles";

interface IProps {
  data: ILeague[];
}

export default function GeneratedTeamsResult(props: IProps) {
  const { data } = props;
  const { randomTeams, isRandomTeamsCalculated, noResult } = useGlobalState();

  const renderTeamsElement = useMemo(() => {
    if (noResult)
      return <div className={classes.noResult}>No result found</div>;

    if (!randomTeams) return;

    return (
      <div
        className={classes.generateTeamsWrapper}
        data-is-calculated={isRandomTeamsCalculated}
      >
        <div className="logoAndName">
          <div className="logo">
            <img
              src={randomTeams[0].team_logo}
              alt={`${randomTeams[0].team_name}-homeTeamLogo`}
            />
          </div>
          {randomTeams[0].team_name}
        </div>

        <Image
          src={versusLogo}
          alt="Picture of the author"
          className="versus"
        />
        <div className="logoAndName">
          <div className="logo">
            <img
              src={randomTeams[1].team_logo}
              alt={`${randomTeams[1].team_name}-awayTeamLogo`}
            />
          </div>
          {randomTeams[1].team_name}
        </div>
      </div>
    );
  }, [randomTeams, isRandomTeamsCalculated, noResult]);

  //TODO:Performans sorunları, değişken isimleri, ui görsel efekt iyileştirmeleri

  return (
    <>
      <div>
        <GenerateButton data={data} />
      </div>

      {renderTeamsElement}
    </>
  );
}
