const QueryGenerator = require("../generators/query.generator");
const database = require("../utils/database");

const UserModer = {
    async CreateUser(userData){
        let query= QueryGenerator.insert('users',userData)
        return database.promise().query(query)
    }
}