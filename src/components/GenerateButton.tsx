import * as React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import classes from "./GenerateButton.styles";
import { useGlobalState } from "<src>/contexts/GlobalStateProvider";
import ILeague from "<src>/interfaces/ILeague";

interface IProps {
  data: ILeague[];
}

export default function GenerateButton({ data }: IProps) {
  const { ligueFilter, teamPowerFilter, setTeamPowerFilter } = useGlobalState();

  const handleGenerateClick = () => {
    console.log(ligueFilter, teamPowerFilter);
    const teamPower: any = [teamPowerFilter];
    const splitedTeamPower = teamPower[0].split("-");
    console.log([splitedTeamPower]);
    const teams = [];
    const filteredTeamsByPower = [];

    //TODO:Çoklu seçim yapılıp buradaki kodların ona göre yazılması gerekecek. Öncelik çoklu seçim olmalı.

    data.map((league) => {
      if (league.title === ligueFilter) {
        league.teams.map((team) => teams.push(team));
      }
    });

    teams.map((team) => {
      if (
        team.team_rate >= Number(splitedTeamPower[0]) &&
        team.team_rate <= Number(splitedTeamPower[1])
      ) {
        filteredTeamsByPower.push(team);
      }
    });

    console.log({ teams, filteredTeamsByPower });
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="outlined"
        className={classes.generateButton}
        endIcon={<SendIcon />}
        onClick={handleGenerateClick}
      >
        Generate
      </Button>
    </Stack>
  );
}
