import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BasicTextFields from "../../../layout/components/input";
import SelectVariants from "../../../layout/components/select";

const Register = () => {
  const mockRegister = [
    {
      fieldLabel: "Name",
      fieldComp: "input",
    },
    {
      fieldLabel: "Name",
      fieldComp: "input",
    },
    {
      fieldLabel: "Sex",
      fieldComp: "select",
    },
  ];

  return (
    <>
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Register
      </Typography>
      <Box
        component="form"
        // sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={2}>
          {mockRegister.map((fields) => {
            if (fields.fieldComp === "input") {
              return <BasicTextFields {...fields} />;
            } else if (fields.fieldComp === "select") {
              return <SelectVariants {...fields} />;
            }
          })}
          {/* <Grid size={2}>
            <BasicTextFields />
          </Grid> */}
        </Grid>
      </Box>
    </>
  );
};

export default Register;
