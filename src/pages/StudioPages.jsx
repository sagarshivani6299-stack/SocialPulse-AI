import { useState } from 'react';
import { CalendarDays, CheckCircle2, Lightbulb, Megaphone, MessageCircle, Send, Sparkles, TrendingUp } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar, BarChart } from 'recharts';
import PublishForm from '../components/PublishForm';
import AssistantOrb from '../components/AssistantOrb';

const PageIntro = ({ eyebrow, title, desc }) => <div className="page-intro"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p className="muted">{desc}</p></div>;
const Checklist = ({ items }) => <div className="checklist">{items.map(x => <label key={x}><input type="checkbox" /><span>{x}</span></label>)}</div>;

export function Reels() {
  return <div className="page-stack">
    <PageIntro eyebrow="SHORT-FORM VIDEO" title="Reels Studio" desc="Create educational trading Reels designed to teach, engage and build trust." />
    <div className="feature-banner"><div><span className="ai-label"><Sparkles size={13} /> CREATOR WORKFLOW</span><h2>Make every second teach something.</h2><p>Lead with a clear hook, explain one trading concept and close with a responsible reminder.</p></div><div className="banner-play">▶</div></div>
    <div className="two-col">
      <PublishForm type="REELS" title="Create a Reel draft" />
      <section className="panel"><div className="eyebrow">REEL CHECKLIST</div><h3>Before you publish</h3><Checklist items={['Strong first 2-second hook', 'One clear educational takeaway', 'Readable on-screen text and captions', 'Vertical 9:16 video format', 'No guaranteed-profit claims', 'Risk disclaimer included', 'Cover frame is clear and branded']} /><div className="tip-box"><Lightbulb size={17} /><span><b>Creator tip</b> Build a repeatable series such as “Trading Basics in 30 Seconds”.</span></div></section>
    </div>
  </div>;
}

export function Photos() {
  return <div className="page-stack">
    <PageIntro eyebrow="STATIC & CAROUSEL CONTENT" title="Photo Studio" desc="Turn complex trading concepts into simple, save-worthy visual lessons." />
    <div className="two-col"><PublishForm type="IMAGE" title="Create a photo draft" /><PublishForm type="CAROUSEL" title="Create a carousel draft" /></div>
    <section className="panel"><div className="eyebrow">CAROUSEL BLUEPRINT</div><h3>Teach one concept across 5 slides</h3><div className="slide-blueprint">{['Hook', 'The concept', 'A simple example', 'Common mistake', 'Key takeaway'].map((x, i) => <div key={x}><b>0{i + 1}</b><span>{x}</span></div>)}</div></section>
  </div>;
}

export function Promotions() {
  return <div className="page-stack">
    <PageIntro eyebrow="CAMPAIGN PLANNING" title="Promotions" desc="Plan ethical creator campaigns and grow a relevant trading education community." />
    <div className="metric-grid promo-metrics">{[{ label: 'Campaign drafts', value: '03', change: 'Planning' }, { label: 'Planned budget', value: '₹2,500', change: 'Example plan' }, { label: 'Target audience', value: 'Trading learners', change: 'India' }].map((x, i) => <div className="metric-card" key={i}><div className="metric-top"><span>{x.label}</span><Megaphone size={18} /></div><div className="metric-value smaller">{x.value}</div><div className="metric-bottom">{x.change}</div></div>)}</div>
    <div className="two-col">
      <section className="panel"><div className="eyebrow">CAMPAIGN IDEA</div><h3>Promote an educational series</h3><p className="muted">Example planning brief — not a live ad campaign.</p><div className="campaign-block"><b>Campaign</b><h2>Trading Foundations Week</h2><p>Promote a free, beginner-friendly series about risk, chart basics and trading discipline.</p><div className="tag-row"><span>Education</span><span>Beginner audience</span><span>7 days</span></div></div><Checklist items={['Define the learning outcome', 'Prepare 3–5 educational creatives', 'Choose audience and placement in Meta Ads Manager', 'Set a daily budget you can afford', 'Review results without promising returns']} /></section>
      <section className="panel"><div className="eyebrow">PROMOTION SAFETY</div><h3>Build trust, not hype</h3><div className="safety-list"><p><CheckCircle2 /> Clearly label paid partnerships and sponsored posts.</p><p><CheckCircle2 /> Avoid guaranteed returns or misleading performance claims.</p><p><CheckCircle2 /> Do not imply a risk-free trading strategy.</p><p><CheckCircle2 /> Follow Meta ad policies and applicable financial promotion rules.</p></div><div className="tip-box"><Megaphone size={17} /><span>This page is a campaign planner. It does not create ads or spend money.</span></div></section>
    </div>
  </div>;
}

