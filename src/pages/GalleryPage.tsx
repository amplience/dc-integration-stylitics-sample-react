import '../App.css';
import { Box, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import ContentBlock from '../components/ContentBlock';

function GalleryPage() {
  return (
    <div className="App">
      <header className="App-header">
     
        {/* Main View */}
			  <Box style={{ width: '100%' }}>
          <Navbar />
        </Box>
        <Box sx={{ width: '100%', flexGrow: 1, textAlign: 'left', pb: 4, pt: 2, pl: 4 }}>
          <Typography>Stylitics Gallery Widget</Typography>
          <ContentBlock request={{key: 'stylitics/gallery-example'}} />
        </Box>
      </header>
    </div>
  );
}

export default GalleryPage;