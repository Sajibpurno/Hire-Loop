import { redirect } from 'next/navigation'
import { stripe } from '../../../lib/stripe'
import { CircleCheck, Envelope } from '@gravity-ui/icons'
import Link from 'next/link'

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams

  if (!session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')

  const {
    status,
    customer_details: { email: customerEmail },
    metadata
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })

  if (status === 'open') {
    return redirect('/')
  }

  if (status === 'complete') {
  const subsInfo = {
    email: customerEmail,
    planId: metadata.planId
  }
    return (
      <div className="w-full min-h-screen bg-zinc-950 flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center space-y-5">

          {/* Icon */}
          <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto">
            <CircleCheck className="w-8 h-8 text-emerald-400" />
          </div>

          {/* Title */}
          <div className="space-y-1">
            <h1 className="text-2xl font-bold text-white">Payment Successful!</h1>
            <p className="text-sm text-zinc-400">Your plan has been activated successfully.</p>
          </div>

          {/* Email info */}
          <div className="flex items-center justify-center gap-2 bg-zinc-800/60 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-300">
            <Envelope className="w-4 h-4 text-zinc-500 shrink-0" />
            <span>Confirmation sent to <span className="text-white font-medium">{customerEmail}</span></span>
          </div>

          {/* Support note */}
          <p className="text-xs text-zinc-500">
            Questions? Email us at{' '}
            <a href="mailto:support@hireloop.com" className="text-zinc-300 hover:text-white underline transition">
              support@hireloop.com
            </a>
          </p>

          {/* CTA */}
          <Link
            href="/dashboard"
            className="block w-full bg-white text-black font-semibold text-sm py-2.5 rounded-xl hover:bg-zinc-200 transition"
          >
            Go to Dashboard
          </Link>

        </div>
      </div>
    )
  }
}