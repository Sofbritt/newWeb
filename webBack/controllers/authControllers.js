const { User } = require('../models/model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');



const register = async (req, res) => {

    try {
        const salt = await bcrypt.genSalt(10)
        console.log(req.body)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        const user1 = new User({ ...req.body, password: hashedPassword });
        await user1.save()
        res.status(200).json({ message: 'created' })
    } catch (e) {
        res.status(400).json({ message: e.message })
    }

}
// {
//     "name":"Armen"
//     ,"email":"1234abc@",
//     "password":"657wer",
//     "card":54892
//     }
const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.json({ message: 'Wrong email' })
        }
        console.log(req.body)
        const isCorrect = bcrypt.compareSync(req.body.password, user.password)
        console.log(isCorrect)
        if (!isCorrect) {
            return res.json({ message: 'Wrong password' })
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT)
        console.log(token)
        console.log(_docsss)
        const { password, ...others } = user._doc

        res
            .cookie("access_token", token, {
                httpOnly: true,
            })
            .status(200)
            .json(others)



    } catch (e) {
        console.log(e)
        res.status(400).json({ message: e.message })
    }
}








module.exports = {
    register, login
}