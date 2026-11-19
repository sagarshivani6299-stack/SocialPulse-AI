import { Bell, Menu, Search, ExternalLink } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const titles = {
  '/dashboard': 'Overview', '/reels': 'Reels Studio', '/photos': 'Photo Studio',
  '/promotions': 'Promotions', '/analytics': 'Growth Analytics',
  '/assistant': 'Pulse AI Assistant', '/calendar': 'Content Calendar', '/settings': 'Settings'
};

export default function Topbar({ onMenu }) {
  const location = useLocation();
  return <header className="topbar">
    <button className="icon-btn menu-btn" onClick={onMenu}><Menu /></button>
    <div className="crumb">Workspace <span>/</span> <b>{titles[location.pathname] || 'Studio'}</b></div>
    <div className="top-actions">
      <div className="top-search"><Search size={16} /><input placeholder="Search your studio…" /></div>
      <button className="icon-btn notification"><Bell size={18} /><i /></button>
      <a className="profile-chip" href="https://www.instagram.com/tra_dingchamp/" target="_blank" rel="noreferrer">
        <div className="avatar">TC</div><div><b>@tra_dingchamp</b><small>Instagram Creator</small></div><ExternalLink size={13} />
      </a>
    </div>
  </header>;
}
