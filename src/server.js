// ----------------------------------------------
// Configuration du serveur
// ----------------------------------------------

const dotenv = require('dotenv');
const express = require('express');

// ----------------------------------------------
// Importation des modules de routage pour les produits, les catégories et la documentation swagger
// ----------------------------------------------


const utilisateurRoute = require('./routes/utilisateur.route');
const docRoute = require('./middleware/swagger.middleware')
const { serveSwagger, setupSwagger } = require('./middleware/swagger.middleware');



// ----------------------------------------------
// Configuration de l'environnement à partir du fichier .env
// ----------------------------------------------

dotenv.config();

// ----------------------------------------------
// Configuration du serveur pour prendre en charge les données JSON
// ----------------------------------------------

const server = express();
server.use(express.json());
server.set('json spaces', 2); // Configuration de l'indentation JSON pour rendre la sortie plus lisible
// server.use('/api/v1/docs',docRoute); // Configuration des routes pour la documentation Swagger
server.use('/api/v1/docs', serveSwagger, setupSwagger);

// Configuration des routes pour les utilisateurs

server.use('/api/v1/utilisateurs', utilisateurRoute);


// ----------------------------------------------
// Route de base pour tester le fonctionnement du serveur
// ----------------------------------------------
server.get('/', (req, res) => {
    res.send('Hello, World!');
});

// ----------------------------------------------
// Configuration des routes supplémentaires pour les produits et les catégories
// ----------------------------------------------

server.use('/api/v1/utilisateurs/', utilisateurRoute);


// ----------------------------------------------
// Configuration du port d'écoute du serveur
// ----------------------------------------------


const port = Number(process.env.PORT || 8081);
server.listen(port, () => {
    console.log(`Your port is ${port}`);
});

module.exports=server; // Exportation du serveur pour une utilisation externe