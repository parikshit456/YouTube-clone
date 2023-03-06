import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Box } from '@mui/system';
import {Navbar,Feed,VideoDetail,ChannelDetail,SearchFeed} from './component';


function App() {
  return (
    <div className="App">
      <Router>
        <Box sx={{backgroundColor:"#000"}}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />


        </Routes>
        </Box>
      </Router>
    </div>
  );
}

export default App;
