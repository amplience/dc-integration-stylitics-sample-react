import '../App.css';
import { Box, Typography } from '@mui/material';
import Hotspots from '../components/Hotspots';
import Navbar from '../components/Navbar';

function HotspotsPage() {
  return (
    <div className="App">
      <header className="App-header">
     
        {/* Main View */}
			  <Box style={{ width: '100%' }}>
          <Navbar />
        </Box>
        <Box sx={{ width: '100%', flexGrow: 1, textAlign: 'left', pb: 4, pt: 2, pl: 4 }}>
          <Typography>Stylitics Hotspots Widget</Typography>
          <Hotspots />
        </Box>
      </header>
    </div>
  );
}

export default HotspotsPage;