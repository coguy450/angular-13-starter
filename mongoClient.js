const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'angularAlgo';

async function getClient() {
  return await client.connect()
}

async function getCollection(collName) {
  try {
    const db = await getClient();
    const coll = await db.db(dbName).collection(collName)
  //  console.log(coll)
    return coll
  } catch(err) {
    console.log(err)
  }
}

exports.saveActivity = async (req, res) => {
  const newActivity = req.body;
  console.log('req body here', newActivity)
  try {
    const collection = await getCollection('activities');
    const result = await collection.insertOne(newActivity);
    return res.status(200).send(result)
  } catch(err) {
    console.log(err)
    return res.status(400).send(err);
  }
}

exports.getActivities = async (req, res) => {
  const collection = getCollection('activities');
  try {
    const findResult = await collection.find({}).toArray();
    return res.status(200).send(findResult)
  } catch(err) {
    return res.status(400).send(err)
  }
}