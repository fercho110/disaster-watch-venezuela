# Disaster Watch Venezuela

**When the Ground Shook** — An Interactive Earthquake Report.

An interactive, English-learning school project about the 2025 Venezuela earthquake sequence. Built with React and Vite, it combines verified USGS earthquake facts with earth-science explanations, vocabulary, past simple vs. past continuous grammar practice, a safety mission, a final quiz, and a "Be the Reporter" writing activity.

Authors:

- Fernando Luis Díaz Fajardo
- Juan Manuel Guzmán Páez

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Video

Place the 20-second earthquake video at:

```text
public/earthquake/video/venezuela-earthquake.mp4
```

The page is already coded to load that exact path. If the file is missing, a graceful placeholder is shown instead of a broken player — no code changes are needed once the file is added.

## Data source

Main event:

- USGS M 6.2, 24 km ENE of Mene Grande, Venezuela — 24 September 2025, 22:21:55 UTC, depth 7.8 km

Later event:

- USGS M 6.3, 25 km ENE of Mene Grande, Venezuela — 25 September 2025, 03:51:39 UTC, depth 14.0 km

Sources are linked in the page footer.

## Deployment (Vercel)

This project is a static Vite frontend and requires no backend or environment variables.

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

Import the GitHub repository directly into Vercel and deploy.
