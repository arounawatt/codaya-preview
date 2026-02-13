"use client"

export default function NotFound() {
  const landingUrl =
    typeof window !== "undefined" && window.location.hostname.includes("localhost")
      ? "http://localhost:3000"
      : "https://trustly.codaya.fr"

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#fff',
      textAlign: 'center',
      padding: '24px',
    }}>
      <h1 style={{ fontSize: '120px', fontWeight: 800, margin: 0, lineHeight: 1 }}>404</h1>
      <p style={{ fontSize: '22px', marginTop: '16px', opacity: 0.9 }}>
        Cette page n&apos;existe pas.
      </p>
      <a
        href={landingUrl}
        style={{
          marginTop: '32px',
          padding: '14px 36px',
          background: '#fff',
          color: '#667eea',
          borderRadius: '12px',
          fontWeight: 700,
          fontSize: '16px',
          textDecoration: 'none',
        }}
      >
        Sortir d&apos;ici
      </a>
    </div>
  )
}
