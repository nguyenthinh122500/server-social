const express = require("express");
const cors = require("cors");
const mysql2 = require("mysql2");
const routes = require("./routes");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("."));

app.listen(process.env.PORT, () => {
  console.log("Run port 5000");
});

app.use("/api/v1", routes);

const options = {
  definition: {
    info: {
      title: "Social Swagger",
      version: "1.0.0",
    },
  },
  apis: ["src/swagger/index.js"],
};

const specs = swaggerJsDoc(options);

app.use("/api-swagger", swaggerUi.serve, swaggerUi.setup(specs));
