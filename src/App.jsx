import { Route, Routes } from 'react-router-dom';
import { Box, createTheme, ThemeProvider } from '@mui/material';

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import ExercisesDetail from './pages/ExercisesDetail';

const theme = createTheme({
  typography: {
    fontFamily: 'Aleo',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box width={'400px'} sx={{ width: { xl: '1488px' } }} m='auto'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exercise/:id' element={<ExercisesDetail />} />
        </Routes>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
