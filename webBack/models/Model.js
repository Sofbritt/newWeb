const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    basket: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Clothes' }],
    card: Number
})

const itemSchema = new mongoose.Schema({
    img: String,
    title: String,
    category: String,
    country: String,
    manufacturer: String,
    price: Number,
    sale: Number,
    time:String
})


module.exports = {
    User: mongoose.model('User', userSchema),
    Item: mongoose.model('Item', itemSchema)
}