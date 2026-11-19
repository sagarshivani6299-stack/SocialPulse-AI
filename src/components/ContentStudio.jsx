import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Hash, ImagePlus, Lightbulb, Sparkles, WandSparkles, Check, Instagram, Send } from 'lucide-react'

const templates = [
  { name: 'Educational carousel', desc: 'Teach one concept in 5–7 slides', icon: '📚' },
  { name: 'Quick tip reel', desc: 'A punchy 20–30 second tutorial', icon: '🎬' },
  { name: 'Behind the scenes', desc: 'Show your process and personality', icon: '🛠️' }
]
export default function ContentStudio({ addPost }) {
  const [topic, setTopic] = useState('3 React hooks that make your code cleaner')
  const [tone, setTone] = useState('Friendly & educational')
  const [format, setFormat] = useState('Carousel')
  const [caption, setCaption] = useState('')
  const [copied, setCopied] = useState(false)
  const [generated, setGenerated] = useState(false)

  function generate() {
    const result = `🚀 ${topic}\\n\\nReact becomes much easier when you understand the tools behind it. In this post, I'm breaking the concept down into simple, practical steps you can use in your next project.\\n\\n💡 Save this for your next coding session and share it with a developer friend!\\n\\nWhat React concept should I explain next? Let me know below 👇\\n\\n#ReactJS #WebDevelopment #FrontendDeveloper #JavaScript #CodingTips #LearnToCode`
    setCaption(result); setGenerated(true)
  }
  async function copyCaption() {
    try { await navigator.clipboard.writeText(caption); setCopied(true); setTimeout(() => setCopied(false), 1600) }
    catch { setCopied(false) }
  }
  return <div className="page-content">
    <div className="welcome-row"><div><div className="eyebrow">CREATE SOMETHING GREAT</div><h1>Content <span>Studio.</span></h1><p>Turn your ideas into scroll-stopping content.</p></div><span className="demo-pill">AI-ASSISTED DEMO</span></div>
    <div className="studio-layout">
      <section className="panel studio-form">
        <div className="section-title"><div className="section-icon"><WandSparkles size={18}/></div><div><h3>Caption creator</h3><p>Shape your next post with a little help from AI.</p></div></div>
        <label>What's your post about?</label><textarea value={topic} onChange={e => setTopic(e.target.value)} rows="3" placeholder="e.g. 5 JavaScript tips for beginners"/>
        <div className="form-two"><div><label>Content format</label><select value={format} onChange={e=>setFormat(e.target.value)}><option>Carousel</option><option>Reel</option><option>Post</option><option>Story</option></select></div><div><label>Writing tone</label><select value={tone} onChange={e=>setTone(e.target.value)}><option>Friendly & educational</option><option>Bold & confident</option><option>Fun & relatable</option><option>Professional</option></select></div></div>
        <button className="primary-btn full-btn" onClick={generate}><Sparkles size={16}/> Generate caption <span>✦</span></button>
        <div className="form-footnote"><Sparkles size={13}/> Generated locally using a demo template. No external AI API connected.</div>
        {caption && <div className="generated-caption"><div className="caption-head"><b>Your caption</b><button onClick={copyCaption}>{copied ? <Check size={14}/> : <Copy size={14}/>} {copied ? 'Copied' : 'Copy'}</button></div><p>{caption}</p><button className="secondary-btn" onClick={()=>addPost({title:topic,type:format,status:'Draft',date:'Not scheduled',reach:'—',engagement:'—',color:'lavender',emoji:'✨'})}>Save to content drafts</button></div>}
      </section>
      <section className="studio-side">
        <div className="panel template-panel"><div className="panel-heading"><div><h3>Start with a format</h3><p>Choose a creative direction</p></div><Lightbulb size={19} color="#9875e9"/></div>{templates.map((t,i)=><button className={`template-row ${format === ['Carousel','Reel','Post'][i] ? 'selected' : ''}`} key={t.name} onClick={()=>setFormat(['Carousel','Reel','Post'][i])}><span>{t.icon}</span><div><b>{t.name}</b><small>{t.desc}</small></div><span className="template-arrow">↗</span></button>)}</div>
        <div className="panel tip-panel"><div className="tip-icon"><Sparkles size={17}/></div><div><b>Creator tip</b><p>Lead with a strong hook in the first two lines. Make your audience curious enough to tap “more”.</p></div></div>
      </section>
    </div>
  </div>
}
