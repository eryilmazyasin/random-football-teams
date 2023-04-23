import * as React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import classes from "./GenerateButton.styles";

export default function GenerateButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="outlined"
        className={classes.generateButton}
        endIcon={<SendIcon />}
      >
        Generate
      </Button>
    </Stack>
  );
}
