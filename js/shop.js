// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "Cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      offerPrice: 10,
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
      offerPrice: 5*(2/3), //he modificat aquesat dada per que funcionés la funcio que calcula les ofertes
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

var total = 0; //No queda clara la finalitat d'aquesta variable. Jo l'he utilitzat com el total de productes que es mostra a "id=count_product" del menú.

// Exercise 1

/*funció en desús al nivell 2, només la deixo a efectes de correcció del nivell 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array

  //afegim a "cartList" el producte amb "id" coincident de la llista de productes
  cartList.push(products.find((product) => product.id === id));

  //En aquest nivell 1, el nombre total de productes mostrat al menú s'agafa del nombre total d'elements de la "cartList".
  //...Més endavant d'utilitza la variable "total" que es calcula d'una altra manera
  document.getElementById("count_product").innerHTML = cartList.length;
}
*/

// Exercise 2
function cleanCart() {

  /* Codi del nivell 1:

  //Reasigmen a l'array "cartList" un array buit
  cartList = [];

  //cridem a la funció "generateCart()" per actualizar la llista "cart"
  generateCart();
  
  */

  //amaguem el boto "Remove element from cart" de tots els elements
  cart.forEach(element => {
    document.getElementById(`removeBtn${element.id}`).style.display = 'none';
  });

  //Reasigmen als array "cartList" i "cart" arrays buits
  cartList = [];
  cart = [];

  //reassignem a la variable del total d'elements la quantitat de zero
  total = 0;

  //tornem a generar la taula que mostra el resum d'elements del carret, que estarà buida
  printCart();
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array

/* Codi del Nivell 1:

  //creem una variable on emmagatzemar el preu total de tots els elements de la "cartLists"
  let totalPrice = 0;

  //recorrem tots els elements de la "cartList" i anem sumant el seu valor "price" a la variable
  cartList.forEach((product) => (totalPrice += product.price));

  //retorna la suma total
  return totalPrice;

*/

  //creem una variable on emmagatzemar el preu total de tots els elements de la "cartLists"
  let totalPrice = 0;

  //recorrem tots els elements de la "cart" i anem sumant el seu valor "subtotalWithDiscount",
  //...que és el preu final que pagarà el client, a la variable
  cart.forEach((product) => (totalPrice += product.subtotalWithDiscount));

  //retorna la suma total
  return Number(totalPrice).toFixed(2);
}

// Exercise 4 

/*funció en desús al nivell 2, només la deixo a efectes de correcció del nivell 1
function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
  
  //cada vegada buidem l'array "cart" per generar-lo de nou amb tots els elements actualitzats de "cartList"
  cart = [];

  //Busquem a "cart" si existeix cada element de "cartList", si no existeix crea noves variables dins l'element i puja l'element a "cart"
  //...Si existeix, augmenta en 1 la seva quantitat i recalcula el "subtotal" amb la nova quantitat
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
*/

// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"

/* Codi del nivell 1:

  //Busca els elements de cart que tenen "id" igual a 1 o 3, que són els productes amb oferta,
  //...i si la seva quantitat arriba a la estipulada calcula el preu subtotal amb descombte
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

*/

  //busca a cada element de "cart" si tenen activa la oferta i si te la quantitat mínima, si és així, aplica la oferta específica del producte
  cart.forEach((element) => {

    element.subtotalWithDiscount = element.subtotal;

    if ( element.offer && element.quantity >= element.offer.number) {
      element.subtotalWithDiscount = parseFloat((element.quantity * element.offer.offerPrice).toFixed(2));
    }

  });
}

