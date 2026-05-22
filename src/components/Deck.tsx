import { useState, useEffect, useCallback, useRef } from 'react'
import type { ReactNode } from 'react'
import './Deck.css'

const DESIGN_W = 1920
const DESIGN_H = 1080

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

  const goTo = useCallback((index: number, reason = 'api') => {
    const clamped = Math.max(0, Math.min(total - 1, index))
    setCurrent(clamped)
    window.history.replaceState(null, '', `#${clamped + 1}`)
    void reason
  }, [total])

  const next = useCallback(() => goTo(current + 1, 'keyboard'), [current, goTo])
  const prev = useCallback(() => goTo(current - 1, 'keyboard'), [current, goTo])

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
          goTo(0, 'keyboard')
          break
        case 'End':
          e.preventDefault()
          goTo(total - 1, 'keyboard')
          break
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [next, prev, goTo, total])

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

      <div className="deck-counter">
        {current + 1} / {total}
      </div>
    </div>
  )
}
