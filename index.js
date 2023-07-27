import express from "express";
import fetch from "node-fetch";
import path from "path";

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

// Maakt een route voor de overzichtspagina
app.get("/", (request, response) => {
    response.render("index")
});

app.listen(8000, () => {
    console.log("Server gestart op http://localhost:8000");
});
  
async function fetchJson(url, payload = {}) {
    return await fetch(url, payload).then((response) => response.json());
}