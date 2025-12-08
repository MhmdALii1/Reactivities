import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";
export default function AcitivityDashboard() {
  return (
    <Grid container spacing={6}>
      <Grid size={7}>
        <ActivityList />
      </Grid>
      <Grid size={5}>Activity filters will go here</Grid>
    </Grid>
  );
}
