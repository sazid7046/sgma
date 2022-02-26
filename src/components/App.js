import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './ui/theme';
import Header from './ui/Header';

import Home from '../pages/Home/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
       <BrowserRouter>
       <Header/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
          </Routes>
        </BrowserRouter>
    </ThemeProvider>
   
  );
}

export default App;
