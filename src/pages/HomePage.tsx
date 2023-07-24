import '../App.css';
import { Box, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import ContentBlock from '../components/ContentBlock';

function Home() {

  return (
    <div className="App">
      <header className="App-header">
     
        {/* Main View */}
			  <Box style={{ width: '100%' }}>
          <Navbar />
        </Box>
        <Box sx={{ width: '100%', flexGrow: 1, textAlign: 'left', pb: 4, pt: 2, pl: 4 }}>
          <Box sx={{pb: 4}}>
            <Typography>Stylitics Classic Widget</Typography>
            <ContentBlock request={{key: 'stylitics/classic-example'}} />
          </Box>
          <Box sx={{pb: 4}}>
            <Typography>Stylitics Hotspots Widget</Typography>
            <ContentBlock request={{key: 'stylitics/hotspots-example'}} />
          </Box>
          <Box sx={{pb: 4}}>
            <Typography>Stylitics Hotspots Widget</Typography>
            <ContentBlock request={{key: 'stylitics/hotspots-example-2'}} />
          </Box>
          <Box sx={{pb: 4}}>
            <Typography>Stylitics Moodboard Widget</Typography>
            <ContentBlock request={{key: 'stylitics/moodboard-example'}} />
          </Box>
          <Box sx={{pb: 4}}>
            <Typography>Stylitics Main and Detail Widget</Typography>
            <ContentBlock request={{key: 'stylitics/main-and-detail-example'}} />
          </Box>
          <Box sx={{pb: 4}}>
            <Typography>Stylitics Gallery Widget</Typography>
            <ContentBlock request={{key: 'stylitics/gallery-example'}} />
          </Box>
        </Box>
      </header>
    </div>
  );
}

export default Home;
