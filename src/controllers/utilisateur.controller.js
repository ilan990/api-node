// ----------------------------------------------
// Instance et appele du model pour chaque fonction
// ----------------------------------------------
const utilisateurModel = require('../models/user.model');


// ----------------------------------------------
// Fonction pour récupérer tous les Utilisateurs
// ----------------------------------------------
const getAllUtilisateurs = (req, res) => {
    utilisateurModel.getAllUtilisateurs((error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue en essayant de récupérer les utilisateurs"
            });
        } else {
            res.send(data);
        }
    });
};
// ----------------------------------------------
// Fonction pour récupérer un utilisateur par ID
// ----------------------------------------------

const getUtilisateurById = (req, res) => {
    const utilisateurId = req.params.id;

    utilisateurModel.getUtilisateurById(utilisateurId, (error, utilisateur) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue en essayant de récupérer l'utilisateur"
            });
        } else {
            if (utilisateur) {
                res.send(utilisateur);
            } else {
                res.status(404).send({
                    message: "utilisateur non trouvé"
                });
            }
        }
    });
};
// ----------------------------------------------
// Fonction pour mettre à jour une catégorie
// ----------------------------------------------


const updateUtilisateur = (req, res) => {
    const utilisateurId = req.params.id;
    const nouveauUtilisateur = {
        nom: req.body.nom,
        email: req.body.email,
        age: req.body.age
    };

    utilisateurModel.updateUtilisateur(utilisateurId, nouveauUtilisateur, (error, rowsAffected) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la mise à jour de l'utilisateur"
            });
        } else {
            if (rowsAffected > 0) {
                res.send({ id: utilisateurId, ...nouveauUtilisateur });
            } else {
                res.status(404).send({
                    message: "Utilisateur non trouvé"
                });
            }
        }
    });
};
// ----------------------------------------------
// Fonction pour créer un nouvel utilisateur
// ----------------------------------------------


const createUtilisateur = (req, res) => {
    const nouveauUtilisateur = {
        nom: req.body.nom,
        email: req.body.email,
        age: req.body.age
    };

    utilisateurModel.createUtilisateur(nouveauUtilisateur, (error, utilisateurId) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la création de l'utilisateur"
            });
        } else {
            res.send({ id: utilisateurId, ...nouveauUtilisateur });
        }
    });
};
// ----------------------------------------------
// Fonction pour supprimer un utilisateur
// ----------------------------------------------

const deleteUtilisateur = (req, res) => {
    const utilisateurId = req.params.id;

    utilisateurModel.deleteUtilisateur(utilisateurId, (error, rowsAffected) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la suppression de l'utilisateur"
            });
        } else {
            if (rowsAffected > 0) {
                res.send({ message: "utilisateur supprimé avec succès" });
            } else {
                res.status(404).send({
                    message: "Utilisateur non trouvé"
                });
            }
        }
    });
};
// ----------------------------------------------
// Exportation des fonctions du contrôleur de utilisateur
// ----------------------------------------------

module.exports = {
    getAllUtilisateurs,  // Fonction pour obtenir tous les utilisateurs
    getUtilisateurById, // Fonction pour obtenir un utilisateur par son identifiant
    updateUtilisateur, // Fonction pour créer un utilisateur
    createUtilisateur, // Fonction pour mettre à jour un utilisateur par son identifiant
    deleteUtilisateur // Fonction pour supprimer un utilisateur par son id
};
