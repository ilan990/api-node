// ----------------------------------------------
// Importation du module de routage d'Express
// ----------------------------------------------

const router = require('express').Router();

// ----------------------------------------------
// Importation des fonctions du contrôleur de catégorie
// ----------------------------------------------

const {
    getAllUtilisateurs,
    getUtilisateurById,
    updateUtilisateur,
    createUtilisateur,
    deleteUtilisateur
} = require('../controllers/utilisateur.controller');


// ----------------------------------------------
//Annotation pour la documentation
// ----------------------------------------------
/**
 * @swagger
 * /utilisateurs:
 *   get:
 *     tags:
 *       - Utilisateur
 *     summary: Récupérer tous les utilisateurs.
 *     responses:
 *       200:
 *         description: Succès de la requête avec les utilisateurs récupérées.
 */

// ----------------------------------------------
// Définition de la route pour obtenir toutes les catégories
// ----------------------------------------------

router.get('/', getAllUtilisateurs);

/**
 * @swagger
 * /utilisateurs/{id}:
 *   get:
 *     tags:
 *       - Utilisateur
 *     summary: Récupérer un utilisateur par ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'utilisateur à récupérer.
 *     responses:
 *       200:
 *         description: Succès de la requête avec l'utilisateur récupéré.
 *       404:
 *         description: L'utilisateur avec l'ID spécifié n'a pas été trouvée.
 */
// ----------------------------------------------
// Définition de la route pour obtenir un utilisateur
// ----------------------------------------------
router.get('/:id', getUtilisateurById);

/**
 * @swagger
 * /utilisateurs:
 *   post:
 *     tags:
 *       - Utilisateur
 *     summary: Créer une nouvelle catégorie.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Utilisateur'
 *     responses:
 *       200:
 *         description: Succès de la requête avec l'utilisateur créé.
 *       400:
 *         description: Requête incorrecte, vérifiez les données fournies.
 */
// ----------------------------------------------
// Définition de la route pour créer un Utilisateur
// ----------------------------------------------
router.post('/', createUtilisateur);

/**
 * @swagger
 * /utilisateurs/{id}:
 *   put:
 *     tags:
 *       - Utilisateur
 *     summary: Mettre à jour un utilisateur.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'utilisateur à mettre à jour.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/utilisateur'
 *     responses:
 *       200:
 *         description: Succès de la requête avec l'utilisateur mise à jour.
 *       400:
 *         description: Requête incorrecte, vérifiez les données fournies.
 *       404:
 *         description: L'utilisateur avec l'ID spécifié n'a pas été trouvée.
 */
// ----------------------------------------------
// Définition de la route pour mettre à jour un Utilisateur
// ----------------------------------------------
router.put('/:id', updateUtilisateur);

/**
 * @swagger
 * /utilisateurs/{id}:
 *   delete:
 *     tags:
 *       - Utilisateur
 *     summary: Supprimer un utilisateur.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'utilisateur à supprimer.
 *     responses:
 *       200:
 *         description: Succès de la requête avec la catégorie supprimée.
 *       404:
 *         description: L'utilisateur avec l'ID spécifié n'a pas été trouvée.
 */
// ----------------------------------------------
// Définition de la route pour supprimer un utilisateur
// ----------------------------------------------
router.delete('/:id', deleteUtilisateur);


// ----------------------------------------------
// Exportation du module de routage
// ----------------------------------------------

module.exports=router;