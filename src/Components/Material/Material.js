import React, { useState } from "react";
import Button from "@mui/material/Button";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Rating,
  Typography,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import NewsPaper from "./NewPaper/NewsPaper";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Material = () => {
  const [value, setValue] = useState(2);
  return (
    <>
     
      <div>
        <Button variant="contained">Hello World</Button>
      </div>
      <div>
        <h1>CheckBox</h1>
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} defaultChecked color="secondary" />
        <Checkbox {...label} defaultChecked color="success" />
        <Checkbox {...label} defaultChecked color="default" />
        <Checkbox
          {...label}
          defaultChecked
          sx={{
            color: pink[800],
            "&.Mui-checked": {
              color: pink[600],
            },
          }}
        />
      </div>
      <div className="my-5">
        <h1>Radio Group</h1>
        <div>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>

      <div className="my-5">
        <h1>Rating</h1>
        <div>
          <Typography component="legend">Controlled</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
      </div>
      <NewsPaper />
    </>
  );
};

export default Material;