// Exercise 6
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom

  //creem variables on guardem l'element del DOM on està la taula que mostra el carret
  const cartTable = document.getElementById("cart_list");
  const rowLength = cartTable.rows.length;

  //creem la variable de l'element del DOM que conté el preu total del carret
  const totalPrice = document.getElementById("total_price");

  //iterem per totes les files de la taula d'exemple i les esborrem
  for (let i = 0; i < rowLength; i++) {
    cartTable.deleteRow(0);
  }

  //per cada element de "cart" creem una fila nova amb quatre cel·les amb la informació de cada element: nom, preu, quantital i subtotal amb descompte
  cart.forEach((element) => {
    const newTableProduct = 
    `<tr>
      <th scope="row">${element.name}</th>
      <td>${element.price}</td>
      <td>${element.quantity}</td>
      <td>$${element.subtotalWithDiscount}</td>
    </tr>`;

    cartTable.innerHTML = cartTable.innerHTML + newTableProduct;
  });

  //actualitzem el preu total del carret
  totalPrice.innerHTML = calculateTotal();

  //actualitzem la dada al DOM del nombre total d'ítems del carret
  document.getElementById("count_product").innerHTML = total;
}

// Exercise 7: go to --> js/checkout.js


// ** Nivell II **

// Exercise 8
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
  
  //afegim a "cartList" una còpia del producte de "products" que coincideixi amb la "id" rebuda
  cartList.push( {...products.find((product) => product.id === id)} );

  //mirem si aquest producte no existeix a "cart"
  if (!cart.some((element) => element.id === id)) {

    //busquem l'índex de l'element de "cartList" corresponent al producte seleccionat
    const cartListIndex = cartList.findIndex(element => element.id === id )

    //fem una còpia d'aquest element de "cartList" a "cart"
    cart.push({...cartList[cartListIndex]});

    //busquem l'índex de l'element de "cart" corresponent al producte copiat
    const cartIndex = cart.findIndex ( element => element.id === id);

    //afegim i inicialitzem les propietats "quantity", "subtotal" i "subtotalWithDiscount" del producte
    cart[cartIndex].quantity = 1;
    cart[cartIndex].subtotal = cart[cartIndex].price * cart[cartIndex].quantity;
    cart[cartIndex].subtotalWithDiscount = 0;

    //actualitzem el comptador del botó "remove from cart"
    document.getElementById(`count_product_${id}`).innerHTML = cart[cartIndex].quantity;

    //augmentem en 1 el comptador del total de productes al carret
    total++;

  //si el producte ja es trobava a "cart"
  } else {
  
    //busquem l'índex de l'element de "cart" corresponent al producte selecionat
    const currentIndex = cart.findIndex ( element => element.id === id);

    //augmentem en 1 la seva quantitat i recalculem les propietats
    cart[currentIndex].quantity++;
    cart[currentIndex].subtotal = cart[currentIndex].price * cart[currentIndex].quantity;

    //actualitzem el comptador del botó "remove from cart"
    document.getElementById(`count_product_${id}`).innerHTML = cart[currentIndex].quantity;

    //augmentem en 1 el comptador del total de productes al carret
    total++;
  }

  //mostrem el botó "Remove from Cart" a cada producte
  document.getElementById(`removeBtn${id}`).style.display = 'block';

  //tornem a aplicar les promocions
  applyPromotionsCart();

  //tornem a refer la taula del resum del carret
  printCart();
}

// Exercise 9
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array

  //creem les variables on emmagatzemar l'inex de l'element a eliminar
  const cartListIndex = cartList.findIndex ( element => element.id === id); //en aquest cas, el primer que trobi
  const cartIndex = cart.findIndex ( element => element.id === id);

  //eliminem el primer element trobat d'id coincident de la "cartList"
  cartList.splice(cartListIndex, 1);

  //modifiquem els paràmetres de l'element d'id coincident de la "cart" i restem 1 al total mistrat al menú
  cart[cartIndex].quantity--;
  cart[cartIndex].subtotal = cart[cartIndex].price * cart[cartIndex].quantity;
  document.getElementById(`count_product_${id}`).innerHTML = cart[cartIndex].quantity;
  total--;

  //si no queda cap element d'aquest producte al carret, amaguem el botó de treue més elements i eliminem el producte de "cart"
  if ( cart[cartIndex].quantity === 0 ){

    document.getElementById(`removeBtn${id}`).style.display = 'none';
    cart.splice(cartIndex, 1);

  }

  //actualitzem promocions
  applyPromotionsCart();

  //actualitzem la taula que mostra el resum del carret
  printCart();
}

function open_modal() {
  console.log("Open Modal");
}