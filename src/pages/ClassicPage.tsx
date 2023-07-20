import '../App.css';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Classic from '../components/Classic';

function ClassicPage() {

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
          <Typography>Stylitics Classic Widget</Typography>
          <Classic />
        </Box>
      </header>
    </div>
  );
}

export default ClassicPage;
