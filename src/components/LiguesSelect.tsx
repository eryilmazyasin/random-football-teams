import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ILeague from "<src>/interfaces/ILeague";
import { useGlobalState } from "<src>/contexts/GlobalStateProvider";

interface IProps {
  data: ILeague[];
}

export default function LiguesSelect(props: IProps) {
  const { data } = props;
  const { ligueFilter, setLigueFilter } = useGlobalState();

  const handleChange = (event: SelectChangeEvent) => {
    setLigueFilter(event.target.value as string);
  };

  const renderMenuItems = () => {
    if (!data) return;

    const ligues = data.map((ligue) => (
      <MenuItem key={ligue.title} value={ligue.title}>
        {ligue.title}
      </MenuItem>
    ));

    const defaultSelectedValue = "All";

    ligues.unshift(
      <MenuItem key="allLigues" value={defaultSelectedValue}>
        {defaultSelectedValue}
      </MenuItem>
    );

    return ligues;
  };

  // TODO: Çoklu seçim yapılabilmeli

  return (
    <Box sx={{ minWidth: 300 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Ligues</InputLabel>
        <Select
          labelId="ligue-select-label"
          id="ligue-select"
          value={ligueFilter}
          label="Ligue"
          onChange={handleChange}
        >
          {renderMenuItems()}
        </Select>
      </FormControl>
    </Box>
  );
}
