const { Item } = require('../models/model')


const itemCreate = async (req, res) => {
    try {
        const item1 = new Item(req.body)
        await item1.save()
        res.status(200).json(item1)
    } catch (e) {
        res.status(400).json({ message: e.message })
    }
}

const getItems = async (req, res) => {
    try {
        const getItem1 = await Item.find({})
        res.status(200).json(getItem1)
    } catch (e) {
        res.status(400).json({ message: e.message })
    }
}





module.exports = {
    itemCreate
}