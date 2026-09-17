export const earthquakeFacts = {
  title: 'When the Ground Shook',
  subtitle: 'The 2025 Venezuela Earthquake Sequence',
  mainEvent: {
    magnitude: 6.2,
    date: '24 September 2025',
    timeUTC: '22:21:55 UTC',
    localTime: '18:21:55 local time',
    location: '24 km ENE of Mene Grande, Venezuela',
    depth: '7.8 km',
    coordinates: '9.9222° N, 70.7174° W',
  },
  laterEvent: {
    magnitude: 6.3,
    date: '25 September 2025',
    timeUTC: '03:51:39 UTC',
    location: '25 km ENE of Mene Grande, Venezuela',
    depth: '14.0 km',
  },
}

export const vocabulary = [
  { word: 'earthquake', meaning: 'terremoto', pronunciation: 'érth-kueik', icon: '🌎' },
  { word: 'epicenter', meaning: 'epicentro', pronunciation: 'é-pi-sen-ter', icon: '📍' },
  { word: 'aftershock', meaning: 'réplica', pronunciation: 'áf-ter-shok', icon: '〰️' },
  { word: 'fault', meaning: 'falla geológica', pronunciation: 'folt', icon: '🪨' },
  { word: 'rescue', meaning: 'rescate', pronunciation: 'rés-kiu', icon: '🛟' },
  { word: 'shelter', meaning: 'refugio', pronunciation: 'shél-ter', icon: '🏠' },
  { word: 'damage', meaning: 'daños', pronunciation: 'dá-mich', icon: '🏚️' },
  { word: 'emergency kit', meaning: 'kit de emergencia', pronunciation: 'i-mér-jen-si kit', icon: '🎒' },
]

export const grammarQuestions = [
  {
    prompt: 'People ___ dinner when the ground started to shake.',
    choices: ['were having', 'had', 'are having'],
    answer: 'were having',
    explanation: 'Use past continuous for an action already in progress.',
  },
  {
    prompt: 'The lights ___ while families were leaving their homes.',
    choices: ['went out', 'were going out', 'go out'],
    answer: 'went out',
    explanation: 'Use past simple for the shorter event that happened.',
  },
  {
    prompt: 'Juan ___ TV when he felt the earthquake.',
    choices: ['was watching', 'watched', 'is watching'],
    answer: 'was watching',
    explanation: 'The longer background action uses past continuous.',
  },
  {
    prompt: 'The ground ___ while people were talking outside.',
    choices: ['shook', 'was shaking', 'shakes'],
    answer: 'shook',
    explanation: 'The sudden event is expressed with past simple.',
  },
]

export const earthquakeEffects = {
  note: 'General educational explanation of typical earthquake effects — not a specific damage report for this event.',
  items: [
    { icon: '🏚️', text: 'Buildings, roads and bridges can be damaged or destroyed.' },
    { icon: '⚡', text: 'Power, water and communication services may be interrupted.' },
    { icon: '🚑', text: 'People can be injured, so rescue teams may need to help.' },
    { icon: '😟', text: 'Families may feel scared and need safe shelter for a while.' },
  ],
}

export const safetyDos = [
  'Drop, cover and hold on during shaking.',
  'Keep a flashlight, water and a first-aid kit ready.',
  'Move to open spaces away from buildings after strong shaking stops.',
]

export const safetyDonts = [
  "Don't run outside while the ground is still shaking.",
  "Don't use elevators during or right after an earthquake.",
  "Don't stand near windows, mirrors or tall furniture.",
]

export const safetyActions = [
  { id: 1, text: 'Prepare water, a flashlight and first-aid supplies.', category: 'Before' },
  { id: 2, text: 'Identify safe places away from windows.', category: 'Before' },
  { id: 3, text: 'Drop, cover and hold on.', category: 'During' },
  { id: 4, text: 'Stay away from glass and tall furniture.', category: 'During' },
  { id: 5, text: 'Check for injuries and dangerous damage.', category: 'After' },
  { id: 6, text: 'Be ready for aftershocks.', category: 'After' },
]

export const quizQuestions = [
  {
    question: 'What was the magnitude of the main event used in this report?',
    choices: ['4.2', '5.1', '6.2', '8.4'],
    answer: '6.2',
  },
  {
    question: 'Where was the earthquake located?',
    choices: ['Near Mene Grande', 'Near Caracas only', 'Near Bogotá', 'Near Lima'],
    answer: 'Near Mene Grande',
  },
  {
    question: 'Which sentence correctly combines past continuous and past simple?',
    choices: [
      'People were sleeping when the ground shook.',
      'People sleeping when the ground shake.',
      'People sleep when ground was shake.',
      'People were sleep when the ground shook.',
    ],
    answer: 'People were sleeping when the ground shook.',
  },
  {
    question: 'What should you do during strong shaking indoors?',
    choices: ['Run to the elevator', 'Stand next to windows', 'Drop, cover and hold on', 'Hide under glass'],
    answer: 'Drop, cover and hold on',
  },
  {
    question: 'What is an aftershock?',
    choices: [
      'A smaller earthquake after a larger one',
      'A weather storm',
      'A volcanic cloud',
      'A flood wave',
    ],
    answer: 'A smaller earthquake after a larger one',
  },
  {
    question: 'Which source provides the earthquake measurements in this project?',
    choices: ['USGS', 'A random social media post', 'A movie', 'A game'],
    answer: 'USGS',
  },
]

export const magnitudeLevels = [
  { min: 1, max: 2.9, label: 'Usually not felt', detail: 'Very small seismic events.' },
  { min: 3, max: 3.9, label: 'Often felt lightly', detail: 'Indoor objects may move slightly.' },
  { min: 4, max: 4.9, label: 'Noticeable shaking', detail: 'Many people may feel it.' },
  { min: 5, max: 5.9, label: 'Strong enough to cause damage', detail: 'Weak structures may be affected.' },
  { min: 6, max: 6.9, label: 'Strong earthquake', detail: 'Potential for significant local damage.' },
  { min: 7, max: 7.9, label: 'Major earthquake', detail: 'Serious damage can occur over a wide area.' },
  { min: 8, max: 10, label: 'Great earthquake', detail: 'Can cause very severe regional impacts.' },
]
