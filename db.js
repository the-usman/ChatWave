const mongoose = require('mongoose')

const ConnectToDataBase = async () => {
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/chat-wave')
        console.log("Successfully Connected To MongoDB")
    } catch (error) {
        console.error(error)
    }
}

module.exports = ConnectToDataBase;