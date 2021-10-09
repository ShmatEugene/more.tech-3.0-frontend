import { Avatar, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const TotalProfit = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="h6">
            Similar datasets
          </Typography>
          {/* <Typography color="textPrimary" variant="h3">
            $23,200
          </Typography> */}
        </Grid>
        <Grid item></Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default TotalProfit;
