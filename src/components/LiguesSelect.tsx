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

export default function BasicSelect(props: IProps) {
  const { data } = props;
  const defaultSelectedValue = "All Ligues";
  const { ligueFilter, setLigueFilter } = useGlobalState();

  const handleChange = (event: SelectChangeEvent) => {
    setLigueFilter(event.target.value as string);
  };

  console.log({ data, ligueFilter });

  const renderMenuItems = () => {
    if (!data) return;

    const ligues = data.map((ligue) => (
      <MenuItem key={ligue.title} value={ligue.title}>
        {ligue.title}
      </MenuItem>
    ));

    ligues.unshift(
      <MenuItem key="allLigues" value={defaultSelectedValue}>
        {defaultSelectedValue}
      </MenuItem>
    );

    return ligues;
  };

  return (
    <Box sx={{ minWidth: 300 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Ligues</InputLabel>
        <Select
          labelId="ligue-select-label"
          id="ligue-select"
          value={ligueFilter}
          defaultValue="All Ligues"
          label="Ligue"
          onChange={handleChange}
        >
          {renderMenuItems()}
        </Select>
      </FormControl>
    </Box>
  );
}
