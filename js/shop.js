// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
  cartList.push(products.find((product) => product.id === id));

  document.getElementById("count_product").innerHTML = cartList.length;
}

// Exercise 2
function cleanCart() {
  cartList = [];
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  let totalPrice = 0;

  cartList.forEach((product) => (totalPrice += product.price));

  return totalPrice;
}

// Exercise 4
function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
  cart = [];

  for (let i = 0; i < cartList.length; i++) {
    if (!cart.some((element) => element.id === cartList[i].id)) {
      cartList[i].quantity = 1;
      cartList[i].subtotal = cartList[i].price * cartList[i].quantity;
      cartList[i].subtotalWithDiscount = 0;
      cart.push(cartList[i]);
    } else {
      cart.forEach((element) => {
        if (element.id === cartList[i].id) {
          element.quantity++;
          cartList[i].subtotal = cartList[i].price * cartList[i].quantity;
        }
      });
    }
  }
}

// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  cart.forEach((element) => {
    if (element.id === 1) {
      if (element.quantity >= 3) {
        element.subtotalWithDiscount = element.quantity * 10;
      } else {
        element.subtotalWithDiscount = element.subtotal;
      }
    }

    if (element.id === 3) {
      if (element.quantity >= 10) {
        element.subtotalWithDiscount = parseFloat(
          (element.subtotal * (2 / 3)).toFixed(2)
        );
      } else {
        element.subtotalWithDiscount = element.subtotal;
      }
    }

    if (element.id != 1 && element.id != 3) {
      element.subtotalWithDiscount = element.subtotal;
    }
  });
}

// Exercise 6
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  const cartTable = document.getElementById("cart_list");
  const rowLength = cartTable.rows.length;
  const totalPrice = document.getElementById("total_price");

  for (let i = 0; i < rowLength; i++) {
    cartTable.deleteRow(0);
  }

  totalPrice.innerHTML = 0;

  cart.forEach((element) => {
    const newTableProduct = 
    `<tr>
      <th scope="row">${element.name}</th>
      <td>${element.price}</td>
      <td>${element.quantity}</td>
      <td>$${element.subtotalWithDiscount}</td>
    </tr>`;

    cartTable.innerHTML = cartTable.innerHTML + newTableProduct;

    totalPrice.innerHTML = parseFloat(totalPrice.innerHTML) + parseFloat(element.subtotalWithDiscount);
  });
}

// ** Nivell II **


// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

function open_modal() {
  console.log("Open Modal");
  printCart();
}
