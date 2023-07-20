import '../App.css';
import { Box, Typography } from '@mui/material';
import Classic from '../components/Classic';
import Navbar from '../components/Navbar';

function ClassicPage() {

  return (
    <div className="App">
      <header className="App-header">
     
        {/* Main View */}
			  <Box style={{ width: '100%' }}>
          <Navbar />
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
