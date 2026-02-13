import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!)
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { plan } = body as { plan: string }

  if (plan !== 'monthly' && plan !== 'annual') {
    return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
  }

  const priceId =
    plan === 'monthly'
      ? process.env.STRIPE_PRICE_MONTHLY!
      : process.env.STRIPE_PRICE_ANNUAL!

  const mode: Stripe.Checkout.SessionCreateParams['mode'] = 'subscription'

  const stripe = getStripe()

  const session = await stripe.checkout.sessions.create({
    line_items: [{ price: priceId, quantity: 1 }],
    mode,
    success_url: 'https://trustly.codaya.fr/payment-confirmation?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'https://trustly.codaya.fr/',
  })

  return NextResponse.json({ url: session.url })
}
