import * as React from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function InputAdornments() {
  const [values, setValues] = React.useState({
    values: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
    });
  };

  return (
    <>
      <TextField
        label="Search By Component ID"
        sx={{ m: 1, width: "25ch" }}
        id="outlined-adornment-password"
        type={true ? "text" : "password"}
        value={values.values}
        onChange={handleChange("values")}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
}
