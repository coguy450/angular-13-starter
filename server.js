const express = require('express');
const bodyParser = require('body-parser');

const {saveActivity, getActivities} = require('./mongoClient');

const app = express();
app.use(bodyParser.json({ strict: false, limit: '5mb' }))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'authorization, cache-control, content-type')
  res.header('Access-Control-Request-Headers', 'authorization, cache-control, content-type')
  next()
})

const PORT = 4000;
app.listen({port: PORT}, () => {
  console.log(`🚀  Server ready at http://localhost:${PORT}`);
});



app.get('/test', (req, res) => {
  res.status(200).send({message: 'Hello'})
})

app.post('/activity', saveActivity);
app.get('/activity', getActivities);
