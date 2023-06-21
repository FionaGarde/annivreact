/*module.exports = (server) => {

    const birthdayController = require("../controllers/birthdayController");

    server.route("/birthdays") 
    //lister tous les anniversaires
    .get(birthdayController.listAllBirthdays)
    //creer un anniversaire
    .post(birthdayController.createABirthday);

    server.route("/birthdays/:birthday_id") // req.params.birthday_id
    //afficher un anniversaire
    .get(birthdayController.getABirthday)
    //supprimer un anniversaire
    .delete(birthdayController.deleteABirthday)
}*/


exports.routes = (server) => {
const express = require('express');
const csvController = require('../controllers/csvController');
const Birthday = require( '../controllers/birthdayController');

const router = express.Router();


  // CSV
  router.post('/csv/upload', csvController.upload);

  // Birthdays
  router.get('/birthday', Birthday.getBirthdays);

  server.use("/", router);
};
