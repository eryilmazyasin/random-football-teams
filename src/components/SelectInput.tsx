import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ILigues from "<src>/interfaces/ILigues";

interface IProps {
  data: ILigues;
}

export default function BasicSelect(props: IProps) {
  const { data } = props;
  const [ligue, setLigue] = React.useState("All Ligues");

  const handleChange = (event: SelectChangeEvent) => {
    setLigue(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 300 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Ligues</InputLabel>
        <Select
          labelId="ligue-select-label"
          id="ligue-select"
          value={ligue}
          defaultValue="All Ligues"
          label="Ligue"
          onChange={handleChange}
        >
          {/* <MenuItem defaultChecked={true}>All Ligues</MenuItem> */}
          <MenuItem value={"All Ligues"}>All Ligues</MenuItem>
          <MenuItem value={"Twenty"}>Twenty</MenuItem>
          <MenuItem value={"Thirty"}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
