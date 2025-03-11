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
        { id: 2, color: "red", price: 50000, quantity: 5 },
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
  //  ------------------------ question9--------------------------
//   function calculateTotalStockValue() {
//     var totalValue = 0;
//     for (var i = 0; i < products.length; i++) {
//       for (var j = 0; j < products[i].variations.length; j++) {
//         totalValue += products[i].variations[j].price * products[i].variations[j].quantity;
//       }
//     }
//     console.log(`Total Stock Value: ${totalValue}`);
//   }
  
//   calculateTotalStockValue();
  // ------------------------ question8-------------------------------
// function findMostExpensiveVariation() {
//     for (var i = 0; i < products.length; i++) {
//       var mostExpensive = products[i].variations[0];
//       for (var j = 1; j < products[i].variations.length; j++) {
//         if (products[i].variations[j].price > mostExpensive.price) {
//           mostExpensive = products[i].variations[j];
//         }
//       }
//       console.log(`Product ${products[i].id} = ${products[i].title} - ${mostExpensive.color} (${mostExpensive.price})`);
//     }
//   }
  
//   findMostExpensiveVariation();
//  -------------------- question7----------------
// function filterActiveReviews(productId) {
//     for (var i = 0; i < products.length; i++) {
//       if (products[i].id === productId) {
//         for (var j = 0; j < products[i].reviews.length; j++) {
//           if (products[i].reviews[j].status === true) {
//             console.log(products[i].reviews[j]);
//           }
//         }
//       }
//     }
//   }
  
//   filterActiveReviews(101);
//   ---------------question6-----------------------
// function findHighestRatedProduct() {
//     var highestRatedProduct = null;
//     var highestRating = 0;
  
//     for (var i = 0; i < products.length; i++) {
//       var totalRating = 0;
//       var reviewCount = 0;
  
//       for (var j = 0; j < products[i].reviews.length; j++) {
//         totalRating += products[i].reviews[j].rating;
//         reviewCount++;
//       }
  
//       var averageRating = totalRating / reviewCount;
  
//       if (averageRating > highestRating) {
//         highestRating = averageRating;
//         highestRatedProduct = products[i];
//       }
//     }
  
//     console.log("Highest Rated Product: " + highestRatedProduct.title);
//   }
  
//   findHighestRatedProduct();
  
// --------------------question5---------------------  
// function getLowStockProducts() {
//     for (var i = 0; i < products.length; i++) {
//       for (var j = 0; j < products[i].variations.length; j++) {
//         if (products[i].variations[j].quantity < 2) {
//           console.log(products[i].title);
//           break;
//         }
//       }
//     }
//   }
  
//   getLowStockProducts();
  
//   ------------------------question4-------------
// function getTotalQuantity(productId) {
//     var totalQuantity = 0;
//     for (var i = 0; i < products.length; i++) {
//       if (products[i].id === productId) {
//         for (var j = 0; j < products[i].variations.length; j++) {
//           totalQuantity += products[i].variations[j].quantity;
//         }
//         break;
//       }
//     }
//     console.log("Total Quantity: " + totalQuantity);
//   }
  
//   getTotalQuantity(101);
//   -------------------------question3--------------
// function getAvailableColors(productId) {
//     for (var i = 0; i < products.length; i++) {
//       if (products[i].id === productId) {
//         for (var j = 0; j < products[i].variations.length; j++) {
//           console.log(products[i].variations[j].color);
//         }
//         break;
//       }
//     }
//   }
  
//   getAvailableColors(102);
// -------------------------question2---------------
// function listAllProductTitles() {
//     for (var i = 0; i < products.length; i++) {
//       console.log(products[i].title);
//     }
//   }
  
//   listAllProductTitles();
//  ------------------------ practice question 1-------------------
// function getProductById(id) {
//     for (var i = 0; i < products.length; i++) {
//       if (products[i].id === id) {
//         console.log(products[i]);
//         return;
//       }
//     }
//     console.log("Product not found");
//   }
  
//   getProductById(103);