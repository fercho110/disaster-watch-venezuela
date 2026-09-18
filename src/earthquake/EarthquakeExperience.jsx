import React, { useEffect, useRef, useState } from 'react'
import './earthquake.css'
import {
  earthquakeSteps,
  eventFacts,
  finalChallenge,
  grammarChallenge,
  grammarExamples,
  presenterVideos,
  safetyStages,
  students,
  vocabulary,
  whyBecause,
} from './earthquakeData.js'

const stations = [
  ['hero', '🏠 Home'],
  ['reporters', '🧒 Team'],
  ['what-happened', '📅 Event'],
  ['video', '🎥 Video'],
  ['process', '🌍 Science'],
  ['safety', '🛡️ Safe'],
  ['vocabulary', '📖 Words'],
  ['grammar', '✏️ Grammar'],
  ['why-because', '❓ Why'],
  ['challenge', '🏆 Challenge'],
  ['credits', '🎓 Credits'],
]

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
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

function StationHeading({ eyebrow, title, intro }) {
  return (
    <Reveal className="eq-station-heading">
      <span className="eq-eyebrow-chip">{eyebrow}</span>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </Reveal>
  )
}

function PresenterVideo({ video }) {
  const [error, setError] = useState(false)

  return (
    <Reveal className="eq-presenter-card">
      <div className="eq-presenter-header">
        <img src={video.photo} alt={video.name} loading="lazy" />
        <strong>{video.title}</strong>
      </div>
      {!error ? (
        <video controls preload="metadata" onError={() => setError(true)}>
          <source src={video.src} type="video/mp4" />
        </video>
      ) : (
        <div className="eq-presenter-placeholder">
          <span aria-hidden="true">▶</span>
          <p>Educational video will be added here.</p>
        </div>
      )}
    </Reveal>
  )
}

function FactCard({ fact }) {
  const [revealed, setRevealed] = useState(false)
  return (
    <button
      type="button"
      className={`eq-fact-flip ${revealed ? 'is-revealed' : ''}`}
      onClick={() => setRevealed(true)}
      aria-pressed={revealed}
    >
      <span className="eq-fact-flip-icon" aria-hidden="true">{fact.icon}</span>
      <strong className="eq-fact-flip-label">{fact.label}</strong>
      {revealed ? (
        <span className="eq-fact-flip-value">{fact.value}</span>
      ) : (
        <span className="eq-fact-flip-hint">Tap to reveal</span>
      )}
    </button>
  )
}

