import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ILeague from "<src>/interfaces/ILeague";
import { useGlobalState } from "<src>/contexts/GlobalStateProvider";
import { Chip, OutlinedInput } from "@mui/material";

import classes from "./LiguesSelect.styles";

interface IProps {
  data: ILeague[];
}

export default function LiguesSelect(props: IProps) {
  const { data } = props;
  const { ligueFilter, setLigueFilter } = useGlobalState();

  const handleChange = (event: SelectChangeEvent<typeof ligueFilter>) => {
    const {
      target: { value },
    } = event;
    setLigueFilter(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
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

  return (
    <Box sx={{ minWidth: 300 }} className={classes.liguesSelectWrapper}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Ligues</InputLabel>
        <Select
          labelId="ligue-select-label"
          id="ligue-select"
          value={ligueFilter}
          label="Ligue"
          onChange={handleChange}
          // defaultValue={ligueFilter}
          multiple={true}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {renderMenuItems()}
        </Select>
      </FormControl>
    </Box>
  );
}
