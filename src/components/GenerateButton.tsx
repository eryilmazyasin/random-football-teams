import * as React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import classes from "./GenerateButton.styles";
import { useGlobalState } from "<src>/contexts/GlobalStateProvider";

export default function GenerateButton() {
  const { ligueFilter, teamPowerFilter, setTeamPowerFilter } = useGlobalState();

  const handleGenerateClick = () => {
    console.log(ligueFilter, teamPowerFilter);
    // const findLeagues =
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
