const mongoose = require('mongoose')
async function connect (handler) {
    if (handler.mongoURI) {
        await mongoose.connect(handler.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        })
  return mongoose
    } 
}
async function connectToMongo(handler) {
    await connect(handler).then(() => {
        try {
            console.log('Stop Prefab => Connected to mongo')
        } catch (err) {
            console.log('Stop Prefab => Failed to connect to mongo. Check your mongo URI.', err)
        }
    })
}   

module.exports = connectToMongo