import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  Button,
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';
import { NavLink } from 'react-router-dom';

const ProductCard = ({ product, ...rest }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}
    {...rest}>
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'start',
          pb: 3,
        }}></Box>
      <Typography align="left" color="textPrimary" gutterBottom variant="h4">
        {product.title}
      </Typography>
      <Typography align="left" color="textPrimary" variant="body1">
        {product.description}
      </Typography>
      <NavLink to="/app/detailed">
        <Button variant="contained" sx={{ my: 2 }}>
          More
        </Button>
      </NavLink>
      <Button variant="contained" sx={{ m: 2 }}>
        add feature
      </Button>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex',
          }}>
          <AccessTimeIcon color="action" />
          <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
            Updated 2hr ago
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex',
          }}>
          <GetAppIcon color="action" />
          <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
            {product.totalDownloads} Downloads
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Card>
);

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