const analyticsData = [
  { day: 'Mon', reach: 1800, likes: 240, saves: 32 }, { day: 'Tue', reach: 2400, likes: 310, saves: 46 },
  { day: 'Wed', reach: 2100, likes: 280, saves: 39 }, { day: 'Thu', reach: 3200, likes: 420, saves: 58 },
  { day: 'Fri', reach: 2900, likes: 390, saves: 53 }, { day: 'Sat', reach: 4100, likes: 540, saves: 79 },
  { day: 'Sun', reach: 4600, likes: 620, saves: 91 }
];
export function Analytics() {
  return <div className="page-stack">
    <PageIntro eyebrow="MEASURE WHAT MATTERS" title="Growth Analytics" desc="Explore sample performance metrics and understand what to measure for each content format." />
    <div className="notice">Demo analytics only — this frontend-only project does not connect to Instagram Insights.</div>
    <div className="metric-grid">{[{ label: 'Reach', value: '24.8K', change: '+12.8%' }, { label: 'Likes', value: '3,240', change: '+9.2%' }, { label: 'Saves', value: '486', change: '+18.4%' }, { label: 'Shares', value: '212', change: '+7.1%' }].map((x, i) => <div className="metric-card" key={i}><div className="metric-top"><span>{x.label}</span><TrendingUp /></div><div className="metric-value">{x.value}</div><div className="growth">{x.change}</div></div>)}</div>
    <div className="two-col">
      <section className="panel"><div className="eyebrow">WEEKLY REACH</div><h3>Audience discovery</h3><div className="chart-area"><ResponsiveContainer width="100%" height="100%"><AreaChart data={analyticsData}><defs><linearGradient id="analyticsFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#9470e8" stopOpacity={0.25} /><stop offset="100%" stopColor="#9470e8" stopOpacity={0} /></linearGradient></defs><CartesianGrid stroke="#f0edf7" vertical={false} /><XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#9992a8', fontSize: 11 }} /><YAxis axisLine={false} tickLine={false} tick={{ fill: '#9992a8', fontSize: 10 }} /><Tooltip /><Area dataKey="reach" stroke="#8c68df" fill="url(#analyticsFill)" strokeWidth={2.5} /></AreaChart></ResponsiveContainer></div></section>
      <section className="panel"><div className="eyebrow">ENGAGEMENT SIGNALS</div><h3>Likes & saves</h3><div className="chart-area"><ResponsiveContainer width="100%" height="100%"><BarChart data={analyticsData}><CartesianGrid stroke="#f0edf7" vertical={false} /><XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#9992a8', fontSize: 11 }} /><YAxis axisLine={false} tickLine={false} tick={{ fill: '#9992a8', fontSize: 10 }} /><Tooltip /><Bar dataKey="likes" fill="#a88ae8" radius={[5, 5, 0, 0]} /><Bar dataKey="saves" fill="#e9a0c8" radius={[5, 5, 0, 0]} /></BarChart></ResponsiveContainer></div></section>
    </div>
    <section className="panel"><div className="eyebrow">FORMAT-SPECIFIC METRICS</div><h3>Compare content fairly</h3><div className="analytics-rows"><div><b>Reels</b><span>Reach · Plays · Average watch time · Shares</span></div><div><b>Photos</b><span>Reach · Likes · Saves · Profile activity</span></div><div><b>Carousels</b><span>Reach · Saves · Shares · Slide retention</span></div></div></section>
  </div>;
}

