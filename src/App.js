import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { StyledEngineProvider } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import GlobalStyles from './components/GlobalStyles';
import theme from './theme';
import routes from './routes';

const App = () => {
  const content = useRoutes(routes);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {content}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
