# CLAUDE MASTER REDESIGN TASK — Disaster Watch Venezuela

You are working inside the EXISTING deployed Vite + React project for:

DISASTER WATCH VENEZUELA

Repository:
`fercho110/disaster-watch-venezuela`

The current project is already deployed successfully on Vercel. DO NOT create a new project, a new repository, a nested Vite app, or a new Vercel site.

Your job is to redesign the current website to make it significantly more visual, interactive, child-friendly and appropriate for 11-year-old English learners, while keeping the topic and educational scope focused.

## FIRST — READ THESE FILES
Before editing code, read all files supplied in this redesign package:

- `ENGLISH_COPY.md`
- `UNIT4_ALIGNMENT.md`
- `ASSET_MAP.md`

Then inspect the existing Vite project and current earthquake components.

## NON-NEGOTIABLE REQUIREMENTS

1. Everything visible to the student must be in ENGLISH.
2. Both student names must appear correctly:
   - Fernando Luis Díaz Álvarez
   - Juan Manuel Guzmán Páez
3. Both boys must receive equal visual prominence.
4. Keep the existing 20-second video working.
5. Do not turn the project into a long article.
6. Reduce text density aggressively.
7. Use visual cards, buttons, diagrams, photos and small interactions.
8. Keep Unit 4 vocabulary and grammar at an age-appropriate level.
9. Do not add a large quiz. Use only a short final mini challenge.
10. Preserve all accurate factual/source references already used.
11. Keep the site responsive and deployable on Vercel.
12. Do not break the current GitHub/Vercel deployment flow.

## NEW VISUAL ASSETS

Copy the supplied assets to:

`public/earthquake/images/redesign/`

Maintain the subfolders:

- `team/`
- `hero/`
- `sections/`

Use:
- `team/fernando-young-reporter.png`
- `team/juan-manuel-young-reporter.png`
- `hero/young-reporters-hero.png`
- `sections/earthquake-process.png`
- `sections/safety-before-during-after.png`
- `sections/unit4-vocabulary-cards.png`

The boys are the main visual guides. A separate mascot is optional and should not compete with them.

## DESIGN DIRECTION

Target:
- 11-year-old students
- English class
- bright and educational
- playful but professional
- modern school project
- visual storytelling

Suggested palette:
- sky blue
- bright green
- warm yellow
- white
- small red/orange accents

Use:
- rounded cards
- large readable headings
- strong spacing
- friendly icons
- subtle motion
- clear progress/navigation buttons

Avoid:
- dark adult-news styling
- horror/disaster imagery
- walls of text
- tiny text
- excessive technical language
- long scroll sections with no interaction

## PAGE FLOW

Build the site as a guided interactive report with approximately these stations:

1. HERO
2. MEET THE YOUNG REPORTERS
3. WHAT HAPPENED?
4. WATCH THE VIDEO
5. HOW DOES AN EARTHQUAKE HAPPEN?
6. STAY SAFE!
7. UNIT 4 VOCABULARY
8. GRAMMAR TIME
9. WHY? BECAUSE...
10. FINAL MINI CHALLENGE
11. CREDITS

Add a compact sticky/progress navigation so users can jump between stations.

## BUTTON BEHAVIOR

Buttons must have a real purpose. Examples:

- START THE REPORT → scroll/navigate to reporters
- WATCH THE VIDEO → video section
- SEE HOW IT HAPPENS → process section
- NEXT: STAY SAFE → safety section
- ENGLISH TIME → vocabulary/grammar
- FINISH THE REPORT → final completion state

Use real `<button>` or accessible links.
Add hover/focus states.

## SECTION RULE

Every main section should contain:
- one clear title
- at most 1–3 short supporting sentences visible at once
- one strong visual
- one interaction or button when useful

Do not paste long explanatory paragraphs.

## HERO

Use `young-reporters-hero.png`.

Display:
YOUNG REPORTERS PRESENT
DISASTER WATCH VENEZUELA
When the Ground Shook
An Interactive Earthquake Report

Names:
Fernando Luis Díaz Álvarez
Juan Manuel Guzmán Páez

