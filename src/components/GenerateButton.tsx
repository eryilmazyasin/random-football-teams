import * as React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import classes from "./GenerateButton.styles";
import { useGlobalState } from "<src>/contexts/GlobalStateProvider";
import ILeague, { ITeamPower } from "<src>/interfaces/ILeague";

interface IProps {
  data: ILeague[];
}

export default function GenerateButton({ data }: IProps) {
  const { ligueFilter, teamPowerFilter, setFilterResults } = useGlobalState();

  const handleGenerateClick = () => {
    let teams = [];
    const teamPower: any = [teamPowerFilter];
    const teamPowerItem = teamPower[0]; // Dizinin ilk ve tek öğesi
    const [startPower, endPower] = teamPowerItem.split(" - "); // Dizeyi ayrıştırma

    data.map((league, index) => {
      const selectedLeaguesText = ligueFilter.join(",");
      const hasSelectedLeagues = selectedLeaguesText.includes(league.title);

      league.teams.map((team) => {
        if (
          (!ligueFilter.length || ligueFilter.includes("All")) &&
          teamPowerFilter === "All"
        ) {
          //Hiçbir filtre uygulanmamış ise
          teams.push(team);
          return;
        } else if (
          teamPowerFilter !== "All" &&
          team.team_rate >= startPower &&
          team.team_rate <= endPower &&
          hasSelectedLeagues
        ) {
          //TeamPower filtresi ve league filtresi uygulanmış ise
          teams.push(team);
          return;
        } else if (
          teamPowerFilter !== "All" &&
          (!ligueFilter.length || ligueFilter.includes("All")) &&
          team.team_rate >= startPower &&
          team.team_rate <= endPower
        ) {
          //Sadece teamPower filtresi uygulanmış ise
          teams.push(team);
          return;
        } else if (teamPowerFilter === "All" && hasSelectedLeagues) {
          //Sadece leaguea filtresi uygulanmış ise
          teams.push(team);
          return;
        }
      });
    });

    setFilterResults(teams);
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
