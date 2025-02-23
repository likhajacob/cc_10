//Task 1 - Created Product Class

class Product { //Creating class Product
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
        this.stock -= quantity; //modifies the stock level when an order is placed
    };
};

const prod1 = new Product("Laptop", 101, 1200, 10); //Test case
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"