Primary CTA:
START THE REPORT

Secondary CTA:
WATCH THE VIDEO

## REPORTERS SECTION

Use both prepared team PNGs side by side.

Cards:
Fernando Luis Díaz Álvarez — Young Reporter
Juan Manuel Guzmán Páez — Young Reporter

Include one short shared line:
“We are going to tell you about an earthquake in Venezuela.”

Do not give one child a larger card than the other.

## FACTS SECTION

Use four large clickable cards:
DATE / PLACE / MAGNITUDE / DEPTH

Content:
September 24, 2025
Near Mene Grande, Venezuela
6.2
7.8 km

Reveal the value when tapped/clicked if that works cleanly.

Use the existing Venezuela map asset if available.

## VIDEO SECTION

Keep:
`/earthquake/video/venezuela-earthquake.mp4`

Prompt:
“Watch carefully. What were people doing when the ground started to shake?”

Make the video responsive with a good poster/background.
No autoplay audio.

## EARTHQUAKE PROCESS

Use:
`earthquake-process.png`

Overlay or place beside it the four exact labels:
1. Tectonic plates move.
2. Pressure builds.
3. The fault moves suddenly.
4. The ground shakes.

Make each step clickable or revealable.

## SAFETY

Use:
`safety-before-during-after.png`

Create three matching cards:
BEFORE / DURING / AFTER

Keep each card to 3 short tips maximum, using `ENGLISH_COPY.md`.

## UNIT 4 VOCABULARY

Use:
`unit4-vocabulary-cards.png`

Create interactive vocabulary cards for:
DISASTER
EARTHQUAKE
VOLCANO
HURRICANE
TSUNAMI
LIGHTNING

Optional bonus:
RESCUE

On click/tap, reveal the short English definition from `ENGLISH_COPY.md`.

Do NOT make advanced terms the primary vocabulary.

## GRAMMAR TIME

Focus:
Past Continuous + Past Simple

Use exactly three simple examples from `ENGLISH_COPY.md`.

Add one mini multiple-choice interaction only.

Do not create a long grammar lesson.

## WHY? BECAUSE...

Use one visible example:
Why did people move away from damaged buildings after the shaking stopped?
Because it was safer.

Then show one short prompt:
“Now make your own Why...? / Because... sentence.”

## FINAL MINI CHALLENGE

Do not use the old long quiz if it exists.
Replace/reduce it to a maximum of 3 small interactions:
- identify an earthquake image
- complete one Past Continuous sentence
- order Before / During / After

Show positive completion feedback:
GREAT JOB!
You completed the Disaster Watch Venezuela report.

## ANIMATION

Use subtle child-friendly animation:
- cards gently rise on hover
- section reveal on scroll
- small pulse on CTA buttons
- optional light seismic-line animation

Respect `prefers-reduced-motion`.

Do not shake the entire screen aggressively.

## MOBILE

The project must work well at:
- 390 px
- 768 px
- 1024 px
- desktop

Ensure:
- no horizontal overflow
- team cards stack gracefully
- text stays readable
- buttons stay tappable
- video stays responsive

## ACCESSIBILITY

- semantic headings
- meaningful alt text
- keyboard accessible controls
- visible focus states
- no information communicated by color alone

## CLEANUP

You may remove or simplify:
- old long quiz
- repeated paragraphs
- overly technical text
- duplicate sections

Do not remove:
- video
- accurate source attribution
- student names
- core Unit 4 language work

## BUILD + GIT

After the redesign:

1. Run:
`npm install`

2. Run:
`npm run build`

3. Fix all build errors.

4. Run the dev server and check for obvious runtime/console problems.

5. Check git status.

6. Commit with:
`git add .`
`git commit -m "Redesign Disaster Watch for interactive Unit 4 presentation"`

7. Push:
`git push origin main`

Do NOT force-push.

Because Vercel is already connected, the push should trigger the deployment automatically.

## FINAL REPORT

At the end, report:
- sections redesigned
- assets used
- whether the video works
- build result
- git commit/push result
- whether Vercel deployment was triggered
- any remaining issue

Do not stop after planning. Implement the redesign fully.
