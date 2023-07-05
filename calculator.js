const bodyParser = require("body-parser"); // able to parse http request that we get
const express = require("express");

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); //getting access to the form data

app.get("/calculator", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/calculator", function (req, res) {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);

  const result = num1 + num2;

  res.send("The result of the calculation is " + result);
});

app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function (req, res) {
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);

  const BMI = weight / height ** 2;

  res.send("The calculated BMI is " + BMI);
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
