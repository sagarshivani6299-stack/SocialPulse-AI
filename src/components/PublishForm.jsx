import { useState } from 'react';
import { Send, Link2, Image, Video, Layers, CheckCircle2 } from 'lucide-react';

const HISTORY_KEY = 'socialpulse_publish_history';

export default function PublishForm({ type = 'IMAGE', title }) {
  const [url, setUrl] = useState('');
  const [caption, setCaption] = useState('');
  const [notice, setNotice] = useState('');

  const publish = (event) => {
    event.preventDefault();
    setNotice('');
    if (!url.trim() || !caption.trim()) {
      setNotice('Add a media URL and caption before saving your demo post.');
      return;
    }
    const mediaUrls = type === 'CAROUSEL' ? url.split('\n').map(x => x.trim()).filter(Boolean) : [url.trim()];
    if (mediaUrls.some(x => !/^https:\/\/\S+/i.test(x))) {
      setNotice('Please use valid-looking HTTPS media URLs for this demo.');
      return;
    }
    if (type === 'CAROUSEL' && (mediaUrls.length < 2 || mediaUrls.length > 10)) {
      setNotice('A carousel demo needs between 2 and 10 image URLs.');
      return;
    }
    const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
    const post = {
      id: `demo-${Date.now()}`, type, caption, mediaUrls,
      publishedAt: new Date().toISOString(), status: 'Demo published'
    };
    localStorage.setItem(HISTORY_KEY, JSON.stringify([post, ...history]));
    setNotice('Demo post saved successfully. It has NOT been published to Instagram.');
    setUrl(''); setCaption('');
  };

  const Icon = type === 'REELS' ? Video : type === 'CAROUSEL' ? Layers : Image;
  return <form className="panel publish-panel" onSubmit={publish}>
    <div className="panel-heading"><div><div className="eyebrow">DEMO PUBLISH WORKFLOW</div><h3>{title || 'Create a post'}</h3></div><div className="metric-icon"><Icon size={19} /></div></div>
    <div className="demo-warning">Preview mode only · Nothing is sent to Instagram.</div>
    <label className="field-label">{type === 'REELS' ? 'Video URL' : type === 'CAROUSEL' ? 'Image URLs (one per line)' : 'Photo URL'}</label>
    <div className="input-icon"><Link2 size={16} />
      {type === 'CAROUSEL'
        ? <textarea className="url-textarea" value={url} onChange={e => setUrl(e.target.value)} placeholder={'https://example.com/slide-1.jpg\nhttps://example.com/slide-2.jpg'} />
        : <input value={url} onChange={e => setUrl(e.target.value)} placeholder="https://example.com/your-media.jpg" />}
    </div>
    <p className="field-help">Use a sample or public HTTPS URL. This demo stores the URL and caption in your browser only.</p>
    <label className="field-label">Caption</label>
    <textarea value={caption} onChange={e => setCaption(e.target.value)} maxLength={2200} placeholder="Write an educational trading caption…" />
    <div className="form-foot"><span>{caption.length}/2,200 characters</span><button className="btn-primary"><Send size={15} /> Save demo post</button></div>
    {notice && <div className={`notice ${notice.startsWith('Demo post') ? 'success' : ''}`}>{notice}</div>}
  </form>;
}
