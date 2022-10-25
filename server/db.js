const Mongoose = require("mongoose")
const mongoDB = `mongodb+srv://MirabilliaSimple:Satanassi112@cluster0.ipgzzlv.mongodb.net/MirabilliaDB`
const connectDB = async () => {
  await Mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log("MongoDB Connected")
}
module.exports = connectDB