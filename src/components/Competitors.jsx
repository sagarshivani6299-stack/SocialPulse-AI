import { useState } from 'react'
import { Plus, Users, TrendingUp, Instagram, X } from 'lucide-react'
const initial = [{name:'@codewithharry',followers:'1.2M',engagement:'6.8%',niche:'Programming education'},{name:'@javascript.js',followers:'428K',engagement:'5.9%',niche:'JavaScript tips'}]
export default function Competitors() {
  const [list,setList] = useState(initial)
  const [name,setName] = useState('')
  const [show,setShow] = useState(false)
  function add(){if(!name.trim())return;setList([...list,{name:name.startsWith('@')?name:'@'+name,followers:'—',engagement:'—',niche:'Manually added'}]);setName('');setShow(false)}
  return <div className="page-content"><div className="welcome-row"><div><div className="eyebrow">LEARN FROM YOUR SPACE</div><h1>Competitor <span>watch.</span></h1><p>Keep an eye on creators in your niche.</p></div><button className="primary-btn" onClick={()=>setShow(true)}><Plus size={16}/> Add creator</button></div>
    <div className="competitor-note">Competitor figures below are illustrative examples. Add handles to maintain your own comparison list.</div>
    <div className="competitor-grid">{list.map((c,i)=><div className="panel competitor-card" key={c.name}><div className="competitor-avatar">{c.name.replace('@','').slice(0,2).toUpperCase()}</div><div className="competitor-name"><b>{c.name}</b><span>{c.niche}</span></div><div className="competitor-stats"><div><Users size={15}/><b>{c.followers}</b><small>Followers</small></div><div><TrendingUp size={15}/><b>{c.engagement}</b><small>Engagement</small></div></div><div className="competitor-foot"><Instagram size={14}/> Instagram profile <span>Manual tracking</span></div></div>)}</div>
    {show&&<div className="modal-backdrop" onClick={()=>setShow(false)}><div className="modal-card" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setShow(false)}><X size={18}/></button><h3>Add a creator</h3><p>Save a public handle for your manual competitor list.</p><label>Instagram username</label><input value={name} onChange={e=>setName(e.target.value)} placeholder="@creatorname"/><button className="primary-btn full-btn" onClick={add}>Add to watchlist</button></div></div>}
  </div>
}
