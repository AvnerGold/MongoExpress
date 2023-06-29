const bcrypt = require('bcrypt');
const DB = require('../utils/db');

class User{
    name;
    password;
    date;
    city;
    age;
    email;

    constructor(name,password,date,city,age,email){
        this.name = name;
        this.password = password;
        this.date = date;
        this.city =city;
        this.age = age;
        this.email = email;
    }
    
    static async FindAllUsers(){
       
        return await new DB().FindAll('users');
    }

    static async FindByCity(city){
        let query = {"city": city}
        return await new DB().FindAll('users',query);
    }

    static async RegisterUser(name,pass,date,city,age,email){
        try {
            let password = await bcrypt.hash(pass,10);
            // this.name = name;
            // console.log(name);
            // this.password = password;
            // this.date = date;
            // this.city =city;
            // this.age = age;
            // this.email = email;
            let newUser = {name,password,date,city,age,email}
            await new DB().Insert("users",newUser)
            //UsersRoute.push({username,password:hashPassowrd});
            return true
        } catch (error) {
            return false
        }
    }

    static async LoginUser(name,password){
        console.log("password:",password);
        console.log(name);
        let query = {"name": name}
        let user = await new DB().FindOne("users",query);

        console.log(user);
        console.log(user);
        // if (!user) {
        //     return false 
        // }
        return await bcrypt.compare(password,user.password);
            
        
    }
}

module.exports = User;