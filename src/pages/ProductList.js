import { Helmet } from 'react-helmet';
import { Box, Container, Grid, Pagination } from '@material-ui/core';
import ProductListToolbar from '../components/product/ProductListToolbar';
import ProductCard from '../components/product/ProductCard';
import products from '../__mocks__/products';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const getDatasets = gql`
  query getDatasets {
    search(input: { type: DATASET, query: "a", start: 0, count: 100 }) {
      start
      count
      total
      searchResults {
        entity {
          urn
          type
          ... on Dataset {
            properties {
              description
              externalUrl
            }
            name
            urn
          }
        }
      }
    }
  }
`;

const ProductList = () => {
  const { data, loading } = useQuery(getDatasets);

  const item = data ? data.getItem : null;

  return (
    <>
      {item && !loading ? console.log(data) : null}
      <Helmet>
        <title>Datasets</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3,
        }}>
        <Container maxWidth={false}>
          <ProductListToolbar />
          <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}>
              {products.map((product) => (
                <Grid item key={product.id} lg={4} md={6} xs={12}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pt: 3,
            }}>
            <Pagination color="primary" count={3} size="small" />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ProductList;
