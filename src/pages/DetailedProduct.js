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
  TextField,
  InputAdornment,
  SvgIcon,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Collapse,
  IconButton,
  CircularProgress,
} from '@material-ui/core';

import Budget from '../components/dashboard/Budget';
import LatestOrders from '../components/dashboard/LatestOrders';
import LatestProducts from '../components/dashboard/LatestProducts';
import Sales from '../components/dashboard/Sales';
import TasksProgress from '../components/dashboard/TasksProgress';
import TotalCustomers from '../components/dashboard/TotalCustomers';
import TotalProfit from '../components/dashboard/TotalProfit';
import TrafficByDevice from '../components/dashboard/TrafficByDevice';
import React from 'react';

const DetailedProduct = (props) => {
  const [open, setOpen] = React.useState(false);
  const [openA, setOpenA] = React.useState(false);
  const [loader, setLoader] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setLoader(true);
    setTimeout(() => {
      setOpenA(true);
      setLoader(false);
    }, 1000);
  };

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
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
                      At the end of each year, Spotify compiles a playlist of the songs streamed
                      most often over the course of that year. This year's playlist (Top Tracks of
                      2018) includes 100 songs. The question is: What do these top songs have in
                      common? Why do people like them? Original Data Source: The audio features for
                      each song were extracted using the Spotify Web API and the spotipy Python
                      library. Credit goes to Spotify for calculating the audio feature values. Data
                      Description: There is one .csv file in the dataset.
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
                  <Button variant="contained" sx={{ my: 2 }} onClick={handleClickOpen}>
                    add feature
                  </Button>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add feature</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Features defines the internal structure of a dataset. Features are used to
                        specify the underlying serialization format but also contain high-level
                        information regarding the fields, e.g. column names, types.
                      </DialogContentText>
                      <TextField
                        margin="dense"
                        id="name"
                        label="Title"
                        type="email"
                        fullWidth
                        variant="standard"
                      />
                      <TextField
                        margin="dense"
                        id="name"
                        label="Deccription"
                        type="email"
                        fullWidth
                        variant="standard"
                      />
                      <FormControl fullWidth sx={{ my: 2 }}>
                        <InputLabel id="demo-simple-select-label">Feature type</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Feature type"
                          onChange={handleChange}>
                          <MenuItem value={10}>Softmax</MenuItem>
                          <MenuItem value={20}>Minmax</MenuItem>
                          <MenuItem value={30}>Mean</MenuItem>
                        </Select>
                      </FormControl>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Cancel</Button>
                      <Button onClick={handleClose}>Add</Button>
                    </DialogActions>
                  </Dialog>
                </Box>
              </Card>
            </Grid>

            <Grid item lg={12} md={12} xl={12} xs={12}>
              {loader && <CircularProgress />}
              <Collapse in={openA}>
                <Alert
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpen(false);
                      }}></IconButton>
                  }
                  sx={{ mb: 2 }}>
                  Feature was added
                </Alert>
              </Collapse>
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
};

export default DetailedProduct;
