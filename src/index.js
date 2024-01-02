require("dotenv").config();

const express = require("express");

const newsRoutes = require("./routes/noticias.route");
const faleConnoscoRoutes = require("./routes/faleConnosco.route");
const servicoEquipamentoRoutes = require("./routes/servicoEquipamento.route");
const informacaoGeralRoutes = require("./routes/informacaoGeral.route");
const redeSocialRoutes = require("./routes/redeSocial.route");
const categoriaRoutes = require("./routes/categoria.route");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger/swagger.json");

const app = express();

app.use(express.json());

// add route for swagger document API
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/noticias", newsRoutes);
app.use("/faleConnosco", faleConnoscoRoutes);
app.use("/servicoEquipamento", servicoEquipamentoRoutes);
app.use("/informacaoGeral", informacaoGeralRoutes);
app.use("/redeSocial", redeSocialRoutes);
app.use("/categoria", categoriaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
