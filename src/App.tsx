import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './components/Homepage';
import { ExploreJourney } from './components/journeys/ExploreJourney';
import { StartJourney } from './components/journeys/StartJourney';
import { IntegrateJourney } from './components/journeys/IntegrateJourney';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/explore" element={<ExploreJourney />} />
          <Route path="/start" element={<StartJourney />} />
          <Route path="/integrate" element={<IntegrateJourney />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;