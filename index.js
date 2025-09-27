const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
app.get("/", (req, res) => {
  res.send("home working");
});

app.listen(8080, () => {
  console.log("app is listening on port 8080");
});

//index route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("index.ejs", { chats });
});

//NEW chats create render
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});
//Create Route
app.post("/chats", (req, res) => {
  let { from, msg, to } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });
  newChat
    .save()
    .then((res) => {
      console.log("chat was saved");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chats");
});

//edit route
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});

app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { msg } = req.body;
  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { msg: msg },
    { new: true, runValidators: true }
  );
  console.log(updatedChat);
  res.redirect("/chats");
});

//DESTROY ROUTE
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let del = await Chat.findByIdAndDelete(id);
  console.log(del);
  res.redirect("/chats");
});
