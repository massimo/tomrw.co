import { useState, useEffect, useCallback, useRef } from 'react'
import type { ReactNode } from 'react'
import './Deck.css'

const DESIGN_W = 1920
const DESIGN_H = 1080
const SWIPE_THRESHOLD = 50

interface DeckProps {
  children: ReactNode
}

export function Deck({ children }: DeckProps) {
  const slides = Array.isArray(children) ? children : [children]
  const total = slides.length
  const [current, setCurrent] = useState(() => {
    const hash = window.location.hash.replace('#', '')
    const n = parseInt(hash, 10)
    return n >= 1 && n <= total ? n - 1 : 0
  })
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const touchStartRef = useRef<{ x: number; y: number } | null>(null)

  const goTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(total - 1, index))
    setCurrent(clamped)
    window.history.replaceState(null, '', `#${clamped + 1}`)
  }, [total])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'PageDown':
          e.preventDefault()
          next()
          break
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault()
          prev()
          break
        case 'Home':
          e.preventDefault()
          goTo(0)
          break
        case 'End':
          e.preventDefault()
          goTo(total - 1)
          break
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [next, prev, goTo, total])

  // Touch/swipe navigation
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0]
      touchStartRef.current = { x: touch.clientX, y: touch.clientY }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStartRef.current) return
      const touch = e.changedTouches[0]
      const dx = touch.clientX - touchStartRef.current.x
      const dy = touch.clientY - touchStartRef.current.y

      // Only trigger if horizontal swipe is dominant
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > SWIPE_THRESHOLD) {
        if (dx < 0) next()
        else prev()
      }
      touchStartRef.current = null
    }

    el.addEventListener('touchstart', handleTouchStart, { passive: true })
    el.addEventListener('touchend', handleTouchEnd, { passive: true })
    return () => {
      el.removeEventListener('touchstart', handleTouchStart)
      el.removeEventListener('touchend', handleTouchEnd)
    }
  }, [next, prev])

  // Responsive scaling
  useEffect(() => {
    const resize = () => {
      const vw = window.innerWidth
      const vh = window.innerHeight
      const s = Math.min(vw / DESIGN_W, vh / DESIGN_H)
      setScale(s)
    }
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  // Auto-fullscreen on landscape (mobile)
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    if (!isMobile) return

    const handleOrientation = () => {
      const isLandscape = window.matchMedia('(orientation: landscape)').matches
      const doc = document.documentElement

      if (isLandscape && !document.fullscreenElement) {
        doc.requestFullscreen?.().catch(() => {})
      } else if (!isLandscape && document.fullscreenElement) {
        document.exitFullscreen?.().catch(() => {})
      }
    }

    const mql = window.matchMedia('(orientation: landscape)')
    mql.addEventListener('change', handleOrientation)
    // Check on mount in case already landscape
    handleOrientation()

    return () => mql.removeEventListener('change', handleOrientation)
  }, [])

  return (
    <div className="deck" ref={containerRef}>
      <div
        className="deck-viewport"
        style={{
          width: DESIGN_W,
          height: DESIGN_H,
          transform: `scale(${scale})`,
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`deck-slide ${i === current ? 'active' : ''}`}
            aria-hidden={i !== current}
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="deck-pagination">
        <button
          className="deck-nav-btn"
          onClick={prev}
          disabled={current === 0}
          aria-label="Previous slide"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="deck-page-info">
          <span className="deck-page-current">{current + 1}</span>
          <span className="deck-page-sep">/</span>
          <span className="deck-page-total">{total}</span>
        </div>

        <button
          className="deck-nav-btn"
          onClick={next}
          disabled={current === total - 1}
          aria-label="Next slide"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Progress bar */}
      <div className="deck-progress">
        <div
          className="deck-progress-bar"
          style={{ width: `${((current + 1) / total) * 100}%` }}
        />
      </div>
    </div>
  )
}
