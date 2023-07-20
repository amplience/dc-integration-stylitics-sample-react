import '../App.css';
import { Box, Typography } from '@mui/material';
import Moodboard from '../components/Moodboard';
import Navbar from '../components/Navbar';

function MoodboardPage() {
  return (
    <div className="App">
      <header className="App-header">
     
        {/* Main View */}
			  <Box style={{ width: '100%' }}>
          <Navbar />
        </Box>
        <Box sx={{ width: '100%', flexGrow: 1, textAlign: 'left', pb: 4, pt: 2, pl: 4 }}>
          <Typography>Stylitics Moodboard Widget</Typography>
          <Moodboard />
        </Box>
      </header>
    </div>
  );
}

export default MoodboardPage;