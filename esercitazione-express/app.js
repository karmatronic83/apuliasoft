const express = require("express");
const bodyParser = require("body-parser");
const app = express();

var loginForm = {
  username: "",
  password: "",
};

var registerForm = {
  username: "",
  password: "",
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile("public/register.html", { root: __dirname });
});

app.get("/login", function (req, res) {
  res.sendFile("public/login.html", { root: __dirname });
});

app.get("/register", function (req, res) {
  res.sendFile("public/login.html", { root: __dirname });
});

app.post("/login_post", function (req, res) {
  loginForm.username = req.body.username;
  loginForm.password = req.body.password;
  console.log(loginForm);
  console.log(registerForm);
  if (
    loginForm.username === registerForm.username &&
    loginForm.password === registerForm.password
  ) {
    res.render(__dirname + "/public/welcome.html", {
      username: loginForm.username,
    });
  } else {
    res.render(__dirname + "/public/login_fail.html");
  }
});

app.post("/register_post", function (req, res) {
  registerForm.username = req.body.username;
  registerForm.password = req.body.password;
  res.render(__dirname + "/public/welcome_register.html");
});

app.post("/test", (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
