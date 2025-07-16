import { Outlet, Link } from "react-router-dom";
import "./style.css";
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
    <Box
      sx={{ flexGrow: 1 }}
      style={{ marginTop: "10px" }}
      className="headerRow"
    >
      <Grid container spacing={2}>
        <Grid size={2}>
          <p className="logo">My Teacher.,</p>
        </Grid>
        <Grid size={6}>
          <Grid container spacing={2} className="menuList">
            <Grid size={2}>
              <Link className="link" to="/">
                Home
              </Link>
            </Grid>
            <Grid size={2}>
              <Link className="link" to="/users">
                users
              </Link>
            </Grid>
            <Grid size={2}>
              <Link className="link" to="/registration">
                Register
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={4}>
          <>
            {" "}
            <span className="userinitials">VK</span>
          </>
        </Grid>
      </Grid>
    </Box>
  );
}
