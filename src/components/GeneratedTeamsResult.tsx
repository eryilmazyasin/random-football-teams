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
  const { filterResults } = useGlobalState();

  const renderTeamsElement = useMemo(() => {
    if (!filterResults) return;

    return (
      <div className={classes.generateTeamsWrapper}>
        <div className="logoAndName">
          <div className="logo">
            <img src={filterResults[0].team_logo} />
          </div>
          {filterResults[0].team_name}
        </div>

        <Image
          src={versusLogo}
          alt="Picture of the author"
          className="versus"
        />
        <div className="logoAndName">
          <div className="logo">
            <img src={filterResults[1].team_logo} />
          </div>
          {filterResults[1].team_name}
        </div>
      </div>
    );
  }, [filterResults]);

  //TODO:Performans sorunları, filterResults state ve değişken isimleri, ui görsel efekt iyileştirmeleri

  return (
    <>
      <div>
        <GenerateButton data={data} />
      </div>

      {renderTeamsElement}
    </>
  );
}
