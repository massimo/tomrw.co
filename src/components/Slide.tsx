import type { ReactNode } from 'react'

interface SlideProps {
  className?: string
  children: ReactNode
  style?: React.CSSProperties
}

export function Slide({ className = '', children, style }: SlideProps) {
  return (
    <section className={`slide ${className}`} style={style}>
      {children}
    </section>
  )
}
