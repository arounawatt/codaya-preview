export default function Contact() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 24px', color: '#1a1a1a' }}>
      <a href="/" style={{ color: '#667eea', textDecoration: 'none', fontSize: '14px' }}>&larr; Retour</a>

      <h1 style={{ fontSize: '36px', fontWeight: 800, marginTop: '32px', marginBottom: '40px' }}>
        Contact
      </h1>

      <div style={{
        background: '#fafafa',
        borderRadius: '20px',
        padding: '48px',
        border: '1px solid rgba(0, 0, 0, 0.06)'
      }}>
        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#444', marginBottom: '32px' }}>
          Une question sur notre service ? Vous souhaitez créer votre site vitrine ?
          Contactez-nous, on vous répond sous 24h.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            padding: '20px',
            background: 'white',
            borderRadius: '12px',
            border: '1px solid rgba(0, 0, 0, 0.06)'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '20px',
              flexShrink: 0
            }}>
              @
            </div>
            <div>
              <div style={{ fontSize: '14px', color: '#999', marginBottom: '4px' }}>Email</div>
              <a href="mailto:contact@codaya.agency" style={{
                fontSize: '17px',
                fontWeight: 600,
                color: '#1a1a1a',
                textDecoration: 'none'
              }}>
                contact@codaya.agency
              </a>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            padding: '20px',
            background: 'white',
            borderRadius: '12px',
            border: '1px solid rgba(0, 0, 0, 0.06)'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '20px',
              flexShrink: 0
            }}>
              W
            </div>
            <div>
              <div style={{ fontSize: '14px', color: '#999', marginBottom: '4px' }}>Site agence</div>
              <a href="https://codaya.agency" target="_blank" rel="noopener noreferrer" style={{
                fontSize: '17px',
                fontWeight: 600,
                color: '#1a1a1a',
                textDecoration: 'none'
              }}>
                codaya.agency
              </a>
            </div>
          </div>
        </div>

        <div style={{
          marginTop: '40px',
          padding: '24px',
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
          borderRadius: '12px',
          border: '1px solid rgba(102, 126, 234, 0.1)'
        }}>
          <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#444' }}>
            <strong style={{ color: '#667eea' }}>Vous êtes artisan ?</strong> Envoyez-nous un email avec le nom de votre entreprise et votre numéro de téléphone. On vous rappelle pour discuter de votre projet et vous montrer une démo personnalisée.
          </p>
        </div>
      </div>

      <p style={{ fontSize: '13px', color: '#999', marginTop: '60px', paddingTop: '24px', borderTop: '1px solid #eee' }}>
        Codaya Agency &bull; Tous droits réservés
      </p>
    </div>
  )
}
