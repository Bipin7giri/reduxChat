const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const hostname = '127.0.0.1';
let cors = require('cors');
app.use(cors());
const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/chattest';

const connect = async () => {
  try {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('connected to mongodb');
  } catch (error) {
    console.error(error);
  }
};
connect();

const MessageSchema = new mongoose.Schema(
  {
    userName: { type: String, require: true },
    message: { type: String, require: true },
  }
  // { collection: 'chat' }
);
const Message = mongoose.model('chat', MessageSchema);

app.post('/chat', async (req, res) => {
  await Message.create(req.body);
  res.json({
    message: 'done',
  });
});

app.get('/chat', async (req, res) => {
  const messageDetails = await Message.find({});
  console.log(messageDetails);
  res.json({
    messageDetails,
  });
});

// app.get("/students", (req, res) => {
//   res.json({
//     students: students,
//   });
// });

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}`);
  console.log(`Example app listening on port ${port}`);
});
