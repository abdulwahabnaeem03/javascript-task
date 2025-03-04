var products = [
  {
    id: 101,
    title: "Sony LED 40 inch",
    variations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
      { id: 3, color: "silver", price: 55000, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "bad Product",
        comments: "ali It is a very good product ....",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 102,
    title: "Mobile",
    variations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
      { id: 3, color: "silver", price: 55000, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "bad Product",
        comments: "ali It is a very good product ....",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 103,
    title: "Bike",
    variations: [
      { id: 1, color: "black", price: 55000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 3.0,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
    ],
  },
];
// --------------------question9----------------------
// var totalStockValue = 0;

// for (var i = 0; i < products.length; i++) {
//   for (var j = 0; j < products[i].variations.length; j++) {
//     totalStockValue += products[i].variations[j].price * products[i].variations[j].quantity;
//   }
// }

// console.log("Total Stock Value: " + totalStockValue);

// ----------------------question8-------------
// for (var i = 0; i < products.length; i++) {
//     var mostExpensive = products[i].variations[0];
//     for (var j = 1; j < products[i].variations.length; j++) {
//       if (products[i].variations[j].price > mostExpensive.price) {
//         mostExpensive = products[i].variations[j];
//       }
//     }
//     console.log("Product " + products[i].id + " = " + products[i].title + " - " + mostExpensive.color + " (" + mostExpensive.price + ")");
//   }
// ----------------question7---------------
// var productId = 102; 

// for (var i = 0; i < products.length; i++) {
//   if (products[i].id === productId) {
//     for (var j = 0; j < products[i].reviews.length; j++) {
//       if (products[i].reviews[j].status === true) {
//         console.log(products[i].reviews[j]);
//       }
//     }
//   }
// }
// --------------------question6-----------------
// var highestRatedProduct = null;
// var highestAverageRating = 0;

// for (var i = 0; i < products.length; i++) {
//   var totalRating = 0;
//   for (var j = 0; j < products[i].reviews.length; j++) {
//     totalRating += products[i].reviews[j].rating;
//   }
//   var averageRating = totalRating / products[i].reviews.length;

//   if (averageRating > highestAverageRating) {
//     highestAverageRating = averageRating;
//     highestRatedProduct = products[i];
//   }
// }

// console.log("Highest Rated Product:", highestRatedProduct.title);

// question5----------------------
// for (var i = 0; i < products.length; i++) {
//     for (var j = 0; j < products[i].variations.length; j++) {
//       if (products[i].variations[j].quantity < 2) {
//         console.log(products[i].title);
//         break;
//       }
//     }
//   }
// -------------question4---------------------------
// var productId = 103;
// var totalQuantity = 0;

// for (var i = 0; i < products.length; i++) {
//   if (products[i].id === productId) {
//     for (var j = 0; j < products[i].variations.length; j++) {
//       totalQuantity += products[i].variations[j].quantity;
//     }
//     break;
//   }
// }

// console.log("Total Quantity:", totalQuantity);

// -------------question3---------------------------
// var productId = 101;

// for (var i = 0; i < products.length; i++) {
//   if (products[i].id === productId) {
//     for (var j = 0; j < products[i].variations.length; j++) {
//       console.log(products[i].variations[j].color);
//     }
//     break;
//   }
// }
// -------------------------question2----------------------
// for (var i = 0; i < products.length; i++) {
//     console.log(products[i].title);
//   }
// ------------------question1---------------------
// const productId = 102;
// var product = null;

// for (var i = 0; i < products.length; i++) {
//   if (products[i].id === productId) {
//     product = products[i];
//     break;
//   }
// }

// console.log(product ? product : "Product not found");
