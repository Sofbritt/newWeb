const { User } = require('../models/model')
const bcrypt = require('bcryptjs')

const register = async (req, res) => {

    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        const user1 = new User({ ...req.body, password: hashedPassword });
        await user1.save()
        res.status(200).json(user1)
    } catch (e) {
        res.status(400).json({ message: e.message })
    }

}

const login = async (req, res) => {
    try {
        const user = await User.find({ email: req.body.email });
        if (!user) {
            return res.json({ message: 'Wrong email' })
        }
        const isCorrect = await bcrypt.compare(req.body.password, user.password)
        if (isCorrect) {
            return res.json({ message: 'Wrong password' })
        }



    } catch (e) {
        res.status(400).json({ message: e.message })
    }
}


module.exports = {
    register, login
}