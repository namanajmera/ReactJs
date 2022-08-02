const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&3t.uriVersion=3&3t.connection.name=New+Connection+-+imported+on+02-Aug-2022&3t.alwaysShowAuthDB=true&3t.alwaysShowDBFromUserRole=true"

const connectToMongo = () => {
   mongoose.connect(mongoURI,() => {
      console.log("Connected to Mongo Successfully");
   })
}


module.exports = connectToMongo;