// ----------------------------------------------
// Importation de la lib pour générer le json swagger
// ----------------------------------------------
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");



// ----------------------------------------------
// Définition de l'architecture de base de la documentation
// ----------------------------------------------
const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Les différents users",
            version: "3.2.0",
            description: "Documentation node js",

        },
        servers: [
            {
                url: "http://localhost:8081/api/v1",
            },
        ],
        components: {
            schemas: {
                UtilisateurInput: {
                    type: "object",
                    properties: {
                        id:{
                            type:"integer",
                        },
                        nom: {
                            type: "string",
                        },
                        email: {
                            type: "string",
                        },
                        age: {
                            type: "integer",
                        },
                    },
                    required: ["id"], // Indiquez les propriétés requises
                },
            },
        },
        tags: [
            {
                name: "Utilisateurs", // Nom du tag pour les utilisateurs
                description: "Opérations liées aux utilisateurs",
            },
        ],
    },
    apis: ["./routes/*.js"],
};


// ----------------------------------------------
// Permet de trier dans la documentation par type de requette HTTP
// ----------------------------------------------
const specs = swaggerJsdoc(options);

const serveSwagger = swaggerUi.serve;
const setupSwagger = swaggerUi.setup(specs);

module.exports = { serveSwagger,setupSwagger};
