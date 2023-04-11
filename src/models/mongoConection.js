const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongo://127.0.0.1:27017';

const DB_NAME = 'poc_mongo';

const connection = () => MongoClient
  .conection(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => conn.db(DB_NAME))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

module.exports = connection;
