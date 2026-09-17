import React, { useEffect, useMemo, useRef, useState } from 'react'
import './earthquake.css'
import {
  earthquakeEffects,
  earthquakeFacts,
  grammarQuestions,
  magnitudeLevels,
  quizQuestions,
  safetyActions,
  safetyDonts,
  safetyDos,
  vocabulary,
} from './earthquakeData.js'

const sections = [
  ['story', 'Story'],
  ['science', 'Science'],
  ['language', 'English Lab'],
  ['safety', 'Safety'],
  ['quiz', 'Final Quiz'],
]

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function FactCard({ label, value, note }) {
  return (
    <article className="eq-fact-card">
      <span className="eq-fact-label">{label}</span>
      <strong>{value}</strong>
      {note && <small>{note}</small>}
    </article>
  )
}

function Reveal({ children, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`eq-reveal ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  )
}

function SectionTitle({ eyebrow, title, children }) {
  return (
    <Reveal className="eq-section-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </Reveal>
  )
}

function GrammarGame() {
  const [answers, setAnswers] = useState({})

  const score = Object.entries(answers).reduce((total, [index, answer]) => {
    return total + (grammarQuestions[Number(index)]?.answer === answer ? 1 : 0)
  }, 0)

  return (
    <div className="eq-game-shell">
      <div className="eq-game-topline">
        <div>
          <span className="eq-chip">Grammar challenge</span>
          <h3>What were people doing when it happened?</h3>
        </div>
        <strong className="eq-score">{score}/{grammarQuestions.length}</strong>
      </div>

      <div className="eq-question-grid">
        {grammarQuestions.map((item, index) => {
          const selected = answers[index]
          const isCorrect = selected === item.answer
          return (
            <article className="eq-question-card" key={item.prompt}>
              <p>{item.prompt}</p>
              <div className="eq-choice-row">
                {item.choices.map((choice) => (
                  <button
                    type="button"
                    key={choice}
                    className={`eq-choice ${selected === choice ? 'is-selected' : ''} ${
                      selected && choice === item.answer ? 'is-correct' : ''
                    } ${selected === choice && !isCorrect ? 'is-wrong' : ''}`}
                    onClick={() => setAnswers((prev) => ({ ...prev, [index]: choice }))}
                  >
                    {choice}
                  </button>
                ))}
              </div>
              {selected && (
                <div className={`eq-feedback ${isCorrect ? 'is-correct' : 'is-wrong'}`}>
                  <strong>{isCorrect ? 'Correct!' : 'Try again.'}</strong> {item.explanation}
                </div>
              )}
            </article>
          )
        })}
      </div>
    </div>
  )
}

function VocabularyLab() {
  const [open, setOpen] = useState([])

  function toggle(index) {
    setOpen((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  return (
    <div className="eq-vocab-grid">
      {vocabulary.map((item, index) => {
        const flipped = open.includes(index)
        return (
          <button
            type="button"
            key={item.word}
            className={`eq-vocab-card ${flipped ? 'is-flipped' : ''}`}
            onClick={() => toggle(index)}
            aria-pressed={flipped}
          >
            <span className="eq-vocab-icon">{item.icon}</span>
            <strong>{flipped ? item.meaning : item.word}</strong>
            <small>{flipped ? item.pronunciation : 'Tap to reveal'}</small>
          </button>
        )
      })}
    </div>
  )
}

function SafetyGame() {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [result, setResult] = useState(null)
  const [finished, setFinished] = useState(false)

  const action = safetyActions[current]

  function answer(category) {
    if (result) return
    const correct = category === action.category
    setResult(correct ? 'correct' : 'wrong')
    if (correct) setScore((value) => value + 1)
  }

  function next() {
    if (current === safetyActions.length - 1) {
      setFinished(true)
      return
    }
    setCurrent((value) => value + 1)
    setResult(null)
  }

  function restart() {
    setCurrent(0)
    setScore(0)
    setResult(null)
    setFinished(false)
  }

  if (finished) {
    return (
      <div className="eq-safety-card eq-centered-card">
        <img src="/earthquake/images/emergency-kit.svg" alt="Illustration of an emergency kit" />
        <span className="eq-chip">Mission complete</span>
        <h3>{score === safetyActions.length ? 'Perfect safety score!' : 'Great practice!'}</h3>
        <p>You scored {score} out of {safetyActions.length}. Safety knowledge helps us react calmly.</p>
        <button className="eq-primary-btn" type="button" onClick={restart}>Play again</button>
      </div>
    )
  }

  return (
    <div className="eq-safety-card">
      <div className="eq-progress-line">
        <span style={{ width: `${((current + 1) / safetyActions.length) * 100}%` }} />
      </div>
      <span className="eq-kicker">Action {current + 1} of {safetyActions.length}</span>
      <h3>{action.text}</h3>
      <p>When should you do this?</p>
      <div className="eq-three-buttons">
        {['Before', 'During', 'After'].map((category) => (
          <button type="button" key={category} onClick={() => answer(category)}>{category}</button>
        ))}
      </div>
      {result && (
        <div className={`eq-feedback ${result === 'correct' ? 'is-correct' : 'is-wrong'}`}>
          {result === 'correct' ? 'Correct!' : `Not quite. This belongs in “${action.category}”.`}
          <button type="button" className="eq-inline-btn" onClick={next}>
            {current === safetyActions.length - 1 ? 'See result' : 'Next action →'}
          </button>
        </div>
      )}
    </div>
  )
}

function FinalQuiz() {
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState(null)
  const [done, setDone] = useState(false)

  const current = quizQuestions[index]

  function choose(choice) {
    if (selected) return
    setSelected(choice)
    if (choice === current.answer) setScore((value) => value + 1)
  }

  function next() {
    if (index === quizQuestions.length - 1) {
      setDone(true)
      return
    }
    setIndex((value) => value + 1)
    setSelected(null)
  }

  function reset() {
    setIndex(0)
    setScore(0)
    setSelected(null)
    setDone(false)
  }

  if (done) {
    const percent = Math.round((score / quizQuestions.length) * 100)
    return (
      <div className="eq-certificate">
        <span className="eq-certificate-star">★</span>
        <span className="eq-chip">Final result</span>
        <h3>{percent >= 80 ? 'Earthquake Expert!' : 'Earthquake Explorer!'}</h3>
        <p>You answered {score} of {quizQuestions.length} questions correctly.</p>
        <div className="eq-certificate-score">{percent}%</div>
        <button type="button" className="eq-primary-btn" onClick={reset}>Try the quiz again</button>
      </div>
    )
  }

  return (
    <div className="eq-quiz-card">
      <div className="eq-progress-line">
        <span style={{ width: `${((index + 1) / quizQuestions.length) * 100}%` }} />
      </div>
      <span className="eq-kicker">Question {index + 1} of {quizQuestions.length}</span>
      <h3>{current.question}</h3>
      <div className="eq-quiz-options">
        {current.choices.map((choice) => {
          const isAnswer = choice === current.answer
          const isSelected = choice === selected
          return (
            <button
              type="button"
              key={choice}
              className={`${selected && isAnswer ? 'is-correct' : ''} ${selected && isSelected && !isAnswer ? 'is-wrong' : ''}`}
              onClick={() => choose(choice)}
            >
              {choice}
            </button>
          )
        })}
      </div>
      {selected && (
        <div className={`eq-feedback ${selected === current.answer ? 'is-correct' : 'is-wrong'}`}>
          {selected === current.answer ? 'Excellent!' : `Correct answer: ${current.answer}`}
          <button type="button" className="eq-inline-btn" onClick={next}>
            {index === quizQuestions.length - 1 ? 'Finish quiz' : 'Next question →'}
          </button>
        </div>
      )}
    </div>
  )
}

export default function EarthquakeExperience({ onBack }) {
  const [magnitude, setMagnitude] = useState(6.2)
  const [shake, setShake] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [reporterText, setReporterText] = useState('')

  const magnitudeInfo = useMemo(() => {
    return magnitudeLevels.find((level) => magnitude >= level.min && magnitude <= level.max) || magnitudeLevels[0]
  }, [magnitude])

  function simulateShake() {
    setShake(false)
    window.requestAnimationFrame(() => {
      setShake(true)
      window.setTimeout(() => setShake(false), 900)
    })
  }

  return (
    <main className="eq-page">
      <header className="eq-hero" id="top">
        <div className="eq-hero-noise" aria-hidden="true" />
        <div className="eq-container eq-hero-grid">
          <div className="eq-hero-copy">
            <div className="eq-topbar">
              <span className="eq-brand">🌎 Disaster Watch Venezuela</span>
              {onBack && (
                <button className="eq-back-btn" type="button" onClick={onBack}>← Back</button>
              )}
              <span className="eq-live-pill"><span /> Interactive school project</span>
            </div>
            <p className="eq-eyebrow">UNIT 4 · DISASTER!</p>
            <h1>WHEN THE<br /><em>GROUND SHOOK</em></h1>
            <p className="eq-hero-subtitle">An Interactive Earthquake Report about the 2025 Venezuela earthquake sequence.</p>
            <div className="eq-hero-actions">
              <button type="button" className="eq-primary-btn" onClick={() => scrollToSection('story')}>Start experience ↓</button>
              <button type="button" className="eq-secondary-btn" onClick={() => scrollToSection('quiz')}>Take the quiz</button>
            </div>
            <div className="eq-byline">
              <span>Created by</span>
              <strong>Fernando Luis Díaz Fajardo & Juan Manuel Guzmán Páez</strong>
            </div>
          </div>
          <div className={`eq-hero-visual ${shake ? 'eq-is-shaking' : ''}`}>
            <img src="/earthquake/images/hero-earthquake.svg" alt="Stylized illustration of seismic waves and a city" />
            <div className="eq-magnitude-orb"><span>M</span><strong>6.2</strong><small>main event</small></div>
            <button type="button" className="eq-shake-btn" onClick={simulateShake}>Feel the shake</button>
          </div>
        </div>
      </header>

      <nav className="eq-sticky-nav" aria-label="Earthquake project sections">
        <div className="eq-container">
          {sections.map(([id, label]) => (
            <button type="button" key={id} onClick={() => scrollToSection(id)}>{label}</button>
          ))}
        </div>
      </nav>

      <section className="eq-section eq-story" id="story">
        <div className="eq-container">
          <SectionTitle eyebrow="01 · The event" title="What happened?">
            An earthquake is a sudden shaking of the ground caused by a fast release of energy inside the Earth's crust. On 24 September 2025, a strong earthquake was recorded near Mene Grande in western Venezuela. This page uses verified USGS measurements for the science facts.
          </SectionTitle>

          <Reveal className="eq-facts-grid eq-stagger">
            <FactCard label="Magnitude" value={`M ${earthquakeFacts.mainEvent.magnitude}`} note="USGS main event" />
            <FactCard label="Date" value={earthquakeFacts.mainEvent.date} note={earthquakeFacts.mainEvent.localTime} />
            <FactCard label="Depth" value={earthquakeFacts.mainEvent.depth} note="Shallow earthquake" />
            <FactCard label="Location" value="Mene Grande" note="Western Venezuela" />
          </Reveal>

          <Reveal className="eq-story-grid">
            <article className="eq-story-copy">
              <span className="eq-chip">The story</span>
              <h3>A sudden movement beneath the surface</h3>
              <p>
                The main event in this report measured <strong>magnitude 6.2</strong> and occurred about 24 km east-northeast of Mene Grande. A later <strong>magnitude 6.3</strong> earthquake was also recorded in the same area.
              </p>
              <p>
                Earthquakes happen when stress in the Earth’s crust is suddenly released along faults. The energy travels as seismic waves and makes the ground move.
              </p>
              <div className="eq-callout">
                <strong>Think like a reporter:</strong>
                <span>What were people doing when the earthquake happened?</span>
              </div>
            </article>

            <article className="eq-map-card">
              <div className="eq-map-topline"><span>Epicenter map</span><strong>Venezuela</strong></div>
              <img src="/earthquake/images/venezuela-map.svg" alt="Stylized educational map locating the earthquake near Mene Grande, Venezuela" />
              <div className="eq-map-meta">
                <span>9.9222° N</span>
                <span>70.7174° W</span>
              </div>
            </article>
          </Reveal>

          <div className="eq-subsection-head">
            <span className="eq-chip">Effects</span>
            <h3>What damage can an earthquake like this cause?</h3>
          </div>
          <p className="eq-effects-note">{earthquakeEffects.note}</p>
          <Reveal className="eq-effects-grid eq-stagger">
            {earthquakeEffects.items.map((item) => (
              <article className="eq-effect-card" key={item.text}>
                <span aria-hidden="true">{item.icon}</span>
                <p>{item.text}</p>
              </article>
            ))}
          </Reveal>

          <Reveal className="eq-video-wrap">
            <div className="eq-video-copy">
              <span className="eq-chip">20-second visual story</span>
              <h3>Imagine the moment</h3>
              <p>
                Place your video at <code>public/earthquake/video/venezuela-earthquake.mp4</code>. The player will appear here automatically.
              </p>
              <small>Recommended label if the clip is AI-generated or dramatized: “Educational simulation — not archival footage.”</small>
            </div>
            <div className="eq-video-player">
              {!videoError ? (
                <video
                  controls
                  preload="metadata"
                  poster="/earthquake/images/video-poster.svg"
                  onError={() => setVideoError(true)}
                >
                  <source src="/earthquake/video/venezuela-earthquake.mp4" type="video/mp4" />
                </video>
              ) : (
                <div className="eq-video-placeholder">
                  <span>▶</span>
                  <strong>Your video goes here</strong>
                  <small>venezuela-earthquake.mp4</small>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="eq-section eq-dark-section" id="science">
        <div className="eq-container">
          <SectionTitle eyebrow="02 · Earth science" title="How does an earthquake happen?">
            Move the magnitude slider, then trigger the simulator. This is a learning model, not a prediction tool.
          </SectionTitle>

          <Reveal className="eq-science-grid">
            <div className={`eq-plates-card ${shake ? 'eq-is-shaking' : ''}`}>
              <img src="/earthquake/images/tectonic-plates.svg" alt="Educational diagram showing tectonic stress and a fault" />
              <div className="eq-wave-lines" aria-hidden="true"><i /><i /><i /></div>
            </div>
            <div className="eq-simulator-card">
              <span className="eq-chip">Magnitude simulator</span>
              <div className="eq-big-number">{Number(magnitude).toFixed(1)}</div>
              <input
                type="range"
                min="1"
                max="9"
                step="0.1"
                value={magnitude}
                onChange={(event) => setMagnitude(Number(event.target.value))}
                aria-label="Earthquake magnitude"
              />
              <div className="eq-scale"><span>1.0</span><span>5.0</span><span>9.0</span></div>
              <h3>{magnitudeInfo.label}</h3>
              <p>{magnitudeInfo.detail}</p>
              <button type="button" className="eq-primary-btn" onClick={simulateShake}>Simulate movement</button>
            </div>
          </Reveal>

          <Reveal className="eq-timeline eq-stagger">
            <article>
              <span>18:21:55</span>
              <strong>Main event</strong>
              <p>M 6.2 · 24 km ENE of Mene Grande · depth 7.8 km</p>
            </article>
            <article>
              <span>Hours later</span>
              <strong>Continued seismic activity</strong>
              <p>People remained alert for more movement and aftershocks.</p>
            </article>
            <article>
              <span>03:51:39 UTC</span>
              <strong>Strong later event</strong>
              <p>M 6.3 · 25 km ENE of Mene Grande · depth 14 km</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="eq-section" id="language">
        <div className="eq-container">
          <SectionTitle eyebrow="03 · English lab" title="Learn English through the story">
            Unit 4 connects disasters with past continuous and past simple. Complete the challenges below.
          </SectionTitle>

          <GrammarGame />

          <div className="eq-subsection-head">
            <span className="eq-chip">Vocabulary lab</span>
            <h3>Tap each card to reveal the Spanish meaning and pronunciation.</h3>
          </div>
          <VocabularyLab />

          <div className="eq-reporter-card">
            <div>
              <span className="eq-chip">Be the reporter</span>
              <h3>Write 3 short sentences</h3>
              <p>Use this pattern: <strong>“People were ___ when the ground ___.”</strong></p>
              <div className="eq-starters">
                <button type="button" onClick={() => setReporterText((t) => `${t}${t ? '\n' : ''}People were having dinner when the ground started to shake.`)}>+ dinner</button>
                <button type="button" onClick={() => setReporterText((t) => `${t}${t ? '\n' : ''}Children were doing homework when the lights went out.`)}>+ homework</button>
                <button type="button" onClick={() => setReporterText((t) => `${t}${t ? '\n' : ''}Families were talking outside when another tremor happened.`)}>+ families</button>
              </div>
            </div>
            <textarea
              value={reporterText}
              onChange={(event) => setReporterText(event.target.value)}
              placeholder="Write your mini report here..."
              rows="7"
              aria-label="Mini report writing area"
            />
          </div>
        </div>
      </section>

      <section className="eq-section eq-safety-section" id="safety">
        <div className="eq-container">
          <SectionTitle eyebrow="04 · Safety mission" title="Before, during or after?">
            Choose when each safety action belongs. The goal is to learn calm, practical responses.
          </SectionTitle>

          <Reveal className="eq-dodont-grid eq-stagger">
            <div className="eq-do-list">
              <h4>✅ Do</h4>
              <ul>
                {safetyDos.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>
            <div className="eq-dont-list">
              <h4>❌ Don't</h4>
              <ul>
                {safetyDonts.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <SafetyGame />
        </div>
      </section>

      <section className="eq-section eq-quiz-section" id="quiz">
        <div className="eq-container eq-quiz-layout">
          <div>
            <SectionTitle eyebrow="05 · Final challenge" title="Are you an Earthquake Expert?">
              Six questions mix science, English and safety. Finish the challenge to reveal your score.
            </SectionTitle>
            <div className="eq-quiz-badges">
              <span>🌎 Science</span><span>🗣️ English</span><span>🎒 Safety</span>
            </div>
          </div>
          <FinalQuiz />
        </div>
      </section>

      <footer className="eq-footer">
        <div className="eq-container eq-footer-grid">
          <div>
            <span className="eq-eyebrow">STUDENT PROJECT</span>
            <h2>When the Ground Shook</h2>
            <p>Created by Fernando Luis Díaz Fajardo & Juan Manuel Guzmán Páez.</p>
          </div>
          <div>
            <strong>Verified science sources</strong>
            <a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000rcnw" target="_blank" rel="noreferrer">USGS · M 6.2 main event</a>
            <a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000rcqw" target="_blank" rel="noreferrer">USGS · M 6.3 later event</a>
            <small>Educational project. Simulated visuals should not be presented as archival footage.</small>
          </div>
        </div>
      </footer>
    </main>
  )
}
