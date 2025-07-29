const express = require("express");
const app = express();
const PORT = 5000;

const profile = require("./profiles.json");

// // nested objecgt
// const req = {
//   body: [
//     {
//       name: "test",
//       email: "test",
//     },
//   ],
// };

// const { name, email } = req.body[0];

// console.log("name", name);

// middleware
app.use(express.json());

// HTTP REQUESTS
// GET
// POST
// PUT
// DELETE

// const sampleFunction = (name, age) => {
//   console.log("name", name, age);
// };

// sampleFunction("John Doe", 12);

// const body = {
//   name: "test",
//   email: "test@gmail.com",
// };

// // destructure
// const { name, email } = body;

// console.log(name);
// console.log(email);

// app.post("/api/like", function (req, res) {
//   res.json({
//     message: "Liked",
//   });
// });

app.get("/api/get-profiles", (req, res) => {
  res.json(profile);
});

app.post("/api/profile", function (req, res) {
  const { name, email } = req.body;

  const newUser = { name, email };
  const data = profile.push(newUser);

  res.json({
    message: "Success",
    data,
  });
});

// API Endpoint
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
