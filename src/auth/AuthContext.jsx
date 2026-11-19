import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

// Demo-only credentials. Change these before sharing the project.
const DEMO_USERNAME = 'creator';
const DEMO_PASSWORD = 'Creator@2026';
const SESSION_KEY = 'socialpulse_demo_session';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null'); }
    catch { return null; }
  });

  const login = async (username, password) => {
    if (username !== DEMO_USERNAME || password !== DEMO_PASSWORD) {
      throw new Error('Incorrect username or password. Please try again.');
    }
    const session = { username: DEMO_USERNAME, signedInAt: new Date().toISOString() };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);
  };

  const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
