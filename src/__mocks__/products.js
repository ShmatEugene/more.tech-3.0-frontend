import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description: 'table where each row represents a single log event',
    media: '/static/images/products/product_1.png',
    title: 'Spotify Recommendation',
    totalDownloads: '4',
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description: 'table containing all the users created on a single day',
    media: '/static/images/products/product_2.png',
    title: 'fct_users_created',
    totalDownloads: '2',
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    description: 'table containing all the users deleted on a single day',
    media: '/static/images/products/product_3.png',
    title: 'fct_users_deleted',
    totalDownloads: '5',
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'table where each row represents a single log event',
    media: '/static/images/products/product_4.png',
    title: 'logging_events',
    totalDownloads: '2',
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'This dataset contains Covid-19 data of European ountries as on October 09, 2021',
    media: '/static/images/products/product_5.png',
    title: 'Covid-19 in Europe - Latest Data',
    totalDownloads: '3',
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description:
      'This dataset consists of immigrants record from 150+ countries to Canada between 1980 to 2013.',
    media: '/static/images/products/product_6.png',
    title: 'Immigration to Canada',
    totalDownloads: '1',
  },
];
