import '../App.css';
import { Box, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import ContentBlock from '../components/ContentBlock';
import { useLocation } from 'react-router-dom';

function VisPage() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <div className="App">
      <header className="App-header">
     
        {/* Main View */}
			  <Box style={{ width: '100%' }}>
          <Navbar />
        </Box>
        <Box sx={{ width: '100%', flexGrow: 1, textAlign: 'left', pb: 4, pt: 2, pl: 4 }}>
          <Typography>Stylitics Visualization</Typography>
          <ContentBlock request={{id: query.get('id') || ''}} params={{locale: query.get('locale') ?? undefined}} />
        </Box>
      </header>
    </div>
  );
}

export default VisPage;
