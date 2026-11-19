import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Activity, ArrowRight, Eye, EyeOff, LockKeyhole, UserRound, ShieldCheck, Sparkles } from 'lucide-react';
import { useAuth } from '../auth/AuthContext';

export default function Login() {
  const { user, login } = useAuth();
  const [username, setUsername] = useState('creator');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  if (user) return <Navigate to="/dashboard" replace />;

  const submit = async (event) => {
    event.preventDefault(); setError(''); setBusy(true);
    try { await login(username, password); }
    catch (err) { setError(err.message); }
    finally { setBusy(false); }
  };

  return <main className="login-page">
    <section className="login-art">
      <div className="login-brand"><div className="brand-icon"><Activity /></div><b>SocialPulse<span>AI</span></b></div>
      <div className="art-copy">
        <div className="eyebrow light">YOUR CREATOR COMMAND CENTER</div>
        <h1>Turn your trading knowledge into <em>meaningful growth.</em></h1>
        <p>Plan smarter content, create educational posts and understand what your audience loves.</p>
        <div className="art-stats"><div><b>01</b><span>Plan</span></div><div><b>02</b><span>Create</span></div><div><b>03</b><span>Grow</span></div></div>
      </div>
      <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
      <div className="login-art-foot"><Sparkles size={15} /> Built for creators who teach trading responsibly</div>
    </section>
    <section className="login-form-side">
      <div className="login-card">
        <div className="login-mobile-brand"><div className="brand-icon"><Activity /></div><b>SocialPulse<span>AI</span></b></div>
        <div className="login-icon"><LockKeyhole size={22} /></div>
        <div className="eyebrow">WELCOME BACK</div><h2>Sign in to your studio</h2>
        <p className="muted">Your content strategy is waiting for you.</p>
        <form onSubmit={submit}>
          <label>Username</label>
          <div className="login-input"><UserRound size={17} /><input value={username} onChange={e => setUsername(e.target.value)} autoComplete="username" required /></div>
          <label>Password</label>
          <div className="login-input"><LockKeyhole size={17} /><input type={show ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} autoComplete="current-password" placeholder="Enter your password" required /><button type="button" className="reveal" onClick={() => setShow(!show)}>{show ? <EyeOff size={17} /> : <Eye size={17} />}</button></div>
          {error && <div className="error-box">{error}</div>}
          <button className="btn-primary login-submit" disabled={busy}>{busy ? 'Signing in…' : 'Sign in'} <ArrowRight size={17} /></button>
        </form>
        <div className="secure-note"><ShieldCheck size={15} /> Demo workspace · Protected navigation</div>
        <div className="login-footer">SOCIALPULSE AI <span>•</span> TRADING CREATOR EDITION</div>
      </div>
    </section>
  </main>;
}
