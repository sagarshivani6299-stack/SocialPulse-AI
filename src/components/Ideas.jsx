import { ArrowUpRight, Sparkles, TrendingUp, BookmarkPlus } from 'lucide-react'
import { ideas } from '../data'
export default function Ideas({ addPost }) {
  return <div className="page-content"><div className="welcome-row"><div><div className="eyebrow">YOUR CREATIVE CO-PILOT</div><h1>AI content <span>ideas.</span></h1><p>Fresh prompts for your Web Development / React niche.</p></div><span className="demo-pill">DEMO AI SUGGESTIONS</span></div>
    <div className="idea-hero panel"><div><div className="ai-label"><Sparkles size={14}/> PULSE AI</div><h2>Make your next post<br/>your <span>best one yet.</span></h2><p>Ideas below are curated from common creator formats and your selected niche. They are suggestions, not live trend detection.</p></div><div className="idea-hero-art">✦</div></div>
    <div className="idea-cards">{ideas.map((idea,i)=><div className="panel idea-card" key={idea.title}><div className="idea-card-top"><span className={`idea-tag tag-${i}`}>{idea.tag}</span><span className="idea-score"><TrendingUp size={14}/>{idea.score}%</span></div><div className="big-idea-emoji">{['⚛️','🎬','🧑‍💻'][i]}</div><h3>{idea.title}</h3><p>{idea.reason}</p><div className="idea-card-foot"><span>{idea.format}</span><button onClick={()=>addPost({title:idea.title,type:idea.format,status:'Draft',date:'Not scheduled',reach:'—',engagement:'—',color:'lavender',emoji:'✨'})}><BookmarkPlus size={15}/> Save idea</button></div></div>)}</div>
  </div>
}
