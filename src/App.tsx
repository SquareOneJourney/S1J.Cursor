import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ToastProvider } from './contexts/ToastContext';
import { WorksheetProvider } from './contexts/WorksheetContext';
import { Header } from './components/Header';
import { Homepage } from './components/Homepage';
import { SEODashboard } from './components/seo/SEODashboard';
import { TileJourney } from './components/journeys/TileJourney';
import { ArticlePage } from './components/pages/ArticlePage';
import { ArticlesIndex } from './components/pages/ArticlesIndex';
import { ArticleDetailPage } from './components/pages/ArticleDetailPage';
import { WorksheetPage } from './components/pages/WorksheetPage';
import { PrivacyPolicy } from './components/pages/PrivacyPolicy';
import { TermsAndConditions } from './components/pages/TermsAndConditions';
import { DataProtection } from './components/pages/DataProtection';
import { Disclaimer } from './components/pages/Disclaimer';
import { LoginModal } from './components/auth/LoginModal';
import { SignUpModal } from './components/auth/SignUpModal';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleOpenLogin = () => {
    setIsLoginOpen(true);
    setIsSignUpOpen(false);
  };

  const handleOpenSignUp = () => {
    setIsSignUpOpen(true);
    setIsLoginOpen(false);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };

  const handleCloseSignUp = () => {
    setIsSignUpOpen(false);
  };

  const handleSwitchToSignUp = () => {
    setIsLoginOpen(false);
    setIsSignUpOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsSignUpOpen(false);
    setIsLoginOpen(true);
  };

  return (
    <AuthProvider>
      <ToastProvider>
        <WorksheetProvider>
          <Router>
            <div className="min-h-screen" style={{ backgroundColor: '#f2f1f0' }}>
              <Header 
                onOpenLogin={handleOpenLogin}
                onOpenSignUp={handleOpenSignUp}
              />
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/seo" element={<SEODashboard />} />
                <Route path="/start" element={<TileJourney />} />
                <Route path="/articles" element={<ArticlesIndex />} />
                <Route path="/articles/:slug" element={<ArticleDetailPage />} />
                <Route path="/article/:id" element={<ArticlePage />} />
                <Route path="/worksheet" element={<WorksheetPage />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsAndConditions />} />
                <Route path="/data-protection" element={<DataProtection />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
              </Routes>
              
              {/* Auth Modals */}
              <LoginModal 
                isOpen={isLoginOpen}
                onClose={handleCloseLogin}
                onSwitchToSignUp={handleSwitchToSignUp}
              />
              <SignUpModal 
                isOpen={isSignUpOpen}
                onClose={handleCloseSignUp}
                onSwitchToLogin={handleSwitchToLogin}
              />
            </div>
          </Router>
        </WorksheetProvider>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;