/* Question: Find the Cheapest and Most Expensive Products
Given an array of objects representing products and their prices, find the cheapest and most expensive products from the array. */

/*Input:
[
  { product: "apple", price: 200 },
  { product: "banana", price: 150 },
  { product: "orange", price: 250 },
  { product: "grape", price: 180 },
  { product: "mango", price: 300 },
  { product: "watermelon", price: 400 }
]

Output:
Cheapest Product: { product: "banana", price: 150 }
Most Expensive Product: { product: "watermelon", price: 400 }*/

function findCheapestAndMostExpensiveProducts(products) {
  if (products.length === 0) {
    return { cheapest: null, mostExpensive: null };
  }

  let cheapestProduct = products[0];
  let mostExpensiveProduct = products[0];

  for (let i = 1; i < products.length; i++) {
    const currentProduct = products[i];

    if (currentProduct.price < cheapestProduct.price) {
      cheapestProduct = currentProduct;
    }

    if (currentProduct.price > mostExpensiveProduct.price) {
      mostExpensiveProduct = currentProduct;
    }
  }

  return { cheapest: cheapestProduct, mostExpensive: mostExpensiveProduct };
}

const products = [
  { product: "apple", price: 200 },
  { product: "banana", price: 150 },
  { product: "orange", price: 250 },
  { product: "grape", price: 180 },
  { product: "mango", price: 300 },
  { product: "watermelon", price: 400 },
];

const result = findCheapestAndMostExpensiveProducts(products);
console.log("Cheapest Product:", result.cheapest); // Cheapest Product: { product: 'banana', price: 150 }
console.log("Most Expensive Product:", result.mostExpensive); // Most Expensive Product: { product: 'watermelon', price: 400 }
