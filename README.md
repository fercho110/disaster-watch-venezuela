# Disaster Watch Venezuela

**When the Ground Shook** — An Interactive Earthquake Report.

A child-friendly, visual English Unit 4 ("Disaster!") school project presented by two young reporters. Built with React and Vite, it guides the student through 11 stations — meeting the reporters, the earthquake facts, the video, how earthquakes happen, safety, Unit 4 vocabulary, past simple vs. past continuous grammar, a Why/Because activity and a short final challenge — using verified USGS earthquake facts throughout.

Authors:

- Fernando Luis Díaz Álvarez
- Juan Manuel Guzmán Páez

## Redesign assets

Illustrations used by the "young reporters" experience live in `public/earthquake/images/redesign/` (`team/`, `hero/`, `sections/`). The source package they were copied from is kept in `Disaster_Watch_Venezuela_Redesign_Package/` for reference.

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
