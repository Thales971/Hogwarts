import express from "express";
import dados from "./src/data/dados.js";

const { bruxos, casas, varinhas, animais, pocoes } = dados;

const app = express();
const portserver = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🧙‍♂️ API dos Bruxos está no ar !");
});

app.get("/bruxos/", (req, res) => {
  if (bruxos.length > 0) {
    res.status(200).json(bruxos);
  } else {
    res.status(404).json({ message: "Nenhum bruxo encontrado." });
  }
});
app.get("/bruxos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const bruxo = bruxos.find((b) => b.id === id);
  if (bruxo) {
    res.status(200).json(bruxo);
  } else {
    res.status(404).json({
      mensagem: "bruxo não encontrado",
    });
  }
});

app.get("/casas/", (req, res) => {
  if (casas.length > 0) {
    res.status(200).json(casas);
  } else {
    res.status(404).json({ message: "Nenhuma casa encontrada." });
  }
});
app.get("/casas/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const casa = casas.find((b) => b.id === id);
  if (casa) {
    res.status(200).json(casa);
  } else {
    res.status(404).json({
      mensagem: "casa não encontrada",
    });
  }
});

app.get("/varinhas", (req, res) => {
  if (varinhas.length > 0) {
    res.status(200).json(varinhas);
  } else {
    res.status(404).json({ message: "Nenhuma varinha encontrada." });
  }
});
app.get("/varinhas/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const varinha = varinhas.find((b) => b.id === id);
  if (varinha) {
    res.status(200).json(varinha);
  } else {
    res.status(404).json({
      mensagem: "varinha não encontrada",
    });
  }
});

app.get("/animais", (req, res) => {
  if (animais.length > 0) {
    res.status(200).json(animais);
  } else {
    res.status(404).json({ message: "Nenhum animal encontrado." });
  }
});
app.get("/animais/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const animal = animais.find((b) => b.id === id);
  if (animal) {
    res.status(200).json(animal);
  } else {
    res.status(404).json({
      mensagem: "animal não encontrado",
    });
  }
});

app.get("/pocoes", (req, res) => {
  if (pocoes.length > 0) {
    res.status(200).json(pocoes);
  } else {
    res.status(404).json({ message: "Nenhuma poção encontrada." });
  }
});
app.get("/pocoes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const pocoe = pocoes.find((b) => b.id === id);
  if (pocoe) {
    res.status(200).json(pocoe);
  } else {
    res.status(404).json({
      mensagem: "Poção não encontrada",
    });
  }
});

app.listen(3000, () => {
  console.log("🧙‍♂️ API dos Bruxos está no ar na porta 3000 !");
});
