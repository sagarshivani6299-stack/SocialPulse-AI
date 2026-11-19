import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, PieChart, Pie, Cell } from 'recharts'
import { ArrowUpRight, Eye, Heart, MessageCircle, Bookmark, Share2 } from 'lucide-react'
import MetricCard from './MetricCard'
import { engagementData } from '../data'

const sources = [{name:'Reels',value:46},{name:'Explore',value:28},{name:'Home',value:18},{name:'Profile',value:8}]
const colors = ['#8b65ed','#bca9f6','#e1d8ff','#f3b7d1']
export default function Analytics() {
  return <div className="page-content">
    <div className="welcome-row"><div><div className="eyebrow">MEASURE WHAT MATTERS</div><h1>Analytics <span>overview.</span></h1><p>Understand the signals behind your content performance.</p></div><select className="date-select"><option>Last 7 days</option><option>Last 30 days</option><option>Last 90 days</option></select></div>
    <div className="metric-grid">
      <MetricCard title="Total reach" value="48.6K" change="+12.8%" caption="vs. previous period" icon={Eye}/>
      <MetricCard title="Likes" value="4,820" change="+16.4%" caption="vs. previous period" icon={Heart} tone="pink" index={1}/>
      <MetricCard title="Comments" value="892" change="+9.1%" caption="vs. previous period" icon={MessageCircle} tone="blue" index={2}/>
      <MetricCard title="Saves" value="579" change="+21.3%" caption="vs. previous period" icon={Bookmark} tone="orange" index={3}/>
    </div>
    <div className="chart-grid analytics-charts">
      <section className="panel growth-panel"><div className="panel-heading"><div><h3>Engagement trend</h3><p>Daily audience interactions</p></div><span className="trend positive">↗ 18.6%</span></div><div className="chart-area tall"><ResponsiveContainer width="100%" height="100%"><AreaChart data={engagementData}><defs><linearGradient id="engFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#9875ed" stopOpacity={.24}/><stop offset="100%" stopColor="#9875ed" stopOpacity={0}/></linearGradient></defs><CartesianGrid stroke="#f0edf7" vertical={false}/><XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill:'#a29bad',fontSize:11}}/><YAxis axisLine={false} tickLine={false} tick={{fill:'#a29bad',fontSize:10}}/><Tooltip/><Area dataKey="likes" stroke="#8b65ed" fill="url(#engFill)" strokeWidth={2.5}/></AreaChart></ResponsiveContainer></div></section>
      <section className="panel source-panel"><div className="panel-heading"><div><h3>Discovery sources</h3><p>Where viewers find you</p></div></div><div className="donut-wrap"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={sources} dataKey="value" nameKey="name" innerRadius={62} outerRadius={88} paddingAngle={4} stroke="none">{sources.map((s,i)=><Cell key={s.name} fill={colors[i]}/>)}</Pie><Tooltip/></PieChart></ResponsiveContainer><div className="donut-center"><b>48.6K</b><small>Reach</small></div></div><div className="source-legend">{sources.map((s,i)=><div key={s.name}><span><i style={{background:colors[i]}}/>{s.name}</span><b>{s.value}%</b></div>)}</div></section>
    </div>
    <div className="demo-note"><Eye size={14}/> All analytics on this screen are illustrative demo data, not fetched from Instagram.</div>
  </div>
}
