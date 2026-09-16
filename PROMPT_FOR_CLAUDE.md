# Prompt to give Claude in Visual Studio Code

Copy and paste this prompt after placing the `earthquake-module` folder in or next to your current Vite + React project:

---

I have added a folder called `earthquake-module`. Please integrate its earthquake educational experience into my EXISTING Vite + React website as one new navigation option, without replacing or redesigning the rest of my site.

Requirements:

1. First inspect my current project structure, package.json, App component, navigation system, router configuration, existing CSS approach, and Vercel setup.
2. Copy or move `earthquake-module/src/earthquake` into the correct location under my existing `src` folder.
3. Copy or move `earthquake-module/public/earthquake` into my existing `public` folder.
4. Keep the module's asset paths working exactly as designed.
5. Add ONE new visible navigation button or card labeled `🌎 Earthquake Project` using the visual language of my existing site.
6. Opening that option must render the `EarthquakeExperience` page.
7. If the project already uses react-router-dom, add an appropriate route such as `/earthquake` and preserve every existing route.
8. If the project does not use react-router-dom, use the existing navigation/state pattern instead of installing a router unnecessarily.
9. Do not install extra packages unless the current project genuinely requires them.
10. Do not delete, rename or restructure existing pages unless absolutely necessary.
11. Do not modify the earthquake module's `eq-` scoped styles unless needed for compatibility.
12. Preserve responsive behavior for desktop and mobile.
13. The video will be supplied later with this exact path and filename:
   `public/earthquake/video/venezuela-earthquake.mp4`
14. If that video does not exist yet, the built-in placeholder must remain functional.
15. If BrowserRouter is used, verify whether direct navigation to `/earthquake` works on Vercel. Only add or modify Vercel rewrite configuration if necessary, and do not overwrite a working existing setup.
16. Run the project/build after integration and fix any import or path errors.
17. At the end, tell me exactly which files you changed and give me the commands I should run to commit and push the changes to GitHub.

Important: treat the current website as the primary application. The earthquake experience is only one additional module/button inside it.

---
