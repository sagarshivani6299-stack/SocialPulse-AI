import { ArrowUpRight, ArrowRight, CalendarDays, CirclePlay, Lightbulb, Plus, Sparkles, Target } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import MetricCard from '../components/MetricCard';
import AssistantOrb from '../components/AssistantOrb';

const metrics = [
  { label: 'Reach', value: '24.8K', change: '+12.8%' },
  { label: 'Engagement', value: '6.4%', change: '+0.8%' },
  { label: 'Likes', value: '3,240', change: '+9.2%' },
  { label: 'Followers', value: '8,420', change: '+4.6%' }
];
const trend = [
  { day: 'Mon', reach: 1800, likes: 240 }, { day: 'Tue', reach: 2400, likes: 310 },
  { day: 'Wed', reach: 2100, likes: 280 }, { day: 'Thu', reach: 3200, likes: 420 },
  { day: 'Fri', reach: 2900, likes: 390 }, { day: 'Sat', reach: 4100, likes: 540 },
  { day: 'Sun', reach: 4600, likes: 620 }
];

export default function Dashboard() {
  return <div className="page-stack">
    <div className="welcome-row">
      <div><div className="eyebrow">YOUR CREATOR WORKSPACE</div><h1>Good morning, Creator <span>✦</span></h1><p className="muted">Here's your trading content studio at a glance.</p></div>
      <a className="btn-primary" href="/reels"><Plus size={17} /> Create content</a>
    </div>
    <div className="metric-grid">{metrics.map((item, i) => <MetricCard key={item.label} item={item} index={i} />)}</div>
    <div className="dashboard-grid">
      <section className="panel chart-panel">
        <div className="panel-heading"><div><div className="eyebrow">PERFORMANCE OVERVIEW</div><h3>Reach & engagement</h3><p className="muted small">Illustrative trend · last 7 days</p></div><span className="select-pill">Last 7 days ▾</span></div>
        <div className="chart-legend"><span><i className="legend-purple" /> Reach</span><span><i className="legend-pink" /> Likes</span></div>
        <div className="chart-area"><ResponsiveContainer width="100%" height="100%"><AreaChart data={trend}>
          <defs><linearGradient id="reachFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#9470e8" stopOpacity={0.24} /><stop offset="100%" stopColor="#9470e8" stopOpacity={0} /></linearGradient></defs>
          <CartesianGrid stroke="#f0edf7" vertical={false} /><XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#9992a8', fontSize: 12 }} /><YAxis axisLine={false} tickLine={false} tick={{ fill: '#9992a8', fontSize: 11 }} />
          <Tooltip contentStyle={{ border: '1px solid #eee8f8', borderRadius: 12, boxShadow: '0 10px 30px #32205c12' }} />
          <Area type="monotone" dataKey="reach" stroke="#8c68df" strokeWidth={2.8} fill="url(#reachFill)" /><Area type="monotone" dataKey="likes" stroke="#e9a0c8" strokeWidth={2} fill="transparent" />
        </AreaChart></ResponsiveContainer></div>
        <div className="demo-note">ⓘ Sample analytics only — not connected to Instagram.</div>
      </section>
      <section className="assistant-card">
        <div className="assistant-top"><span className="ai-label"><Sparkles size={13} /> PULSE AI</span><span className="live-label"><i /> READY</span></div>
        <AssistantOrb />
        <div className="assistant-text"><h3>Your trading content co-pilot</h3><p>Fresh ideas, hooks and content plans focused on your niche.</p><a href="/assistant" className="text-link">Chat with Pulse AI <ArrowRight size={15} /></a></div>
      </section>
    </div>
    <div className="bottom-grid">
      <section className="panel"><div className="panel-heading"><div><div className="eyebrow">CONTENT MIX</div><h3>Keep your formats balanced</h3></div><a className="text-link" href="/analytics">Details <ArrowUpRight size={14} /></a></div>
        <div className="format-list">
          <div><span className="format-icon reel"><CirclePlay /></span><div className="format-info"><b>Reels</b><small>Discovery & reach</small></div><strong>50%</strong></div><div className="format-bar"><i style={{ width: '50%' }} /></div>
          <div><span className="format-icon photo"><Target /></span><div className="format-info"><b>Carousels & photos</b><small>Education & saves</small></div><strong>35%</strong></div><div className="format-bar pink"><i style={{ width: '35%' }} /></div>
          <div><span className="format-icon promo"><Lightbulb /></span><div className="format-info"><b>Promotions</b><small>Community growth</small></div><strong>15%</strong></div><div className="format-bar gold"><i style={{ width: '15%' }} /></div>
        </div>
      </section>
      <section className="panel quick-panel"><div className="eyebrow">QUICK ACTIONS</div><h3>What would you like to create?</h3>
        <a href="/reels"><span className="quick-icon"><CirclePlay /></span><div><b>New Reel</b><small>Short-form trading education</small></div><ArrowRight /></a>
        <a href="/photos"><span className="quick-icon pink"><Target /></span><div><b>Photo or carousel</b><small>Teach a concept step by step</small></div><ArrowRight /></a>
        <a href="/calendar"><span className="quick-icon gold"><CalendarDays /></span><div><b>Plan your week</b><small>Organise your publishing schedule</small></div><ArrowRight /></a>
      </section>
    </div>
  </div>;
}
