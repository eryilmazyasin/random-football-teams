import * as React from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import Stack from "@mui/material/Stack";
import { useGlobalState } from "<src>/contexts/GlobalStateProvider";
import ILeague from "<src>/interfaces/ILeague";

import classes from "./GenerateButton.styles";

interface IProps {
  data: ILeague[];
}

export default function GenerateButton({ data }: IProps) {
  const {
    ligueFilter,
    teamPowerFilter,
    noResult,
    setRandomTeams,
    setIsRandomTeamsCalculated,
    setNoResult,
  } = useGlobalState();

  const [isCalculating, setIsCalculating] = React.useState(false);

  const selectTwoRandomTeams = (arr) => {
    if (!arr || !arr.length) return;
    // Eğer dizi içerisinde 2 ya da daha az öğe varsa, işlem yapmadan diziye geri dön
    if (arr.length <= 2) return arr;

    // Rastgele bir ilk öğe seçin
    let firstItem = arr[Math.floor(Math.random() * arr.length)];

    // İkinci öğe, seçilen ilk öğeden farklı olana kadar rastgele olarak seçilir
    let secondItem = firstItem;
    while (secondItem === firstItem) {
      secondItem = arr[Math.floor(Math.random() * arr.length)];
    }

    // İki seçilen öğeyi bir dizi içinde döndürün
    return [firstItem, secondItem];
  };

  const generateRandomTeams = (filteredTeams) => {
    if (!filteredTeams) return;

    setIsCalculating(true);

    const interval = setInterval(() => {
      const teams = selectTwoRandomTeams(filteredTeams);
      setRandomTeams(teams);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setIsRandomTeamsCalculated(true);
      setIsCalculating(false);
    }, 5000);
  };

  const handleGenerateClick = () => {
    let teams = [];
    const teamPower: any = [teamPowerFilter];
    const teamPowerItem = teamPower[0]; // Dizinin ilk ve tek öğesi
    const [startPower, endPower] = teamPowerItem.split(" - "); // Dizeyi ayrıştırma

    setIsRandomTeamsCalculated(false);

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

    if (teams.length <= 1) {
      setIsCalculating(true);
      setTimeout(() => {
        setIsCalculating(false);
        setNoResult(true);
      }, 500);
    } else {
      if (noResult) setNoResult(false);
      generateRandomTeams(teams);
    }
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="outlined"
        className={classes.generateButton}
        endIcon={
          isCalculating && (
            <CircularProgress size={15} color="info" variant="indeterminate" />
          )
        }
        onClick={handleGenerateClick}
        disabled={isCalculating}
        disableTouchRipple={true}
      >
        Generate
      </Button>
    </Stack>
  );
}
