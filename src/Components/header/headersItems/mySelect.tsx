import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

export default function MySelect() {
  const [lang, setLang] = React.useState("Cro");

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 60 }} size="small">
      <InputLabel id="demo-select-small-label"></InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={lang}
        label="Lang"
        onChange={handleChange}
      >
        <MenuItem value="Cro">Cro</MenuItem>
        <MenuItem value="En">En</MenuItem>
        <MenuItem value="De">De</MenuItem>
      </Select>
    </FormControl>
  );
}
