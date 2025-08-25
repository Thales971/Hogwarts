import express from "express";
import dados from "./src/data/dados.js";

const { bruxos, casas, varinhas, animais, pocoes } = dados;

const app = express();
const portserver = 3000;
app.use(express.json());


app.get("/", (req, res) => {
    res.send("🧙‍♂️ API dos Bruxos está no ar !" );
});

app.get("/bruxos/", (req, res) => {
    if (bruxos.length > 0) {
        res.status(200).json(bruxos);
    } else {
        res.status(404).json({ message: "Nenhum bruxo encontrado." });
    }
});


app.get("/casas/", (req, res) => {
    if (casas.length > 0) {
        res.status(200).json(casas);
    } else {
        res.status(404).json({ message: "Nenhuma casa encontrada." });  
    }
});

    app.get("/varinhas", (req, res) => {
        if (varinhas.length > 0) {
            res.status(200).json(varinhas); 
        } else {
            res.status(404).json({ message: "Nenhuma varinha encontrada." });
        }
      });

      app.get("/animais", (req, res) => {
       if (animais.length > 0) {
        res.status(200).json(animais);
         } else {
            res.status(404).json({ message: "Nenhum animal encontrado." }); 
            }   
        });

      app.get("/pocoes", (req, res) => {
        if (pocoes.length > 0) {
            res.status(200).json(pocoes);
        } else {
            res.status(404).json({ message: "Nenhuma poção encontrada." });
        }
      });
      

app.listen(3000, () => {
    console.log("🧙‍♂️ API dos Bruxos está no ar na porta 3000 !");
});