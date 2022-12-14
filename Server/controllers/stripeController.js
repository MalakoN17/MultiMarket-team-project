const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_KEY);

const createCheckoutPay = async (req, res, next) => {
  try {
    const line_items = req.body.item.map(item => {
      return {
        price_data:{
          currency:'ils',
          product_data:{
            name: item.storeName,
            images:[item.img],
          },
          unit_amount: item.totalPrice * 100,
        },
        quantity: item.quantity
      };
});
const session = await stripe.checkout.sessions.create({
        payment_method_types:['card'],
        line_items,
        mode: 'payment',
      success_url: 'http://localhost:8000/CheckoutSucsses',
      cancel_url: 'http://localhost:8000/cancel',
    });
    res.json({ url: session.url });
  } catch (error) {
    next(error);
  }
};


module.exports = { createCheckoutPay };
