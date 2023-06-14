

const dataBase = require('../db/db-connect');


// ----------------------------------------------
// Constructeur de l'objet utilisateur
// ----------------------------------------------
const Utilisateur = function (utilisateur){
    this.id = utilisateur.id;
    this.nom = utilisateur.nom;
    this.email = utilisateur.email;
    this.age = utilisateur.age;
};

// ----------------------------------------------
// Récupération de tous les utilisateurs
// ----------------------------------------------
Utilisateur.getAllUtilisateurs = result_bdd_request => {
    dataBase.query("SELECT * FROM utilisateurs", (error, response) => {
        if (error) {
            result_bdd_request(error);
        }
        result_bdd_request(null, response);
    });
};

// ----------------------------------------------
// Récupération d'un utilisateur par ID
// ----------------------------------------------
Utilisateur.getUtilisateurById = (id, result_bdd_request) => {
    dataBase.query("SELECT * FROM utilisateurs WHERE id = ?", id, (error, response) => {
        if (error) {
            result_bdd_request(error);
        } else {
            result_bdd_request(null, response);
        }
    });
};

// ----------------------------------------------
// Mise à jour d'un utilisateur
// ----------------------------------------------
Utilisateur.updateUtilisateur = (id, updatedUtilisateur, result_bdd_request) => {
    const { nom,email,age } = updatedUtilisateur;
    const query = "UPDATE utilisateurs SET nom = ?, email= ?, age = ? WHERE id = ?";
    dataBase.query(query, [nom,email,age, id], (error, response) => {
        if (error) {
            result_bdd_request(error);
        } else {
            result_bdd_request(null, response.affectedRows);
        }
    });
};


// ----------------------------------------------
// Création d'un nouvel utilisateur
// ----------------------------------------------
Utilisateur.createUtilisateur = (nouveauUtilisateur, result_bdd_request) => {
    const { nom, email, age } = nouveauUtilisateur;

    const query = "INSERT INTO utilisateurs (nom ,email, age) VALUES (?,?,?)";
    dataBase.query(query, [nom, email, age], (error, response) => {
        if (error) {
            result_bdd_request(error);
        } else {
            result_bdd_request(null, response.insertId);
        }
    });
};

// ----------------------------------------------
// Suppression d'un utilisateur
// ----------------------------------------------
Utilisateur.deleteUtilisateur = (id, result_bdd_request) => {
    dataBase.query("DELETE FROM utilisateurs WHERE id = ?", id, (error, response) => {
        if (error) {
            result_bdd_request(error);
        } else {
            result_bdd_request(null, response.affectedRows);
        }
    });
};

module.exports = Utilisateur;
