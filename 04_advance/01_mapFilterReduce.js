/**
 * Filter | Map | Reduce
 */

const prices = [4, 8, 15, 16, 23, 42];

prices.forEach((price, i, arr) => {
    arr[i] = price * 0.5;
})

console.log(prices);