import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ILigue from "<src>/interfaces/ILigue";

interface IProps {
  data: ILigue[];
}

export default function BasicSelect(props: IProps) {
  const { data } = props;
  const defaultSelectedValue = "All Ligues";
  const [ligue, setLigue] = React.useState(defaultSelectedValue);

  const handleChange = (event: SelectChangeEvent) => {
    setLigue(event.target.value as string);
  };

  console.log({ data });

  const renderMenuItems = () => {
    if (!data) return;

    const ligues = data.map((ligue) => (
      <MenuItem key={ligue.title} value={ligue.title}>
        {ligue.title}
      </MenuItem>
    ));

    ligues.unshift(
      <MenuItem value={defaultSelectedValue}>{defaultSelectedValue}</MenuItem>
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
          value={ligue}
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
