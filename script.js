// Class to represent a Product
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// Class to represent a Cart Item (Product + Quantity)
class CartItem {
    constructor(product, quantity = 1) {
        this.product = product;
        this.quantity = quantity;
    }

    // Calculate the total price of this item
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

// Class to represent the Shopping Cart
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    // Add item to the cart
    addItem(product, quantity = 1) {
        let existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new CartItem(product, quantity));
        }
        this.displayCart();
    }

    // Remove an item from the cart
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
        this.displayCart();
    }

    // Get total price of all items in the cart
    getTotal() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    // Display all cart items
    displayCart() {
        console.clear();
        console.log("Shopping Cart:");
        this.items.forEach(item => {
            console.log(`${item.product.name} - Quantity: ${item.quantity} - Price: $${item.getTotalPrice()}`);
        });
        console.log(`Total: $${this.getTotal()}`);
    }
}

// Testing the functionality
const product1 = new Product(1, "Baskets", 100);
const product2 = new Product(2, "Socks", 20);
const product3 = new Product(3, "Bag", 50);

// Create a shopping cart instance
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 2);
cart.addItem(product2, 3);
cart.addItem(product3, 1);

// Display the cart
cart.displayCart();

// Remove an item and show updated cart
cart.removeItem(2);
cart.displayCart();
