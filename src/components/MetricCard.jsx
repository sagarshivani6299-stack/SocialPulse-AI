import { ArrowUpRight, Eye, Heart, Users, TrendingUp } from 'lucide-react';
const icons = { Reach: Eye, Engagement: TrendingUp, Likes: Heart, Followers: Users, Saves: BookmarkIcon };
function BookmarkIcon(props) { return <span {...props}>▣</span>; }

export default function MetricCard({ item, index = 0 }) {
  const Icon = icons[item.label] || Eye;
  return <article className={`metric-card delay-${index}`}>
    <div className="metric-top"><span>{item.label}</span><div className="metric-icon"><Icon size={18} /></div></div>
    <div className="metric-value">{item.value}</div>
    <div className="metric-bottom"><span className="growth"><ArrowUpRight size={14} />{item.change}</span><span>vs last 7 days</span></div>
  </article>;
}
