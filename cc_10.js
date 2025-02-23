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
