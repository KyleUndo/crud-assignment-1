const express = require("express");
const app = express();
const PORT = 5000;

let profiles = require("./profiles.json");

app.use(express.json());

// HTTP REQUESTS
// GET
// POST
// PUT
// DELETE

app.get("/api/get-profiles", (req, res) => {
  res.json(profiles);
});

app.get("/api/get-profile/:id", (req, res) => {
  const { id } = req.params;
  const findUser = profiles.find((profile) => profile.id == id);

  return res.json({ findUser });
});

app.post("/api/profile", (req, res) => {
  const { name, email } = req.body;

  const newUser = { id: profiles.length + 1, name, email };
  profiles.push(newUser);

  res.json({
    message: "Success",
    profiles,
  });
});

app.delete("/api/delete-profile/:id", (req, res) => {
  const { id } = req.params;
  profiles = profiles.filter((profile) => profile.id != id);

  return res.json({ message: "Deleted", profiles });
});

app.put("/api/update-profile/:id", (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;

  let findUser = profiles.find((profile) => profile.id == id);

  Object.assign(findUser, { name, email });

  // findUser.name = name;
  // findUser.email = email;

  return res.json({ message: "Updated", profiles });
});

// API Endpoint
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
