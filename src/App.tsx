import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ToastProvider } from './contexts/ToastContext';
import { WorksheetProvider } from './contexts/WorksheetContext';
import { Header } from './components/Header';
import { Homepage } from './components/Homepage';
import { SEODashboard } from './components/seo/SEODashboard';
import { TileJourney } from './components/journeys/TileJourney';
import { ArticlePage } from './components/pages/ArticlePage';
import { WorksheetPage } from './components/pages/WorksheetPage';
import { PrivacyPolicy } from './components/pages/PrivacyPolicy';
import { TermsAndConditions } from './components/pages/TermsAndConditions';
import { DataProtection } from './components/pages/DataProtection';
import { Disclaimer } from './components/pages/Disclaimer';

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <WorksheetProvider>
          <Router>
            <div className="min-h-screen" style={{ backgroundColor: '#f2f1f0' }}>
              <Header />
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/seo" element={<SEODashboard />} />
                <Route path="/start" element={<TileJourney />} />
                <Route path="/article/:id" element={<ArticlePage />} />
                <Route path="/worksheet" element={<WorksheetPage />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsAndConditions />} />
                <Route path="/data-protection" element={<DataProtection />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
              </Routes>
            </div>
          </Router>
        </WorksheetProvider>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;