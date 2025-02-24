const stripe = Stripe('pk_test_51QqWoiCGvVOGeDG7Xtyd4Hv9TMS7yVzmNvr1JmdUFYA9zsV097EkfaqxvqQzJvC1ObwVQLJ6bObD5U9uwWpydGvP00IipXZdZF');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
});