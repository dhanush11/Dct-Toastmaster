const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const connection_uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/edu_dct';

mongoose.connect(connection_uri, { useNewUrlParser: true }).then(() => {
    console.log("DB is connected")
}).catch((err) => {
  console.log(err)
})


mongoose.set('useCreateIndex', true);

module.exports = {
  mongoose
}
