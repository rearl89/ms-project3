const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema
//DB Structure
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.statics.signup = async function(email, password) {

    // validation
    if (!email || !password) {
        throw Error('All fields must be filled.')
    }
    if (!validator.isEmail(email)) {
        throw Error('Must enter a valid email.')
    }

    const exists = await this.findOne({ email })

    if (exists) {
        throw Error('Email already in use.')
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await this.create({ email, password: hash })
    return user
}

userSchema.statics.login = async function(email, password) {
    if (!email || !password) {
        throw Error('All fields must be filled.')
    }

    const user = await this.findOne({ email })

    if (!user) {
        throw Error('Please enter the correct email.')
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw Error('Password is incorrect.')
    }

    return user
}



module.exports = mongoose.model('User', userSchema)