function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    const messagge = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    return messagge;
}

const fistadd = makeTransaction(5, 3000);
const secondadd = makeTransaction(3, 1000);
const thirdadd = makeTransaction(5, 3000);

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"