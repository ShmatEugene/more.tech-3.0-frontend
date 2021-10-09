import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const orders = [
  {
    id: uuid(),
    ref: 'id',
    amount: 30.5,
    customer: {
      name: 'Spotify URI of the song',
    },
    createdAt: '100 unique values',
  },
  {
    id: uuid(),
    ref: 'name',
    amount: 25.1,
    customer: {
      name: 'Name of the song',
    },
    createdAt: '100 unique values',
  },
  {
    id: uuid(),
    ref: 'artists',
    amount: 10.99,
    customer: {
      name: 'Artist(s) of the song',
    },
    createdAt: 'XXXTENTACION 6% Post Malone 6%',
  },
  {
    id: uuid(),
    ref: 'danceability',
    amount: 96.43,
    customer: {
      name: 'Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo.',
    },
    createdAt: 'numbers in range (0.26, 0.96)',
  },
  {
    id: uuid(),
    ref: 'energy',
    amount: 32.54,
    customer: {
      name: 'Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks',
    },
    createdAt: 'numbers in range (0.3, 0.91)',
  },
  {
    id: uuid(),
    ref: 'key',
    amount: 16.76,
    customer: {
      name: 'The key the track is in. Integers map to pitches using standard Pitch Class notation. E.g. 0 = C, 1 = C♯/D♭, 2 = D',
    },
    createdAt: 'numbers in range (0, 11)',
  },
];

const LatestOrders = (props) => (
  <Card {...props}>
    <CardHeader title="Metadata" />
    <Divider />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Field</TableCell>
              <TableCell>Description</TableCell>
              <TableCell sortDirection="desc">
                <Tooltip enterDelay={300} title="Sort">
                  <TableSortLabel active direction="desc">
                    Data
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow hover key={order.id}>
                <TableCell>{order.ref}</TableCell>
                <TableCell>{order.customer.name}</TableCell>
                <TableCell>{order.createdAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2,
      }}>
      <Button color="primary" endIcon={<ArrowRightIcon />} size="small" variant="text">
        View all
      </Button>
    </Box>
  </Card>
);

export default LatestOrders;
