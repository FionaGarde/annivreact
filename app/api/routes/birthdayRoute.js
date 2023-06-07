module.exports = (server) => {

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
}