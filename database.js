const mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://service:service@cluster0.wporsti.mongodb.net/our_project?retryWrites=true&w=majority', {

    useNewUrlParser: true,
    useUnifiedTopology: true

}

),

    () => {
        try {

        } catch (error) {
            console.error(error);
        }
    };
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('connection to database was succesful');
});