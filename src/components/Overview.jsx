import { useState } from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, BarChart, Bar, Legend } from 'recharts'
import { ArrowUpRight, Eye, Heart, MessageCircle, Plus, Sparkles, Users, Zap, Instagram, CalendarClock, TrendingUp, WandSparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import MetricCard from './MetricCard'
import AssistantOrb from './AssistantOrb'
import { growthData, engagementData, ideas } from '../data'

const tooltipStyle = { border: '1px solid #eee8ff', borderRadius: 14, boxShadow: '0 12px 35px #30205b12', fontSize: 12 }

export default function Overview({ profile, posts, setActive }) {
  const [range, setRange] = useState('7 days')
  return <div className="page-content">
    <div className="welcome-row">
      <div><div className="eyebrow"><span className="live-dot"/> YOUR CREATOR SNAPSHOT</div><h1>Good morning, Creator <span>✦</span></h1><p>Here's what's happening with your content today.</p></div>
      <button className="primary-btn" onClick={() => setActive('Content Studio')}><Plus size={17}/> Create content</button>
    </div>
    <div className="profile-strip">
      <img src={profile.avatar} alt="Creator profile"/>
      <div className="profile-details"><b>{profile.name}</b><span><Instagram size={13}/> @{profile.username} <i/> {profile.category}</span></div>
      <div className="profile-spacer"/>
      <span className="demo-pill">DEMO INSIGHTS</span>
      <button className="text-action" onClick={() => setActive('Settings')}>Edit profile <ArrowUpRight size={14}/></button>
    </div>
    <div className="metric-grid">
      <MetricCard title="Total followers" value="12,840" change="+8.2%" caption="vs. last week" icon={Users} index={0}/>
      <MetricCard title="Accounts reached" value="48.6K" change="+12.8%" caption="vs. last week" icon={Eye} tone="blue" index={1}/>
      <MetricCard title="Engagement rate" value="7.84%" change="+2.4%" caption="vs. last week" icon={Heart} tone="pink" index={2}/>
      <MetricCard title="Content interactions" value="6,291" change="+18.6%" caption="vs. last week" icon={MessageCircle} tone="orange" index={3}/>
    </div>
    <div className="chart-grid">
      <section className="panel growth-panel">
        <div className="panel-heading"><div><h3>Audience growth</h3><p>Track how your community is growing</p></div><select value={range} onChange={e => setRange(e.target.value)}><option>7 days</option><option>30 days</option><option>90 days</option></select></div>
        <div className="chart-legend"><span><i className="legend-purple"/> Followers</span><span><i className="legend-lilac"/> Reach</span><b>+8.2% <small>this week</small></b></div>
        <div className="chart-area"><ResponsiveContainer width="100%" height="100%"><AreaChart data={growthData}><defs><linearGradient id="followersFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#8b65ed" stopOpacity={.2}/><stop offset="100%" stopColor="#8b65ed" stopOpacity={0}/></linearGradient><linearGradient id="reachFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c7b6ff" stopOpacity={.25}/><stop offset="100%" stopColor="#c7b6ff" stopOpacity={0}/></linearGradient></defs><CartesianGrid stroke="#f0edf7" vertical={false}/><XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill:'#a29bad', fontSize:11 }}/><YAxis hide/><Tooltip contentStyle={tooltipStyle}/><Area type="monotone" dataKey="reach" stroke="#c4b2fa" strokeWidth={2} fill="url(#reachFill)"/><Area type="monotone" dataKey="followers" stroke="#8b65ed" strokeWidth={2.7} fill="url(#followersFill)"/></AreaChart></ResponsiveContainer></div>
      </section>
      <section className="panel engagement-panel">
        <div className="panel-heading"><div><h3>Engagement activity</h3><p>Likes & comments over time</p></div><button className="more-btn">•••</button></div>
        <div className="engagement-total"><b>6,291</b><span className="trend positive">↗ 18.6%</span></div>
        <div className="chart-area small"><ResponsiveContainer width="100%" height="100%"><BarChart data={engagementData} barGap={4}><CartesianGrid stroke="#f0edf7" vertical={false}/><XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill:'#a29bad', fontSize:10 }}/><YAxis hide/><Tooltip contentStyle={tooltipStyle}/><Bar dataKey="likes" fill="#9270ed" radius={[5,5,0,0]}/><Bar dataKey="comments" fill="#d8cdfb" radius={[5,5,0,0]}/></BarChart></ResponsiveContainer></div>
        <div className="bar-legend"><span><i className="legend-purple"/> Likes</span><span><i className="legend-lilac"/> Comments</span></div>
      </section>
    </div>
    <div className="bottom-grid">
      <section className="panel ai-panel">
        <div className="ai-panel-glow"/>
        <div className="ai-copy"><div className="ai-label"><Sparkles size={14}/> PULSE AI ASSISTANT</div><h2>Your next big idea<br/>starts <span>right here.</span></h2><p>Get a little creative boost. Discover content ideas tailored to your creator niche.</p><button className="primary-btn" onClick={() => setActive('AI Ideas')}>Explore AI ideas <WandSparkles size={16}/></button></div>
        <AssistantOrb/>
        <div className="orb-caption"><span/> AI is ready to brainstorm</div>
      </section>
      <section className="panel ideas-panel">
        <div className="panel-heading"><div><h3>Ideas for you</h3><p>Personalized content inspiration</p></div><button className="text-action" onClick={() => setActive('AI Ideas')}>See all <ArrowUpRight size={14}/></button></div>
        {ideas.slice(0,2).map((idea,i)=><div className="idea-row" key={idea.title}><div className={`idea-icon idea-${i}`}>{i === 0 ? '⚛️' : '🎬'}</div><div className="idea-copy"><small>{idea.tag}</small><b>{idea.title}</b><span>{idea.format} · {idea.score}% potential</span></div><ArrowUpRight size={15}/></div>)}
      </section>
    </div>
    <div className="demo-note"><Zap size={14}/> These are illustrative demo insights, not live Instagram account metrics.</div>
  </div>
}
