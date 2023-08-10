import '../App.css';
import { Box } from '@mui/material';
import ContentBlock from '../components/ContentBlock';
import { useLocation } from 'react-router-dom';

function VisPage() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <div className="App">
      <Box sx={{ width: '100%', flexGrow: 1, textAlign: 'left', pb: 4, pt: 2, pl: 4 }}>
        <ContentBlock request={{id: query.get('id') || ''}} params={{locale: query.get('locale') ?? undefined}} />
      </Box>
    </div>
  );
}

export default VisPage;
