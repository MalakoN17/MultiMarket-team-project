const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_KEY);

const createCheckoutPay = async (req, res, next) => {
  try {
    const line_items = req.body.stripe.map((product) => {
        return {
          price_data: {
            currency: 'ils',
            product_data: {
              name: product.name,
              images: [product.image],
            },
            unit_amount: product.price * 100,
          },
          quantity: product.quantity,
        };
      })

    const session = await stripe.checkout.sessions.create({
      line_items,
      payment_method_types: ['card'],
      mode: 'payment',
      success_url: 'http://localhost:8000/CheckoutSuccess',
      cancel_url: 'http://localhost:8000/cancel',
    });
    res.json({ url: session.url });
  } catch (error) {
    next(error);
  }
};

module.exports = { createCheckoutPay };
