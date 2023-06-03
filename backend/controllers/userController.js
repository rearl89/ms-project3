const User = require('../models/userModel')

// login user
async function loginUser(req, res) {
    res.json({message: 'login user'})
}

// signup user
async function signupUser(req, res) {
    res.json({message: 'signup user'})
}

module.exports = { signupUser, loginUser }