const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Shahin-Sha:Shahinsha123@cluster0.vmdlay9.mongodb.net/CEV')
    .then(() => {
        console.log("DB connected")
    })
    .catch(err => {
        console.log('Error :' + err)
    })