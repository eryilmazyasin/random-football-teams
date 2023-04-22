import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ILigue from "<src>/interfaces/ILigue";
import { useGlobalState } from "<src>/contexts/GlobalStateProvider";

interface IProps {
  data: ILigue[];
}

export default function TeamPowerSelect(props: IProps) {
  const { data } = props;
  const { ligueFilter, teamPowerFilter, setTeamPowerFilter } = useGlobalState();

  const handleChange = (event: SelectChangeEvent) => {
    setTeamPowerFilter(event.target.value);
  };

  const renderMenuItems = () => {
    if (!data) return;

    const powers = ["All", "0 - 50", "50 - 70", "70 - 80", "80 - 100"];

    return powers.map((power) => (
      <MenuItem key={power} value={power}>
        {power}
      </MenuItem>
    ));
  };

  return (
    <Box sx={{ minWidth: 300 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Power</InputLabel>
        <Select
          labelId="power-select-label"
          id="power-select"
          value={String(teamPowerFilter)}
          label="Power"
          onChange={handleChange}
        >
          {renderMenuItems()}
        </Select>
      </FormControl>
    </Box>
  );
}
