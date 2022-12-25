const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_KEY);

const createCheckoutPay = async (req, res, next) => {
  try {
    const line_items = req.body.s.map((store) => {
      return {
        price_data: {
          currency: 'ils',
          product_data: {
            name: store.storeName,
            images: [store.img],
          },
          unit_amount: store.totalPrice * 100,
        },
        quantity: store.quantity,
      };
    });
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
