var products = [
    {
      id: 101,
      title: "Sony LED 40 inch",
      variations: [
        { id: 1, color: "black", price: 50000, quantity: 2 },
        { id: 2, color: "red", price: 50000, quantity: 1 },
        { id: 3, color: "silver", price: 55000, quantity: 20 },
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
        { id: 2, color: "red", price: 50000, quantity: 1},
        { id: 3, color: "silver", price: 55000, quantity:8},
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: false,
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
          rating: 3.0,
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

// task10
// const task10 = products.reduce((maxProduct, currentProduct) => {
//   const totalStock = currentProduct.variations.reduce((sum, v) => sum + v.quantity, 0);

//   if (!maxProduct || totalStock > maxProduct.totalStock) {
//     return {
//       title: currentProduct.title,
//       totalStock: totalStock
//     };
//   }

//   return maxProduct;
// }, null);

// console.log(task10);

//  ---------------task9--------------
// const task9=  products.map((product)=>({
//   title : product.title,
//   totalVariations : product.variations.length,
//   totalreviews: product.reviews.length
// }))
// console.log(task9)

// -----------------task8--------------------
// const task8= products.filter(product =>
//   product.variations.find(variation=>variation.quantity > 5)                                   
// )
// console.log(task8);
  // ----------------task7----------------------------
  // const totalRevenue = products.reduce((total, product) => {
  //   const productRevenue = product.variations.reduce((sum, variation) => {
  //     return sum + variation.price * variation.quantity;
  //   }, 0);
  //   return total + productRevenue;
  // }, 0);
  
  // console.log(totalRevenue);

  /*
  // task06---------------------------------
  var formattedProducts = products.map(product => ({
    title: product.title,
    variations: product.variations.map(variation => ({
      color: variation.color,
      price: variation.price,
      quantity: variation.quantity
    }))
  }));
  
  console.log(formattedProducts);
   
----------------task05--------------------
var filteredProducts = products.filter(product => 
  product.reviews.find(review => review.rating === 5.0)
);

console.log(filteredProducts);

----------------task04-------------------
const averageRatings = products.map(product => {
  const validReviews = product.reviews.filter(review => review.status === true);
  const totalRating = validReviews.reduce((sum, review) => sum + review.rating, 0);
  const average = validReviews.length > 0 ? (totalRating / validReviews.length) : 0;
  return {
    title: product.title,
    averageRating: average
  };
});
console.log(averageRatings);

  ---------------task03------------------
const totalStock = products.reduce((total, product) => {
    const productStock = product.variations.reduce((sum, variation) => sum + variation.quantity, 0);
    return total + productStock;
  }, 0);
  
  console.log(totalStock);
  
------------------task02-----------------
const blackColorProducts = products.filter(product =>
    product.variations.some(variation => variation.color === "black")
  );
  
  console.log(blackColorProducts);
  
-------------------task01----------------
const productTitles = products.map(product => product.title);
console.log(productTitles);
*/