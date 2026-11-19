import { useState } from 'react'
import { Save, UserRound, Instagram, Database, RotateCcw } from 'lucide-react'
export default function Settings({ profile, setProfile, reset }) {
  const [form,setForm] = useState(profile)
  const [saved,setSaved] = useState(false)
  function update(key,value){setForm({...form,[key]:value});setSaved(false)}
  function submit(e){e.preventDefault();setProfile(form);setSaved(true)}
  return <div className="page-content"><div className="welcome-row"><div><div className="eyebrow">MAKE IT YOURS</div><h1>Workspace <span>settings.</span></h1><p>Manage your creator profile and local demo workspace.</p></div></div>
    <div className="settings-layout"><form className="panel settings-form" onSubmit={submit}><div className="section-title"><div className="section-icon"><UserRound size={18}/></div><div><h3>Creator profile</h3><p>These details personalize your workspace.</p></div></div><label>Display name</label><input value={form.name} onChange={e=>update('name',e.target.value)}/><label>Instagram username</label><div className="input-with-icon"><Instagram size={16}/><input value={form.username} onChange={e=>update('username',e.target.value.replace('@',''))}/></div><label>Content category</label><input value={form.category} onChange={e=>update('category',e.target.value)}/><label>Bio</label><textarea rows="3" value={form.bio} onChange={e=>update('bio',e.target.value)}/><button className="primary-btn" type="submit"><Save size={16}/> Save changes</button>{saved&&<span className="saved-message">✓ Profile saved to this browser.</span>}</form>
      <div className="settings-side"><div className="panel storage-card"><Database size={21}/><h3>Local workspace</h3><p>Your profile, saved drafts and preferences are stored in this browser using LocalStorage.</p><span className="storage-status"><i/> Storage active</span></div><div className="panel reset-card"><h3>Reset demo workspace</h3><p>Restore sample profile and content. This cannot be undone.</p><button className="secondary-btn danger-btn" onClick={reset}><RotateCcw size={15}/> Reset demo data</button></div></div>
    </div>
  </div>
}
