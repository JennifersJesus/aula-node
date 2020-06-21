const express = require("express");
const app = express();
app.use(express.json());

//app.get("/:name", (request, response) => {
//  const name = request.params.name || "World";
//  response.json({
//    message: "Hello World",
//  });
//});

app.get("/:team", (request, response) => {
  const team = request.params.team;
  let message;

  switch (team) {
    case "flamengo":
      message = "é o que temos pra hoje";
      break;
    case "vasco":
      message = "sem comentários";
      break;
    default:
      message = "os melhores";
      break;
  }

  response.json(message);
});

app.post("/somar", (request, response) => {
  const { num1, num2 } = request.body;

  response.json({
    result: `A soma de ${num1} + ${num2} é: ${num1 + num2}`,
  });
});

app.listen(3333, () => {
  console.log("Hello World");
});
