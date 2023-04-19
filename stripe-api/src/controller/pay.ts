import Stripe from 'stripe';
import { Response, Request } from 'express';
export const payOrder = async (req: Request, res: Response) => {
  const stripe = new Stripe(
    'sk_test_51MVfzxCiwP1bHim9Bad7IuTZoCi13dpwCbbKrpRuwoTo36PhTOiAZXGZaVdnkrtsV2wilpjAHpV6Nt38RnPYKt9v00bS2iTSuS',
    {
      apiVersion: '2022-11-15',
    }
  );

  const customer = await stripe.customers.create();
  const empheralKey = await stripe.ephemeralKeys.create(
    { customer: customer.id },
    { apiVersion: '2022-11-15' }
  );

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1000,
    currency: 'eur',
    customer: customer.id,
    payment_method_types: ['card'],
    description: `order is pay`,
  });

  return res.json({
    paymentIntent: paymentIntent.client_secret,
    empheralKey: empheralKey.secret,
    customer: customer.id,
  });
};
