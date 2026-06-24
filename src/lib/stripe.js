import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
    seeker_pro: 'price_1TkSlYR5DSi7gXSzh4HRSBnc',
    seeker_premium: 'price_1TlA8RR5DSi7gXSzjitX2Mnq',
    recruiter_growth: 'price_1TlA40R5DSi7gXSzO183l3OA',
    recruiter_enterprise: 'price_1TlA31R5DSi7gXSzGuQ6Q6bY',
}