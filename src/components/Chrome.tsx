interface ChromeProps {
  position: 'top' | 'bottom'
  left: React.ReactNode
  right: React.ReactNode
  style?: React.CSSProperties
}

export function Chrome({ position, left, right, style }: ChromeProps) {
  const cls = position === 'top' ? 'chrome-top' : 'chrome-bot'
  return (
    <div className={cls} style={style}>
      <div className="l">{left}</div>
      <div>{right}</div>
    </div>
  )
}

export function Logo({ style }: { style?: React.CSSProperties }) {
  return (
    <span className="logo-mini" style={style}>
      TO<span className="col">:</span>MRW
    </span>
  )
}

export function Dot({ style }: { style?: React.CSSProperties }) {
  return <span className="dot" style={style} />
}
