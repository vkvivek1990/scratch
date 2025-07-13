import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields(props) {
  return (
    <>
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" /> */}
      <TextField
        id="standard-basic"
        label={props.fieldLabel}
        variant="standard"
      />
    </>
  );
}
