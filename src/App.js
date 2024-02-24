import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ReportPage from './components/ReportPage';

function App() {
  return (
    <Router>
    <Routes>
    {/* <Route exact path="/" component={HomePage} /> */}
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/Report-Page" element={<ReportPage />} />
           {/* Add more routes if necessary */}
    </Routes>
    </Router>
  );
}

export default App;
