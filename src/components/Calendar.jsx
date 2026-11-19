import { useState } from 'react'
import { ChevronLeft, ChevronRight, Plus, Clock3 } from 'lucide-react'
const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
const dates = Array.from({length:35},(_,i)=>i-4)
const scheduled = { 5: ['React tips carousel','09:30'], 8: ['Behind the code reel','18:00'], 12: ['JavaScript mini guide','12:00'], 16: ['Q&A story','19:00'], 21: ['Portfolio breakdown','10:30'], 26: ['CSS tricks reel','17:30'] }
export default function Calendar() {
  const [month,setMonth] = useState(10)
  const [selected,setSelected] = useState(17)
  const monthName = new Date(2026,month,1).toLocaleString('en-US',{month:'long',year:'numeric'})
  return <div className="page-content"><div className="welcome-row"><div><div className="eyebrow">PLAN WITH PURPOSE</div><h1>Content <span>calendar.</span></h1><p>Keep your publishing rhythm consistent.</p></div><button className="primary-btn" onClick={()=>setSelected(selected)}><Plus size={16}/> Add reminder</button></div>
    <section className="panel calendar-panel"><div className="calendar-head"><div><h3>{monthName}</h3><p>Plan, organize and show up consistently.</p></div><div className="calendar-controls"><button onClick={()=>setMonth(m=>m-1)}><ChevronLeft size={17}/></button><button onClick={()=>setMonth(10)}>Today</button><button onClick={()=>setMonth(m=>m+1)}><ChevronRight size={17}/></button></div></div>
      <div className="calendar-grid">{days.map(d=><div className="calendar-weekday" key={d}>{d}</div>)}{dates.map((d,i)=>{const inMonth=d>0&&d<=30;const day=((d-1+30)%30)+1;const event=inMonth?scheduled[day]:null;return <button key={i} className={`calendar-day ${!inMonth?'muted':''} ${selected===day&&inMonth?'selected':''}`} onClick={()=>inMonth&&setSelected(day)}><span>{inMonth?day:(d<=0?30+d:d-30)}</span>{event&&<div className="calendar-event"><i/>{event[0]}</div>}</button>})}</div>
      <div className="calendar-selected"><div className="selected-date"><b>November {selected}, 2026</b><span>Selected day</span></div><div className="selected-event"><Clock3 size={15}/><span>{scheduled[selected]?.[0] || 'No content planned yet'}</span><small>{scheduled[selected]?.[1] || 'Add an idea'}</small></div></div>
    </section>
  </div>
}
