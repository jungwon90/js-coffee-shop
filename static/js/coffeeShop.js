"use strict";

const addItemToCart = (itemName) => {
  /** This function adds each item into the cart */
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};

const resetCart = () => {
  /** It resets the cart to empty state and place the 'total' to 0*/
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};

const incrementCartTotal = (price) => {
   /** It increments the coffee total-cost in the cart */
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2));
};

const incrementCoffeeSold = (amountSold) => {
  /** It increments how many coffees got sold */
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


//
// Add your event handlers below.
//

//when the user click the button, it add the item to the cart.
const orderButton = $('.add-to-order');
orderButton.on('click', () => {
  addItemToCart('Coffee');
  incrementCartTotal(1.50);
});

const placeOrderBtn = document.querySelector('#place-order');
placeOrderBtn.addEventListener('click', () => {
  const coffeesSold = $('#cart-items').children().length;
  incrementCoffeeSold(coffeesSold);
  resetCart();

  setProgressAndStatus(coffeesSold, "Good job!");
});




