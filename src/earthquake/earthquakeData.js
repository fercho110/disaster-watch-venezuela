export const students = [
  {
    name: 'Fernando Luis Díaz Álvarez',
    role: 'Young Reporter',
    photo: '/earthquake/images/redesign/team/fernando-young-reporter.png',
    quote: 'Let’s learn how to stay safe!',
  },
  {
    name: 'Juan Manuel Guzmán Páez',
    role: 'Young Reporter',
    photo: '/earthquake/images/redesign/team/juan-manuel-young-reporter.png',
    quote: 'Let’s discover what happened!',
  },
]

export const presenterVideos = {
  earthquake: {
    name: 'Juan Manuel Guzmán Páez',
    photo: '/earthquake/images/redesign/team/juan-manuel-young-reporter.png',
    title: 'Juan Manuel’s Report',
    src: '/earthquake/video/juan-manuel-earthquake.mp4',
  },
  safety: {
    name: 'Fernando Luis Díaz Álvarez',
    photo: '/earthquake/images/redesign/team/fernando-young-reporter.png',
    title: 'Fernando’s Safety Tip',
    src: '/earthquake/video/fernando-safety-tip.mp4',
  },
}

export const eventFacts = [
  { icon: '📅', label: 'DATE', value: 'September 24, 2025' },
  { icon: '📍', label: 'PLACE', value: 'Near Mene Grande, Venezuela' },
  { icon: '📊', label: 'MAGNITUDE', value: '6.2' },
  { icon: '🌎', label: 'DEPTH', value: '7.8 km' },
]

export const laterEvent = {
  text: 'A second, stronger earthquake (M 6.3) hit the same area on September 25, 2025.',
  source: 'USGS',
  url: 'https://earthquake.usgs.gov/earthquakes/eventpage/us6000rcqw',
}

export const earthquakeEffects = {
  note: 'General educational explanation — not a specific damage report for this event.',
  items: [
    { icon: '🏚️', text: 'Buildings and roads can be damaged.' },
    { icon: '⚡', text: 'Power and water may stop working.' },
    { icon: '🚑', text: 'People may need rescue and help.' },
    { icon: '😟', text: 'Families may need a safe shelter.' },
  ],
}

export const usgsSources = [
  { label: 'USGS · M 6.2 main event', url: 'https://earthquake.usgs.gov/earthquakes/eventpage/us6000rcnw' },
  { label: 'USGS · M 6.3 later event', url: 'https://earthquake.usgs.gov/earthquakes/eventpage/us6000rcqw' },
]

export const earthquakeSteps = [
  { number: 1, text: 'Tectonic plates move.' },
  { number: 2, text: 'Pressure builds.' },
  { number: 3, text: 'The fault moves suddenly.' },
  { number: 4, text: 'The ground shakes.' },
]

export const safetyStages = [
  {
    id: 'before',
    label: 'BEFORE',
    icon: '✅',
    tips: ['Prepare an emergency kit.', 'Know a safe place.', 'Practice with your family.'],
  },
  {
    id: 'during',
    label: 'DURING',
    icon: '🛡️',
    tips: ['Drop, cover and hold on.', 'Stay away from windows.', 'Stay calm.'],
  },
  {
    id: 'after',
    label: 'AFTER',
    icon: '👥',
    tips: ['Check for injuries.', 'Move away from damaged buildings.', 'Listen to the authorities.'],
  },
]

export const vocabulary = [
  { word: 'DISASTER', meaning: 'a very bad event that causes damage.' },
  { word: 'EARTHQUAKE', meaning: 'sudden shaking of the ground.' },
  { word: 'VOLCANO', meaning: 'a mountain that can erupt.' },
  { word: 'HURRICANE', meaning: 'a very strong storm with powerful winds.' },
  { word: 'TSUNAMI', meaning: 'a very large sea wave.' },
  { word: 'LIGHTNING', meaning: 'a bright flash of electricity in a storm.' },
  { word: 'FLOOD', meaning: 'too much water covering land that is usually dry.' },
  { word: 'WILDFIRE', meaning: 'a large fire that burns forests or fields quickly.' },
  { word: 'RESCUE', meaning: 'help someone in danger.', optional: true },
]

export const grammarExamples = [
  'People were sleeping when the earthquake started.',
  'Families were having dinner when the ground shook.',
  'Children were studying when the shaking began.',
]

export const grammarChallenge = {
  prompt: 'People ___ dinner when the earthquake started.',
  choices: ['were having', 'had'],
  answer: 'were having',
  feedback: '“Were having” tells us what was happening at that moment.',
}

export const whyBecause = {
  question: 'Why did people move away from damaged buildings after the shaking stopped?',
  answer: 'Because it was safer.',
}

export const finalChallenge = {
  pictureQuestion: {
    prompt: 'Which picture shows an earthquake?',
    options: [
      { emoji: '🌍', label: 'Earthquake', correct: true },
      { emoji: '🌋', label: 'Volcano', correct: false },
      { emoji: '🌪️', label: 'Hurricane', correct: false },
    ],
  },
  completeSentence: {
    prompt: 'People ______ when the earthquake started.',
    choices: ['were sleeping', 'sleeps'],
    answer: 'were sleeping',
  },
  orderSteps: ['Before', 'During', 'After'],
}