const ideaBank = [
  { title: 'The 1% Risk Rule', format: 'Reel', hook: 'One simple risk rule every beginner should understand', outline: ['Explain position risk in plain language', 'Show a hypothetical ₹10,000 example', 'Remind viewers that losses are possible'] },
  { title: 'Support vs Resistance', format: 'Carousel', hook: 'Why does price react around these levels?', outline: ['Define support', 'Define resistance', 'Show a hypothetical chart example', 'Explain common false-breakout mistakes'] },
  { title: 'Trading Journal Basics', format: 'Photo', hook: 'Your most useful trading tool might be a simple journal', outline: ['Entry reason', 'Risk plan', 'Outcome and lesson'] },
  { title: 'Emotional Trading', format: 'Reel', hook: 'Three signs emotion is controlling your decisions', outline: ['Revenge trading', 'Moving a stop without a plan', 'Taking trades out of boredom'] }
];
export function Assistant() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{ role: 'assistant', text: 'Hi! I’m Pulse AI, your trading content strategist. Ask me for a Reel hook, carousel outline, educational caption or weekly content plan. I only suggest trading and finance education content.' }]);
  const [busy, setBusy] = useState(false);
  const send = (prompt) => {
    const question = (prompt ?? input).trim();
    if (!question || busy) return;
    setMessages(current => [...current, { role: 'user', text: question }]);
    setInput(''); setBusy(true);
    window.setTimeout(() => {
      const lower = question.toLowerCase();
      const match = ideaBank.find(x => x.title.toLowerCase().split(' ').some(word => word.length > 4 && lower.includes(word)));
      const idea = match || ideaBank[(question.length + question.charCodeAt(0)) % ideaBank.length];
      const reply = `Here’s a trading-focused content idea:\n\n**${idea.title}** · ${idea.format}\n\n**Hook:** ${idea.hook}\n\n**Outline:**\n${idea.outline.map((x, i) => `${i + 1}. ${x}`).join('\n')}\n\n**Caption reminder:** Keep the content educational and avoid guaranteed-return claims. Add: “For educational purposes only. Trading involves risk.”`;
      setMessages(current => [...current, { role: 'assistant', text: reply }]);
      setBusy(false);
    }, 650);
  };
  const prompts = ['Give me 5 beginner trading Reel ideas', 'Create a support and resistance carousel', 'Write a risk-management caption', 'Plan 7 days of trading education content'];
  return <div className="page-stack">
    <PageIntro eyebrow="YOUR NICHE-SPECIFIC CO-PILOT" title="Pulse AI Assistant" desc="A trading education content partner. Suggestions stay within your selected niche." />
    <div className="demo-warning">Local AI demo · No external AI service is being called. Responses come from built-in trading content templates.</div>
    <div className="chat-layout">
      <section className="panel chat-panel">
        <div className="chat-head"><div className="chat-avatar"><Sparkles /></div><div><b>Pulse AI</b><small><i /> Trading Content Specialist</small></div><span className="ai-label">LOCAL AI</span></div>
        <div className="chat-messages">{messages.map((m, i) => <div key={i} className={`chat-message ${m.role}`}><div className="message-avatar">{m.role === 'assistant' ? <Sparkles size={15} /> : 'You'}</div><div className="message-bubble">{m.text.split('\n').map((line, j) => <p key={j}>{line || '\u00a0'}</p>)}</div></div>)}{busy && <div className="typing">Pulse AI is thinking…</div>}</div>
        <form className="chat-compose" onSubmit={e => { e.preventDefault(); send(); }}><input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask for a trading content idea…" /><button className="btn-primary" disabled={busy}><Send size={16} /></button></form>
      </section>
      <aside className="panel chat-side"><AssistantOrb /><h3>Ideas that fit your niche</h3><p className="muted small">Try one of these prompts.</p>{prompts.map(p => <button key={p} className="prompt-chip" onClick={() => send(p)}>{p}<MessageCircle size={14} /></button>)}<div className="tip-box"><Lightbulb size={17} /><span>Review all financial content for accuracy before posting. Never promise profits.</span></div></aside>
    </div>
  </div>;
}

export function Calendar() {
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem('spai_calendar') || '[]'));
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const add = e => {
    e.preventDefault(); if (!title || !date) return;
    const next = [...items, { id: Date.now(), title, date }].sort((a, b) => a.date.localeCompare(b.date));
    setItems(next); localStorage.setItem('spai_calendar', JSON.stringify(next)); setTitle(''); setDate('');
  };
  const remove = id => { const next = items.filter(x => x.id !== id); setItems(next); localStorage.setItem('spai_calendar', JSON.stringify(next)); };
  return <div className="page-stack">
    <PageIntro eyebrow="PLAN CONSISTENTLY" title="Content Calendar" desc="Organise your trading education ideas. Calendar items stay in this browser." />
    <section className="panel"><form className="calendar-add" onSubmit={add}><input value={title} onChange={e => setTitle(e.target.value)} placeholder="Content title e.g. Risk management Reel" required /><input type="date" value={date} onChange={e => setDate(e.target.value)} required /><button className="btn-primary"><CalendarDays size={16} /> Add to calendar</button></form>
      {items.length === 0 ? <div className="empty-state"><CalendarDays size={30} /><b>Your calendar is ready</b><p>Add your first Reel, carousel or promotion plan.</p></div> : <div className="calendar-list">{items.map(x => <div key={x.id}><span className="date-badge">{x.date}</span><b>{x.title}</b><button onClick={() => remove(x.id)}>Remove</button></div>)}</div>}
    </section>
    <section className="panel"><div className="eyebrow">RECENT DEMO PUBLISHES</div><h3>Publishing history</h3><PublishHistory /></section>
  </div>;
}
function PublishHistory() {
  const history = JSON.parse(localStorage.getItem('socialpulse_publish_history') || '[]');
  if (!history.length) return <p className="muted">No demo posts saved yet. Create a Reel or photo draft to see it here.</p>;
  return <div className="calendar-list">{history.slice(0, 8).map(x => <div key={x.id}><span className="date-badge">{x.type}</span><b>{x.caption.slice(0, 70)}{x.caption.length > 70 ? '…' : ''}</b><small className="demo-status">Demo only</small></div>)}</div>;
}
