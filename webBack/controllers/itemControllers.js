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
        const getItem1 = await Item.find({
            category: req.query.category
        })
        // ,{_id: 0}) 

        res.status(200).json(getItem1)
    } catch (e) {
        res.status(400).json({ message: e.message })
    }
}

const getOneItem = async (req, res) => {
    try {
        const getOneItem = await Item.findById(req.params.id)
        res.status(200).json(getOneItem)
    } catch (e) {
        res.status(400).json({ message: e.message })
    }
}




module.exports = {
    itemCreate, getOneItem, getItems
}