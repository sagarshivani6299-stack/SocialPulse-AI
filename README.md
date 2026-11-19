# SocialPulse AI — Frontend-only Trading Creator Studio

A polished React/Vite demo for the Instagram Creator profile `@tra_dingchamp`.

## Features
- Login page with fixed demo credentials
- Protected routes: logged-out users are redirected to `/login`
- Separate Overview, Reels, Photos, Promotions, Analytics, AI Assistant and Settings pages
- Trading-only AI content suggestions using curated local responses
- LocalStorage drafts, calendar and simulated publishing history
- Responsive white + lavender + purple dashboard
- Three.js animated AI orb
- Recharts demo analytics

## Demo login
- Username: `creator`
- Password: `Creator@2026`

Change the credentials in `src/auth/AuthContext.jsx` before sharing the project.

## Run locally
Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Important: frontend-only limitations
This is a frontend-only demo. It does NOT publish to Instagram, connect to Instagram, access real Instagram insights, run paid campaigns, or securely authenticate users. Publishing actions are simulated and saved in this browser's LocalStorage. Analytics are sample data. The AI assistant uses local trading-specific templates and does not call an AI model.

A React-only login is suitable for a portfolio/demo, not for protecting private data. The fixed password and LocalStorage session can be inspected or bypassed by someone with browser/devtools access. Real Instagram publishing and secure authentication require a trusted backend or serverless API and Meta's official authorization flow.
