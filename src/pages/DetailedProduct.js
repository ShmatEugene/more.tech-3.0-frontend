import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  Card,
  CardHeader,
  Button,
  Divider,
  CardContent,
  Typography,
} from '@material-ui/core';
import Budget from '../components/dashboard/Budget';
import LatestOrders from '../components/dashboard/LatestOrders';
import LatestProducts from '../components/dashboard/LatestProducts';
import Sales from '../components/dashboard/Sales';
import TasksProgress from '../components/dashboard/TasksProgress';
import TotalCustomers from '../components/dashboard/TotalCustomers';
import TotalProfit from '../components/dashboard/TotalProfit';
import TrafficByDevice from '../components/dashboard/TrafficByDevice';

const DetailedProduct = (props) => (
  <>
    <Helmet>
      <title>DetailedProduct | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3,
      }}>
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={12} sm={12} xl={12} xs={12}>
            <Card {...props}>
              <CardHeader title="Spotify Recommendation" />
              <Divider />
              <CardContent>
                <Box
                  sx={{
                    position: 'relative',
                  }}>
                  <Typography color="textSecondary" variant="body1">
                    At the end of each year, Spotify compiles a playlist of the songs streamed most
                    often over the course of that year. This year's playlist (Top Tracks of 2018)
                    includes 100 songs. The question is: What do these top songs have in common? Why
                    do people like them? Original Data Source: The audio features for each song were
                    extracted using the Spotify Web API and the spotipy Python library. Credit goes
                    to Spotify for calculating the audio feature values. Data Description: There is
                    one .csv file in the dataset.
                  </Typography>
                </Box>
              </CardContent>
              <Divider />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  p: 2,
                }}>
                <Button variant="contained" sx={{ my: 2 }}>
                  add feature
                </Button>
              </Box>
            </Card>
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <LatestOrders />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <TotalProfit sx={{ height: '100%' }} />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <Sales />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default DetailedProduct;
