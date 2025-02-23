//Task 1 - Created Product Class

class Product { 
    constructor(name, id, price, stock) { //Constructor setting up specified properties
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    };

    getDetails(){ //Add a method getDetails()
        return `Product: ${this.name}, ID: ${this.id}, Price: ${this.price}, Stock: ${this.stock}`; //returns a formatted string of product details
    };

    updateStock(quantity){ //Add a method updateStock(quantity)
        this.stock -= quantity; //modifies stock level when order is placed
    };
};

const prod1 = new Product("Laptop", 101, 1200, 10); //Test case
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"
//Task 2 - Created Order Class

class Order { 
    constructor(orderId, product, quantity) { //Constructor setting up specified properties
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
        this.product.updateStock(this.quantity);
    };

    getOrderDetails() { //Add a method getOrderDetails()
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.product.price * this.quantity}"`; //Returns a formatted string of order details
    };
};

const order1 = new Order(501, prod1, 2); //Test case
console.log(order1.getOrderDetails()); 
// Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)
//Task 3 - Created Inventory Class

class Inventory {
    constructor() {
        this.products = []; //Setting up empty products array
        this.orders = []; //Task 4 - Add a orders array in the Inventory class.
    };

    addProduct(product) { //Adds a new product to inventory
        this.products.push(product); //Using .push() method
    };

    listProducts() { //Logs all products' details.
        return this.products.forEach(product => console.log(product.getDetails()));
    };

    placeOrder(orderId, product, quantity) { //Task 4 - Add method placeOrder(orderId, product, quantity)
        if (product.stock >= quantity) {
            let order  = new Order(orderId, product, quantity); // Creates a new order
            this.orders.push(order); //adds it to orders if stock is available
        } else {
            return `Insufficient stock! Stock of ${product.name} is currently ${product.stock}`; //Message returned if requested stock is unavailable
        };
    };

    listOrders() { //Task 4 - Add method listOrders()
        this.orders.forEach(order => console.log(order.getOrderDetails())); //Logs all placed orders.
    };

    restockProduct(productId, quantity) { //Task 5 - Add a method restockProduct(productId, quantity)
        let product = this.products.find(product => product.id === productId); //Finds product based on productId
        if (product) {
            product.stock += quantity; //Increase the stock of the product
        };
    };
};

const inventory = new Inventory(); //Test case for Task 3
inventory.addProduct(prod1);
inventory.listProducts();
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"
//Task 4 - Implemented Order Management
inventory.placeOrder(601, prod1, 2); //Test case for Task 4
inventory.listOrders();
// Expected output: "Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400"
console.log(prod1.getDetails());
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3"
