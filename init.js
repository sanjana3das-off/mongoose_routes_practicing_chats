const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

//creating the model= stored in model folder
let allChat = [
  {
    from: "Alice",
    to: "Bob",
    msg: "Hey Bob, how are you?",
    created_at: new Date(),
  },
  {
    from: "Bob",
    to: "Alice",
    msg: "I’m good Alice, thanks!",
    created_at: new Date(),
  },
  {
    from: "Charlie",
    to: "David",
    msg: "Are we meeting tomorrow?",
    created_at: new Date(),
  },
  {
    from: "David",
    to: "Charlie",
    msg: "Yes, same place at 10am.",
    created_at: new Date(),
  },
];

Chat.insertMany(allChat);
