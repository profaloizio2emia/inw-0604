const mongoose = require('mongoose')

const conexao = async() => {
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb://localhost/ac1tri')
    //conexao atlas
    var atlas = await mongoose.connect('mongodb+srv://userAdmin:admin1234@cluster0.nwf8p.mongodb.net/temporario?retryWrites=true&w=majority')
}

module.exports = conexao
