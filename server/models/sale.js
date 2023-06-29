const DB = require('../utils/db');

class Sale {
    id;
    name;
    price;
    description;
    category;

    constructor(id,name,price,description,category){
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.category =category;

    }

    static async FindAllSale(){
        return await new DB().FindAll('sales');
    }

    static async FindMaxPrice(max){
        let query = { price: { $lt: max } };

        return await new DB().FindAll('sales',query)
    }

    static async UpdateItemPrice(id,doc){
        return await new DB().UpdateById('sales',id,doc);
    }

    static async FindByPrice(num){
        let query = { "price": num };

        return await new DB().FindOne('sales',query)
    }
}

module.exports = Sale;