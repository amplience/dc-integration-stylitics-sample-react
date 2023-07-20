import '../App.css';
import { Box, Typography } from '@mui/material';
import Generic from '../components/Generic';
import Navbar from '../components/Navbar';

function GenericPage() {

  return (
    <div className="App">
      <header className="App-header">
     
        {/* Main View */}
			  <Box style={{ width: '100%' }}>
          <Navbar />
        </Box>
        <Box sx={{ width: '100%', flexGrow: 1, textAlign: 'left', pb: 4, pt: 2, pl: 4 }}>
          <Typography>Stylitics Generic Widget</Typography>
          <Generic />
        </Box>
      </header>
    </div>
  );
}

export default GenericPage;
