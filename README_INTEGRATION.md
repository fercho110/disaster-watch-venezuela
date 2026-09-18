# Earthquake Project — Drop-in module for Vite + React

This folder contains a self-contained educational module designed to be copied into an existing **Vite + React** website.

## What is included

- Cinematic hero section
- Verified earthquake facts from USGS
- Interactive earthquake magnitude simulator
- Educational map
- 20-second video player with graceful placeholder
- Past continuous + past simple grammar challenge
- Interactive vocabulary cards
- Earthquake safety activity
- Final quiz with score
- Mini reporter writing activity
- Responsive mobile layout
- Reduced-motion accessibility support
- Original SVG educational illustrations
- Credits for Fernando Luis Díaz Álvarez and Juan Manuel Guzmán Páez

## Copy these folders

Copy:

```text
src/earthquake/
```

into your current project as:

```text
YOUR_PROJECT/src/earthquake/
```

and copy:

```text
public/earthquake/
```

into:

```text
YOUR_PROJECT/public/earthquake/
```

## Add the video

Put the video here:

```text
YOUR_PROJECT/public/earthquake/video/venezuela-earthquake.mp4
```

The page is already configured to read that exact filename.

If the file is absent, the page shows a clean placeholder instead of breaking.

## Import the page

```jsx
import { EarthquakeExperience } from './earthquake'
```

or:

```jsx
import EarthquakeExperience from './earthquake/EarthquakeExperience.jsx'
```

## If your project uses react-router-dom

Add a route like:

```jsx
<Route path="/earthquake" element={<EarthquakeExperience />} />
```

Then add a menu button/link:

```jsx
<Link to="/earthquake">🌎 Earthquake Project</Link>
```

## If your project does NOT use a router

Use your current navigation/state system. Example:

```jsx
{activePage === 'earthquake' && (
  <EarthquakeExperience onBack={() => setActivePage('home')} />
)}
```

and add a button:

```jsx
<button onClick={() => setActivePage('earthquake')}>
  🌎 Earthquake Project
</button>
```

## Important integration note

The CSS is intentionally prefixed with `eq-` so it should not collide with the existing site.

The module does not require any extra npm package beyond React itself.

## Vercel

If the current site already deploys correctly on Vercel, no new project is required.

If you use `BrowserRouter` and direct visits to `/earthquake` return a 404 on Vercel, your existing project may need a SPA rewrite. Ask your coding assistant to inspect the current Vercel configuration before changing it, because adding a duplicate or conflicting `vercel.json` can break an existing setup.

## Data source

Main event used in the project:
- USGS M 6.2, 24 km ENE of Mene Grande, Venezuela
- 24 September 2025, 22:21:55 UTC
- Depth 7.8 km

Later strong event:
- USGS M 6.3, 25 km ENE of Mene Grande, Venezuela
- 25 September 2025, 03:51:39 UTC
- Depth 14.0 km

Links are included in the project footer.

## School focus

The English activities were designed around Unit 4 “Disaster!”, especially:
- disasters vocabulary
- past continuous + past simple
- “What were you doing when it happened?”
- short reporter-style descriptions
- question-and-answer practice

