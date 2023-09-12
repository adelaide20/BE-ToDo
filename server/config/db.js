const Mongoose = require("mongoose")
const localDB = `mongodb://localhost:27017/todo`
const connectDB = async() => {
    await Mongoose.connect(localDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("MongoDB Connected")
}
module.exports = connectDB