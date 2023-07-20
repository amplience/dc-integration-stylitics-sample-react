import '../App.css';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Classic from '../components/Classic';
import Hotspots from '../components/Hotspots';
import MainAndDetail from '../components/MainAndDetail';
import Moodboard from '../components/Moodboard';
import Gallery from '../components/Gallery';

function Home() {

  return (
    <div className="App">
      <header className="App-header">
     
        {/* Main View */}
			  <Box style={{ width: '100%' }}>
          <AppBar position='sticky'>
            <Toolbar variant='dense'>
            <Typography variant='h6' color='inherit' component='div'>
              Amplience Stylitics React Sample
            </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <Box sx={{ width: '100%', flexGrow: 1, textAlign: 'left', pb: 4, pt: 2, pl: 4 }}>
          <Box sx={{pb: 4}}>
            <Typography>Stylitics Classic Widget</Typography>
            <Classic />
          </Box>
          <Box sx={{pb: 4}}>
            <Typography>Stylitics Hotspots Widget</Typography>
            <Hotspots />
          </Box>
          <Box sx={{pb: 4}}>
            <Typography>Stylitics Moodboard Widget</Typography>
            <Moodboard />
          </Box>
          <Box sx={{pb: 4}}>
            <Typography>Stylitics Main and Detail Widget</Typography>
            <MainAndDetail />
          </Box>
          <Box sx={{pb: 4}}>
            <Typography>Stylitics Gallery Widget</Typography>
            <Gallery />
          </Box>
        </Box>
      </header>
    </div>
  );
}

export default Home;
