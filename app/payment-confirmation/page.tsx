import { redirect } from 'next/navigation'
import Stripe from 'stripe'
import { Resend } from 'resend'

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!)
}

function getResend() {
  return new Resend(process.env.RESEND_API_KEY!)
}

export default async function PaymentConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>
}) {
  const { session_id } = await searchParams

  if (!session_id) {
    redirect('/')
  }

  let session: Stripe.Checkout.Session
  try {
    const stripe = getStripe()
    session = await stripe.checkout.sessions.retrieve(session_id)
  } catch {
    redirect('/')
  }

  if (session.payment_status !== 'paid') {
    redirect('/')
  }

  const customerEmail = session.customer_details?.email
  if (customerEmail) {
    const resend = getResend()
    await resend.emails.send({
      from: 'Trustly by Codaya <contact@codaya.agency>',
      to: customerEmail,
      template: {
        id: '1d6f7824-2428-4b0d-8822-54317947e950',
        variables: {
          customerName: session.customer_details?.name ?? '',
          typeformUrl: process.env.TYPEFORM_URL!,
        },
      },
    }).catch(() => {})
  }

  const amountTotal = session.amount_total ? `${(session.amount_total / 100).toFixed(0)}\u20AC` : ''
  const isAnnual = session.amount_total && session.amount_total >= 46800
  const planLabel = isAnnual ? `Annuel (${amountTotal} HT/an)` : `Mensuel (${amountTotal} HT/mois)`

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(180deg, #fafafa 0%, #ffffff 100%)',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      padding: '40px',
    }}>
      <div style={{
        maxWidth: '560px',
        width: '100%',
        background: 'white',
        borderRadius: '24px',
        padding: '60px 48px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
        border: '1px solid rgba(0, 0, 0, 0.06)',
        textAlign: 'center',
      }}>
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 32px',
          fontSize: '36px',
        }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1 style={{
          fontSize: '32px',
          fontWeight: 700,
          color: '#1a1a1a',
          marginBottom: '12px',
          lineHeight: 1.2,
        }}>
          Paiement confirm&eacute; !
        </h1>

        <p style={{
          fontSize: '18px',
          color: '#666',
          lineHeight: 1.6,
          marginBottom: '40px',
        }}>
          Merci pour votre confiance. V&eacute;rifiez votre bo&icirc;te mail et suivez les instructions pour nous transmettre les informations n&eacute;cessaires &agrave; la cr&eacute;ation de votre site.
        </p>

        <div style={{
          background: '#fafafa',
          borderRadius: '16px',
          padding: '28px',
          marginBottom: '40px',
          textAlign: 'left',
          border: '1px solid rgba(0, 0, 0, 0.06)',
        }}>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#667eea', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>
            R&eacute;capitulatif
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontSize: '15px', color: '#666' }}>Formule</span>
            <span style={{ fontSize: '15px', fontWeight: 600, color: '#1a1a1a' }}>{planLabel}</span>
          </div>
          {session.customer_details?.email && (
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ fontSize: '15px', color: '#666' }}>Email</span>
              <span style={{ fontSize: '15px', fontWeight: 600, color: '#1a1a1a' }}>{session.customer_details.email}</span>
            </div>
          )}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '15px', color: '#666' }}>Statut</span>
            <span style={{ fontSize: '15px', fontWeight: 600, color: '#22c55e' }}>Pay&eacute;</span>
          </div>
        </div>

        <a
          href="/"
          style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '16px 36px',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: 700,
            textDecoration: 'none',
            boxShadow: '0 8px 24px rgba(102, 126, 234, 0.3)',
          }}
        >
          Retour &agrave; l&apos;accueil
        </a>
      </div>
    </div>
  )
}
