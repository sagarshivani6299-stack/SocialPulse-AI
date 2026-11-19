
import { NavLink } from 'react-router-dom';
import {
  Activity, BarChart3, Bot, CalendarDays, Camera, Clapperboard,
  LayoutDashboard, Megaphone, Settings, Sparkles, X
} from 'lucide-react';

const links = [
  ['Overview', '/dashboard', LayoutDashboard],
  ['Reels Studio', '/reels', Clapperboard],
  ['Photo Studio', '/photos', Camera],
  ['Promotions', '/promotions', Megaphone],
  ['Analytics', '/analytics', BarChart3],
  ['AI Assistant', '/assistant', Bot],
  ['Content Calendar', '/calendar', CalendarDays],
  ['Settings', '/settings', Settings]
];

export default function Sidebar({ open, onClose }) {
  return (
    <>
      <div
        className={`mobile-shade ${open ? 'show' : ''}`}
        onClick={onClose}
      />

      <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
        <div className="brand">
          <div className="brand-icon">
            <Activity size={21} />
          </div>

          <div>
            <b>SocialPulse<span>AI</span></b>
            <small>CREATOR STUDIO</small>
          </div>

          <button
            className="icon-btn mobile-close"
            onClick={onClose}
          >
            <X />
          </button>
        </div>

        <div className="workspace-label">WORKSPACE</div>

        <nav>
          {links.map(([label, to, Icon]) => (
            <NavLink
              key={to}
              to={to}
              onClick={onClose}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              <Icon size={18} />
              <span>{label}</span>

              {label === 'AI Assistant' && (
                <i className="new-pill">
                  <Sparkles size={11} /> AI
                </i>
              )}
            </NavLink>
          ))}
        </nav>

<div className="sidebar-bottom">
  <div className="niche-card">
    <div className="niche-icon">
      <Sparkles size={17} />
    </div>

    <div className="niche-info">
      <b>Trading Creator</b>
      <div className="niche-status">
        <span className="online-dot" />
        <span>Active</span>
      </div>
    </div>
  </div>

  <div className="sidebar-foot">
    <span>SOCIALPULSE AI</span>
    <span className="demo-label">DEMO</span>
  </div>
</div>

      </aside>
    </>
  );
}
