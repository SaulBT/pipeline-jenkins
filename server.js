const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());


app.get('/pokemon', (req, res) => {
    const pokemon = {
        nombre: "Pikachu",
        tipo: "electrico",
        poder: "rayos"
    };
    console.log("Se ha recibido una solicitud GET en /pokemon");
    res.json(pokemon);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});