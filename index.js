
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

import Piloto from './models/Piloto.js';
import Equipe from './models/Equipe.js';
import Circuito from './models/Circuito.js';

// Página inicial

app.get('/', (req, res) => {
    res.render("index");
});

// PILOTOS

app.get('/piloto', async (req, res) => {
    const pilotos = await Piloto.find();
    res.render("piloto/lst", { pilotos });
});

app.get("/piloto/add", (req, res) => {
    res.render("piloto/add");
});

app.post('/piloto/add', async (req, res) => {
    const { nome, nacionalidade, idade, numero, equipe } = req.body;

    await Piloto.create({
        nome,
        nacionalidade,
        idade,
        numero,
        equipe
    });

    res.redirect('/piloto');
});

app.get("/piloto/upd/:id", async (req, res) => {
    const piloto = await Piloto.findById(req.params.id);

    res.render("piloto/upd", {
        piloto: piloto
    });
});

app.post('/piloto/upd/:id', async (req, res) => {
    const { nome, nacionalidade, idade, numero, equipe } = req.body;

    await Piloto.findByIdAndUpdate(req.params.id, {
        nome,
        nacionalidade,
        idade,
        numero,
        equipe
    });

    res.redirect('/piloto');
});

app.get('/piloto/del/:id', async (req, res) => {
    await Piloto.findByIdAndDelete(req.params.id);
    res.redirect('/piloto');
});

// EQUIPES

app.get('/equipe', async (req, res) => {
    const equipes = await Equipe.find();
    res.render("equipe/lst", { equipes });
});

app.get('/equipe/add', (req, res) => {
    res.render("equipe/add");
});

app.post('/equipe/add', async (req, res) => {
    const { nome, pais, chefe, anoFundacao } = req.body;

    await Equipe.create({
        nome,
        pais,
        chefe,
        anoFundacao
    });

    res.redirect('/equipe');
});

app.get('/equipe/upd/:id', async (req, res) => {
    const equipe = await Equipe.findById(req.params.id);
    res.render("equipe/upd", { equipe });
});

app.post('/equipe/upd/:id', async (req, res) => {
    const { nome, pais, chefe, anoFundacao } = req.body;

    await Equipe.findByIdAndUpdate(req.params.id, {
        nome,
        pais,
        chefe,
        anoFundacao
    });

    res.redirect('/equipe');
});

app.get('/equipe/del/:id', async (req, res) => {
    await Equipe.findByIdAndDelete(req.params.id);
    res.redirect('/equipe');
});

// CIRCUITOS

app.get('/circuito', async (req, res) => {
    const circuitos = await Circuito.find();
    res.render("circuito/lst", { circuitos });
});

app.get('/circuito/add', (req, res) => {
    res.render("circuito/add");
});

app.post('/circuito/add', async (req, res) => {
    const { nome, pais, cidade, extensao, voltas, recorde } = req.body;

    await Circuito.create({
        nome,
        pais,
        cidade,
        extensao,
        voltas,
        recorde
    });

    res.redirect('/circuito');
});

app.get('/circuito/upd/:id', async (req, res) => {
    const circuito = await Circuito.findById(req.params.id);
    res.render("circuito/upd", { circuito });
});

app.post('/circuito/upd/:id', async (req, res) => {
    const { nome, pais, cidade, extensao, voltas, recorde } = req.body;

    await Circuito.findByIdAndUpdate(req.params.id, {
        nome,
        pais,
        cidade,
        extensao,
        voltas,
        recorde
    });

    res.redirect('/circuito');
});

app.get('/circuito/del/:id', async (req, res) => {
    await Circuito.findByIdAndDelete(req.params.id);
    res.redirect('/circuito');
});

// Iniciar servidor

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
