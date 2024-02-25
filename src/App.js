import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ReportPage from './components/ReportPage';

function App() {
  return (
    <div>
    <Router>
    <Routes>
    {/* <Route exact path="/" component={HomePage} /> */}
    <Route path="/home" element={<HomePage />}></Route>
    <Route path="/Report-Page" element={<ReportPage />} />
           {/* Add more routes if necessary */}
    </Routes>
    </Router>
    <footer class="bg-body-tertiary text-center text-lg-start">

<div class="text-center p-1" style={{"background-color": "rgba(0, 0, 0, 0.05)"}}>
    © 2024 Copyright:
    <a class="text-body" href="https://mdbootstrap.com/">MedEZ.com</a>
</div>

</footer>
    </div>

  );
}

export default App;
