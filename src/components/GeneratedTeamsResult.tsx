import React, { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import versusLogo from "../../public/versus.png";
import classes from "./GeneratedTeamsResult.styles";
import { useGlobalState } from "<src>/contexts/GlobalStateProvider";
import GenerateButton from "./GenerateButton";
import ILeague, { ITeams } from "<src>/interfaces/ILeague";

interface IProps {
  data: ILeague[];
}

export default function GeneratedTeamsResult(props: IProps) {
  const { data } = props;
  const { randomTeams, isRandomTeamsCalculated } = useGlobalState();

  const renderTeamsElement = useMemo(() => {
    if (!randomTeams) return;

    return (
      <div className={classes.generateTeamsWrapper} data-is-calculated={isRandomTeamsCalculated}>
        <div className="logoAndName">
          <div className="logo">
            <img src={randomTeams[0].team_logo} alt={"homeTeamLogo"} />
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
            <img src={randomTeams[1].team_logo} alt={"awayTeamLogo"} />
          </div>
          {randomTeams[1].team_name}
        </div>
      </div>
    );
  }, [randomTeams]);

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
