import { Outlet, Link } from "react-router-dom";
// const Menu = () => {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/users">users</Link>
//           </li>
//         </ul>
//       </nav>

//       <Outlet />
//     </>
//   );
// };

// export default Menu;

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginTop: "10px" }}>
      <Grid container spacing={2}>
        <Grid size={6}>
          <Item>Header</Item>
        </Grid>
        <Grid size={6}>
          <Grid container spacing={2}>
            <Grid size={2}>
              <Item>
                <Link to="/">Home</Link>
              </Item>
            </Grid>
            <Grid size={2}>
              <Item>
                <Link to="/users">users</Link>
              </Item>
            </Grid>
            <Grid size={2}>
              <Item>
                <Link to="/registration">Register</Link>
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
