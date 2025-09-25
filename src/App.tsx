import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WorksheetProvider } from './contexts/WorksheetContext';
import { ToastProvider } from './contexts/ToastContext';
import { AuthProvider } from './contexts/AuthContext';
import { Header } from './components/Header';
import { Homepage } from './components/Homepage';
import { TileJourney } from './components/journeys/TileJourney';
import { WorksheetPage } from './components/pages/WorksheetPage';
import { MarketingResearchWithoutAI } from './components/pages/ArticlePage';
import { ExploreJourney } from './components/journeys/ExploreJourney';
import { StartJourney } from './components/journeys/StartJourney';
import { LoginModal } from './components/auth/LoginModal';
import { SignUpModal } from './components/auth/SignUpModal';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  return (
    <ToastProvider>
      <AuthProvider>
        <WorksheetProvider>
          <Router>
            <div className="min-h-screen">
              <Header 
                onOpenLogin={() => setIsLoginModalOpen(true)}
                onOpenSignUp={() => setIsSignUpModalOpen(true)}
              />
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/explore" element={<TileJourney />} />
                <Route path="/start" element={<TileJourney />} />
                <Route path="/worksheet" element={<WorksheetPage />} />
                <Route path="/article/marketing-research-without-ai" element={<MarketingResearchWithoutAI />} />
                {/* Legacy routes for backward compatibility */}
                <Route path="/explore-legacy" element={<ExploreJourney />} />
                <Route path="/start-legacy" element={<StartJourney />} />
              </Routes>
            </div>
          </Router>
          
          {/* Auth Modals - Rendered at root level */}
          <LoginModal
            isOpen={isLoginModalOpen}
            onClose={() => setIsLoginModalOpen(false)}
            onSwitchToSignUp={() => {
              setIsLoginModalOpen(false);
              setIsSignUpModalOpen(true);
            }}
          />
          <SignUpModal
            isOpen={isSignUpModalOpen}
            onClose={() => setIsSignUpModalOpen(false)}
            onSwitchToLogin={() => {
              setIsSignUpModalOpen(false);
              setIsLoginModalOpen(true);
            }}
          />
        </WorksheetProvider>
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;