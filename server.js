import express from "express";
import bruxos from "./src/data/bruxos.js";


const app = express();
const portserver = 3000;
app.use(express.json());


app.get("/bruxos", (req, res) => {
    res.json(bruxos);
});

app.listen(3000, () => {
    console.log("🧙‍♂️ API dos Bruxos está no ar na porta 3000 !");
});