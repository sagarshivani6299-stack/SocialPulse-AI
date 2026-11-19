import { useAuth } from '../auth/AuthContext';
import { ExternalLink, Instagram, LogOut, ShieldCheck, Info } from 'lucide-react';

export default function Settings() {
  const { user, logout } = useAuth();
  return <div className="page-stack">
    <div className="page-intro"><div className="eyebrow">YOUR WORKSPACE</div><h1>Settings</h1><p className="muted">Manage your demo creator workspace.</p></div>
    <section className="panel settings-card">
      <div className="settings-icon"><Instagram /></div>
      <div className="settings-main"><div className="eyebrow">INSTAGRAM CREATOR PROFILE</div><h3>@tra_dingchamp</h3><p className="muted">Your profile link is saved for reference. This frontend-only demo does not connect to Instagram.</p><span className="connection-status"><Info size={16} /> Not connected · Demo mode</span></div>
      <a className="btn-outline" href="https://www.instagram.com/tra_dingchamp/" target="_blank" rel="noreferrer">Open profile <ExternalLink size={14} /></a>
    </section>
    <section className="panel settings-card">
      <div className="settings-icon soft"><ShieldCheck /></div>
      <div className="settings-main"><div className="eyebrow">DEMO SESSION</div><h3>Signed in as {user?.username || 'creator'}</h3><p className="muted">Login state is stored in LocalStorage. This is a client-side demo gate, not production-grade authentication.</p><span className="connection-status"><ShieldCheck size={16} /> Protected routes enabled</span></div>
      <button className="btn-outline" onClick={logout}><LogOut size={15} /> Log out</button>
    </section>
  </div>;
}
