import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layouts/Layout';
import Fish from './pages/Fish';
import './reset.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="fish" element={<Fish/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
