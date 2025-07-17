import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { PieChart } from "@mui/x-charts/PieChart";
import { Gauge } from "@mui/x-charts/Gauge";
import { BarChart } from "@mui/x-charts/BarChart";
import { dataset, valueFormatter } from "./weather";

const data = [
  { label: "Group A", value: 400, color: "#0088FE" },
  { label: "Group B", value: 300, color: "#00C49F" },
  { label: "Group C", value: 300, color: "#FFBB28" },
  { label: "Group D", value: 200, color: "#FF8042" },
];

const settings = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  hideLegend: true,
};

const chartSetting = {
  yAxis: [
    {
      label: "Technology (%)",
      width: 60,
    },
  ],
  height: 300,
};

const Dashboard = () => {
  return (
    <>
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Hey Admin!
      </Typography>
      <Grid container spacing={2}>
        <Grid size={8}>
          {/* <Gauge
            width={100}
            height={100}
            value={60}
            startAngle={-90}
            endAngle={90}
          /> */}
          <BarChart
            dataset={dataset}
            xAxis={[{ dataKey: "month" }]}
            series={[
              { dataKey: "Html", label: "Html", valueFormatter },
              { dataKey: "Css", label: "Css", valueFormatter },
              { dataKey: "JS", label: "JS", valueFormatter },
              { dataKey: "Java", label: "Java", valueFormatter },
            ]}
            {...chartSetting}
          />
        </Grid>
        <Grid size={4}>
          <PieChart
            series={[
              { innerRadius: 50, outerRadius: 100, data, arcLabel: "value" },
            ]}
            {...settings}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
