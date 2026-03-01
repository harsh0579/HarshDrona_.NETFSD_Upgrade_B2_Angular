
const cartItems = [
  { name: "Laptop", price: 55000, quantity: 1 },
  { name: "Mouse", price: 800, quantity: 2 },
  { name: "Keyboard", price: 1500, quantity: 1 },
  { name: "Headphones", price: 2000, quantity: 2 }
];


const calculateTotal = (cart) =>
  cart
    .map(item => item.price * item.quantity)
    .reduce((total, value) => total + value, 0);


const generateInvoice = (cart) => {
  const itemsList = cart
    .map(item =>
      `${item.name} (₹${item.price} x ${item.quantity}) = ₹${item.price * item.quantity}`
    )
    .join("\n");

  const total = calculateTotal(cart);

  return `
=========== INVOICE ===========
${itemsList}
-------------------------------
Total Amount: ₹${total}
================================
`;
};

console.log(generateInvoice(cartItems));