function VocabularyCards() {
  const [open, setOpen] = useState([])

  function toggle(index) {
    setOpen((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  return (
    <div className="eq-word-grid">
      {vocabulary.map((item, index) => {
        const flipped = open.includes(index)
        return (
          <button
            type="button"
            key={item.word}
            className={`eq-word-card ${flipped ? 'is-flipped' : ''} ${item.optional ? 'is-bonus' : ''}`}
            onClick={() => toggle(index)}
            aria-pressed={flipped}
          >
            {item.optional && <span className="eq-word-bonus">Bonus</span>}
            <strong>{item.word}</strong>
            <small>{flipped ? item.meaning : 'Tap the card'}</small>
          </button>
        )
      })}
    </div>
  )
}

function GrammarMiniQuiz() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="eq-grammar-quiz">
      <p className="eq-grammar-prompt">{grammarChallenge.prompt}</p>
      <div className="eq-choice-row">
        {grammarChallenge.choices.map((choice) => {
          const isCorrect = choice === grammarChallenge.answer
          return (
            <button
              type="button"
              key={choice}
              className={`eq-choice-pill ${selected === choice ? (isCorrect ? 'is-correct' : 'is-wrong') : ''}`}
              onClick={() => setSelected(choice)}
            >
              {choice}
            </button>
          )
        })}
      </div>
      {selected && (
        <div className={`eq-feedback-box ${selected === grammarChallenge.answer ? 'is-correct' : 'is-wrong'}`}>
          {selected === grammarChallenge.answer ? (
            <>
              <strong>Great job! 🎉</strong> {grammarChallenge.feedback}
            </>
          ) : (
            <>Not quite — the answer is “{grammarChallenge.answer}.”</>
          )}
        </div>
      )}
    </div>
  )
}

function WhyBecause() {
  const [revealed, setRevealed] = useState(false)
  const [ownSentence, setOwnSentence] = useState('')

  return (
    <div className="eq-why-card">
      <p className="eq-why-question">❓ {whyBecause.question}</p>
      {revealed ? (
        <p className="eq-why-answer">✅ {whyBecause.answer}</p>
      ) : (
        <button type="button" className="eq-primary-btn" onClick={() => setRevealed(true)}>
          Show the answer
        </button>
      )}
      <div className="eq-why-own">
        <p>Now make your own Why...? / Because... sentence.</p>
        <textarea
          value={ownSentence}
          onChange={(event) => setOwnSentence(event.target.value)}
          placeholder="Why...? Because..."
          rows="3"
          aria-label="Write your own Why / Because sentence"
        />
      </div>
    </div>
  )
}

function PictureChallenge({ onDone }) {
  const [selected, setSelected] = useState(null)
  const question = finalChallenge.pictureQuestion

  function choose(option) {
    setSelected(option.label)
    if (option.correct) onDone()
  }

  return (
    <article className="eq-challenge-card">
      <span className="eq-challenge-number">1</span>
      <h3>{question.prompt}</h3>
      <div className="eq-picture-options">
        {question.options.map((option) => (
          <button
            type="button"
            key={option.label}
            className={`eq-picture-option ${selected === option.label ? (option.correct ? 'is-correct' : 'is-wrong') : ''}`}
            onClick={() => choose(option)}
          >
            <span aria-hidden="true">{option.emoji}</span>
            {option.label}
          </button>
        ))}
      </div>
      {selected && (
        <p className={`eq-challenge-feedback ${question.options.find((o) => o.label === selected)?.correct ? 'is-correct' : 'is-wrong'}`}>
          {question.options.find((o) => o.label === selected)?.correct ? 'Correct! 🎉' : 'Try again!'}
        </p>
      )}
    </article>
  )
}

function SentenceChallenge({ onDone }) {
  const [selected, setSelected] = useState(null)
  const question = finalChallenge.completeSentence

  function choose(choice) {
    setSelected(choice)
    if (choice === question.answer) onDone()
  }

  return (
    <article className="eq-challenge-card">
      <span className="eq-challenge-number">2</span>
      <h3>{question.prompt}</h3>
      <div className="eq-choice-row">
        {question.choices.map((choice) => (
          <button
            type="button"
            key={choice}
            className={`eq-choice-pill ${selected === choice ? (choice === question.answer ? 'is-correct' : 'is-wrong') : ''}`}
            onClick={() => choose(choice)}
          >
            {choice}
          </button>
        ))}
      </div>
      {selected && (
        <p className={`eq-challenge-feedback ${selected === question.answer ? 'is-correct' : 'is-wrong'}`}>
          {selected === question.answer ? 'Correct! 🎉' : `Try again! The answer is “${question.answer}.”`}
        </p>
      )}
    </article>
  )
}

function OrderChallenge({ onDone }) {
  const [order, setOrder] = useState([])
  const steps = finalChallenge.orderSteps

  function pick(step) {
    if (order.includes(step)) return
    const next = [...order, step]
    setOrder(next)
    if (next.length === steps.length) {
      const isCorrect = next.every((value, index) => value === steps[index])
      if (isCorrect) onDone()
      else setTimeout(() => setOrder([]), 900)
    }
  }

  return (
    <article className="eq-challenge-card">
      <span className="eq-challenge-number">3</span>
      <h3>Put the safety steps in order</h3>
      <div className="eq-choice-row">
        {steps.map((step) => (
          <button
            type="button"
            key={step}
            className={`eq-choice-pill ${order.includes(step) ? 'is-correct' : ''}`}
            onClick={() => pick(step)}
            disabled={order.includes(step)}
          >
            {step}
          </button>
        ))}
      </div>
      <p className="eq-order-trail" aria-live="polite">{order.join(' → ') || 'Tap Before, During, After — in order.'}</p>
    </article>
  )
}

function FinalChallenge() {
  const [done, setDone] = useState({ 1: false, 2: false, 3: false })
  const allDone = done[1] && done[2] && done[3]

  if (allDone) {
    return (
      <div className="eq-completion-card">
        <span className="eq-completion-stars" aria-hidden="true">⭐ ⭐ ⭐</span>
        <h3>GREAT JOB!</h3>
        <p>You completed the Disaster Watch Venezuela report.</p>
        <button type="button" className="eq-primary-btn" onClick={() => scrollToSection('credits')}>
          FINISH THE REPORT
        </button>
      </div>
    )
  }

  return (
    <div className="eq-challenge-grid">
      <PictureChallenge onDone={() => setDone((prev) => ({ ...prev, 1: true }))} />
      <SentenceChallenge onDone={() => setDone((prev) => ({ ...prev, 2: true }))} />
      <OrderChallenge onDone={() => setDone((prev) => ({ ...prev, 3: true }))} />
    </div>
  )
}

export default function EarthquakeExperience() {
  const [videoError, setVideoError] = useState(false)

  return (
    <main className="eq-page">
      <nav className="eq-station-nav" aria-label="Report stations">
        <div className="eq-station-nav-inner">
          {stations.map(([id, label]) => (
            <button type="button" key={id} onClick={() => scrollToSection(id)}>{label}</button>
          ))}
        </div>
      </nav>

      <header className="eq-hero" id="hero">
        <div className="eq-hero-media">
          <img src="/earthquake/images/redesign/hero/young-reporters-hero.png" alt="Fernando and Juan Manuel, two young reporters, standing in front of a map of Venezuela with seismograph lines and a cracked street" />
        </div>
        <div className="eq-hero-panel">
          <span className="eq-eyebrow-chip">YOUNG REPORTERS PRESENT</span>
          <h1>DISASTER WATCH<br />VENEZUELA</h1>
          <p className="eq-hero-subtitle">When the Ground Shook</p>
          <p className="eq-hero-description">An Interactive Earthquake Report</p>
          <div className="eq-speech-bubble">Hi! We are your young reporters. Let’s discover what happened!</div>
          <div className="eq-hero-actions">
            <button type="button" className="eq-primary-btn" onClick={() => scrollToSection('reporters')}>START THE REPORT</button>
            <button type="button" className="eq-secondary-btn" onClick={() => scrollToSection('video')}>WATCH THE VIDEO</button>
          </div>
          <div className="eq-byline">
            <span>Presented by</span>
            <strong>Fernando Luis Díaz Álvarez &amp; Juan Manuel Guzmán Páez</strong>
          </div>
        </div>
      </header>

      <section className="eq-station" id="reporters">
        <div className="eq-container">
          <StationHeading eyebrow="👋 Say hello" title="Meet the Young Reporters" intro="We are going to tell you about an earthquake in Venezuela." />

          <Reveal className="eq-reporter-grid eq-stagger">
            {students.map((student) => (
              <article className="eq-reporter-card" key={student.name}>
                <img src={student.photo} alt={`${student.name}, young reporter`} loading="lazy" />
                <strong>{student.name}</strong>
                <small>{student.role}</small>
                <div className="eq-speech-bubble eq-speech-bubble-small">{student.quote}</div>
              </article>
            ))}
          </Reveal>

          <div className="eq-station-cta">
            <button type="button" className="eq-primary-btn" onClick={() => scrollToSection('what-happened')}>LET'S BEGIN</button>
          </div>
        </div>
      </section>

      <section className="eq-station eq-station-alt" id="what-happened">
        <div className="eq-container">
          <StationHeading eyebrow="📰 The report" title="What Happened?" intro="A strong earthquake shook the area." />

          <Reveal className="eq-facts-grid eq-stagger">
            {eventFacts.map((fact) => (
              <FactCard key={fact.label} fact={fact} />
            ))}
          </Reveal>

          <Reveal className="eq-map-card">
            <img src="/earthquake/images/venezuela-map.svg" alt="Map of Venezuela showing the earthquake location near Mene Grande" loading="lazy" />
          </Reveal>

          <PresenterVideo video={presenterVideos.earthquake} />

          <div className="eq-station-cta">
            <button type="button" className="eq-primary-btn" onClick={() => scrollToSection('process')}>SEE HOW IT HAPPENS</button>
          </div>
        </div>
      </section>

      <section className="eq-station" id="video">
        <div className="eq-container">
          <StationHeading eyebrow="🎬 Look closely" title="Watch the Video" intro="Watch carefully. What were people doing when the ground started to shake?" />

          <Reveal className="eq-video-frame">
            {!videoError ? (
              <video controls preload="metadata" poster="/earthquake/images/video-poster.svg" onError={() => setVideoError(true)}>
                <source src="/earthquake/video/venezuela-earthquake.mp4" type="video/mp4" />
              </video>
            ) : (
              <div className="eq-video-placeholder">
                <span aria-hidden="true">▶</span>
                <strong>Educational video will be added here.</strong>
              </div>
            )}
            <small className="eq-video-note">Educational video / recreation</small>
          </Reveal>
        </div>
      </section>

      <section className="eq-station eq-station-alt" id="process">
        <div className="eq-container">
          <StationHeading eyebrow="🌍 Earth science" title="How Does an Earthquake Happen?" />

          <Reveal className="eq-process-image">
            <img src="/earthquake/images/redesign/sections/earthquake-process.png" alt="Four illustrated steps showing tectonic plates moving, pressure building, the fault breaking and buildings shaking" loading="lazy" />
          </Reveal>

          <Reveal className="eq-steps-grid eq-stagger">
            {earthquakeSteps.map((step) => (
              <article className="eq-step-card" key={step.number}>
                <span className="eq-step-number">{step.number}</span>
                <p>{step.text}</p>
              </article>
            ))}
          </Reveal>

          <p className="eq-station-closing">That shaking is an earthquake.</p>

          <div className="eq-station-cta">
            <button type="button" className="eq-primary-btn" onClick={() => scrollToSection('safety')}>NEXT: STAY SAFE</button>
          </div>
        </div>
      </section>

      <section className="eq-station" id="safety">
        <div className="eq-container">
          <StationHeading eyebrow="🛡️ Be prepared" title="Stay Safe!" />

          <Reveal className="eq-safety-image">
            <img src="/earthquake/images/redesign/sections/safety-before-during-after.png" alt="Illustration of the two young reporters preparing an emergency kit, hiding under a table, and talking with a rescue worker after an earthquake" loading="lazy" />
          </Reveal>

          <Reveal className="eq-stages-grid eq-stagger">
            {safetyStages.map((stage) => (
              <article className={`eq-stage-card eq-stage-${stage.id}`} key={stage.id}>
                <span className="eq-stage-icon" aria-hidden="true">{stage.icon}</span>
                <strong>{stage.label}</strong>
                <ul>
                  {stage.tips.map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ul>
              </article>
            ))}
          </Reveal>

          <PresenterVideo video={presenterVideos.safety} />

          <div className="eq-station-cta">
            <button type="button" className="eq-primary-btn" onClick={() => scrollToSection('vocabulary')}>I KNOW WHAT TO DO</button>
          </div>
        </div>
      </section>

      <section className="eq-station eq-station-alt" id="vocabulary">
        <div className="eq-container">
          <StationHeading eyebrow="📖 Unit 4 · Disaster!" title="Disaster Words" intro="Tap a card to learn the word." />

          <Reveal className="eq-vocab-banner">
            <img src="/earthquake/images/redesign/sections/unit4-vocabulary-cards.png" alt="Illustrated cards for disaster vocabulary: earthquake, volcano, hurricane, tsunami, lightning and rescue" loading="lazy" />
          </Reveal>

          <VocabularyCards />

          <div className="eq-station-cta">
            <button type="button" className="eq-primary-btn" onClick={() => scrollToSection('grammar')}>ENGLISH TIME</button>
          </div>
        </div>
      </section>

      <section className="eq-station" id="grammar">
        <div className="eq-container">
          <StationHeading eyebrow="✏️ Grammar time" title="What Were They Doing?" intro="Past Continuous + Past Simple" />

          <Reveal className="eq-example-grid eq-stagger">
            {grammarExamples.map((sentence) => (
              <article className="eq-example-card" key={sentence}>{sentence}</article>
            ))}
          </Reveal>

          <GrammarMiniQuiz />

          <div className="eq-station-cta">
            <button type="button" className="eq-primary-btn" onClick={() => scrollToSection('why-because')}>NEXT</button>
          </div>
        </div>
      </section>

      <section className="eq-station eq-station-alt" id="why-because">
        <div className="eq-container">
          <StationHeading eyebrow="❓ Think about it" title="Why? Because..." />
          <WhyBecause />
          <div className="eq-station-cta">
            <button type="button" className="eq-primary-btn" onClick={() => scrollToSection('challenge')}>NEXT: CHALLENGE</button>
          </div>
        </div>
      </section>

      <section className="eq-station" id="challenge">
        <div className="eq-container">
          <StationHeading eyebrow="🏆 Final mission" title="Ready for the Final Challenge?" />
          <FinalChallenge />
        </div>
      </section>

      <footer className="eq-credits" id="credits">
        <div className="eq-container">
          <span className="eq-eyebrow-chip">🎓 Our Project</span>
          <h2>Disaster Watch Venezuela</h2>
          <p className="eq-credits-course">Created by</p>
          <div className="eq-credits-names">
            <strong>Fernando Luis Díaz Álvarez</strong>
            <strong>Juan Manuel Guzmán Páez</strong>
          </div>
          <p className="eq-credits-course">English — Unit 4: Disaster!</p>
          <p className="eq-credits-source">Earthquake facts: U.S. Geological Survey (USGS)</p>
          <p className="eq-credits-closing">Learn. Prepare. Stay safe.</p>
        </div>
      </footer>
    </main>
  )
}
