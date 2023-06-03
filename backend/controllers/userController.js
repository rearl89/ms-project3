const User = require('../models/userModel')

// login user
async function loginUser(req, res) {
    res.json({message: 'login user'})
}

// signup user
async function signupUser(req, res) {
    const {email, password} = req.body

    try {
        const user = await User.signup(email, password)

        res.status(200).json({email, user})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { signupUser, loginUser }