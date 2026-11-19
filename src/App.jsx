import { Navigate, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { AuthProvider, useAuth } from './auth/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import { Reels, Photos, Promotions, Analytics, Assistant, Calendar } from './pages/StudioPages';

function Shell() {
  const [menu, setMenu] = useState(false);
  return <div className="app-shell">
    <Sidebar open={menu} onClose={() => setMenu(false)} />
    <div className="main-column">
      <Topbar onMenu={() => setMenu(true)} />
      <main className="main-content"><Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/assistant" element={<Assistant />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes></main>
      <footer className="app-footer">© 2026 SocialPulse AI <span>Frontend-only trading creator demo</span></footer>
    </div>
  </div>;
}

function AppRoutes() {
  const { user } = useAuth();
  return <Routes>
    <Route path="/login" element={user ? <Navigate to="/dashboard" replace /> : <Login />} />
    <Route element={<ProtectedRoute />}><Route path="/*" element={<Shell />} /></Route>
  </Routes>;
}

export default function App() {
  return <AuthProvider><AppRoutes /></AuthProvider>;
}
