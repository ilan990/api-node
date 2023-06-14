const assert = require('assert');
const sinon = require('sinon');
const utilisateurModel = require('../src/models/user.model');
const utilisateurController = require('../src/controllers/utilisateur.controller');

describe('utilisateurController', function () {
    describe('getAllUtilisateurs', function () {
        it('should return all utilisateurs', function () {
            // Données de simulation
            const expectedResult = ['utilisateur 1', 'utilisateur 2', 'utilisateur 3'];
// Remplace la fonction getAllLivres de autheurModel par une implémentation fictive
            sinon.stub(utilisateurModel, 'getAllUtilisateurs').callsFake(function (callback) {
                callback(null, expectedResult);
            });

            const req = {};
            const res = {
                send: function (data) {
                    assert.deepStrictEqual(data, expectedResult);
                    utilisateurModel.getAllUtilisateurs.restore(); // Restoring the original function
                },
                status: function (statusCode) {
                    assert.strictEqual(statusCode, 500);
                    return this;
                }
            };
// Appelle la fonction getAllLivres de livreController

            utilisateurController.getAllUtilisateurs(req, res);
        });

        it('should handle error and return status 500', function () {
            const expectedError = new Error('Some error message');

            // Stubbing autheurModel.getAllAutheurs to return the error
            sinon.stub(utilisateurModel, 'getAllUtilisateurs').callsFake(function (callback) {
                callback(expectedError, null);
            });

            const req = {};
            const res = {
                send: function (data) {
                    assert.fail('send should not be called');
                },
                status: function (statusCode) {
                    assert.strictEqual(statusCode, 500);
                    return this;
                },
                send: function (data) {
                    assert.deepStrictEqual(data, {
                        message: expectedError.message || 'Une erreur est survenue en essayant de récupérer les utilisateursf²tPPWs'
                    });
                    // Rétablit la fonction getAllLivres d'origine

                    utilisateurModel.getAllUtilisateurs.restore();
                }
            };

            utilisateurController.getAllUtilisateurs(req, res);
        });
    });
});