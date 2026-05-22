import { useState } from 'react'

const STORAGE_KEY = 'tomrw_auth'
const PASS_HASH = 'neverdies'

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState(() => localStorage.getItem(STORAGE_KEY) === '1')
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  if (authed) return <>{children}</>

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (value === PASS_HASH) {
      localStorage.setItem(STORAGE_KEY, '1')
      setAuthed(true)
    } else {
      setError(true)
      setValue('')
    }
  }

  return (
    <div style={{
      position: 'fixed', inset: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#f1ede6', fontFamily: 'DM Sans, sans-serif',
    }}>
      <form onSubmit={handleSubmit} style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
      }}>
        <span style={{ fontSize: 14, color: '#14130f', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          Enter password
        </span>
        <input
          type="password"
          autoFocus
          value={value}
          onChange={e => { setValue(e.target.value); setError(false) }}
          style={{
            width: 240, padding: '12px 16px',
            border: error ? '1px solid #c84a1c' : '1px solid #14130f33',
            borderRadius: 8, fontSize: 16, outline: 'none',
            background: '#fff', color: '#14130f',
          }}
        />
        <button type="submit" style={{
          padding: '10px 32px', border: 'none', borderRadius: 8,
          background: '#14130f', color: '#f1ede6', fontSize: 14,
          cursor: 'pointer', letterSpacing: '0.02em',
        }}>
          Enter
        </button>
        {error && <span style={{ fontSize: 13, color: '#c84a1c' }}>Wrong password</span>}
      </form>
    </div>
  )
}
