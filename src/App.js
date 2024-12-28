import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Input from './pages/Input';
import Recommendation from './pages/Recommendation';

const App = () => (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/input" element={<Input />} />
            <Route path="/recommendations" element={<Recommendation />} />
        </Routes>
    </Router>
);

export default App;
