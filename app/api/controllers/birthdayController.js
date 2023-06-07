const Birthday = require('../models/birthdayModel');

const textApiProvider = require('../providers/textApiProvider');

exports.listAllBirthdays = (req, res) => {
    Birthday.find({}, (error, birthdays) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(birthdays);
        }
    })
}

exports.createABirthday = (req, res) => {
    let newBirthday = new Birthday(req.body);
    
    newBirthday.save((error, birthday) => {
        if (error) {
            res.status(401);
            console.log(error);
            res.json({ message: "Reqûete invalide." });
        }
        else {
            res.status(201);
            res.json({ message: `L'anniversaire de ${birthday.lastname}, ${birthday.firstname} a été enregistré(e) !`});
        }
    })

}

exports.getABirthday = (req, res) => {
    Birthday.findById(req.params.birthday_id, (error, birthday) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(birthday);
        }
    })
}

exports.deleteABirthday = (req, res) => {
    Birthday.findByIdAndRemove(req.params.birthday_id, (error) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json({message: "Anniversaire supprimé"});
        }
    })
}