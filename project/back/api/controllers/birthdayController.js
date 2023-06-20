const Birthday = require('../models/birthdayModel');

exports.listAllBirthdays = async (req, res) => {

 const birthdays = await Birthday.find({});

 res.json(birthdays);

    // Birthday.find({}, (error, birthdays) => {
    //     if (error) {
    //         res.status(500);
    //         console.log(error);
    //         res.json({ message: "Erreur serveur." });
    //     }
    //     else {
    //         res.status(200);
    //         res.json(birthdays);
    //     }
    // })
}

exports.createABirthday = async (req, res) => {
    const newBirthday = new Birthday(req.body);

    await newBirthday.save();

    res.json({ message: `L'anniversaire de ${newBirthday.firstname} ${newBirthday.lastname} a été enregistré(e) !`});
    
    /*newBirthday.save((error, birthday) => {
        if (error) {
            res.status(401);
            console.log(error);
            res.json({ message: "Reqûete invalide." });
        }
        else {
            res.status(201);
            res.json({ message: `L'anniversaire de ${birthday.lastname}, ${birthday.firstname} a été enregistré(e) !`});
        }
    })*/

}

exports.getABirthday = async (req, res) => {

    const birthday = await Birthday.findById(req.params.birthday_id,{});

    res.json(birthday);

/*    Birthday.findById(req.params.birthday_id, (error, birthday) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(birthday);
        }
    })*/
}

exports.deleteABirthday = async (req, res) => {

    const birthdays = await Birthday.findByIdAndRemove(req.params.birthday_id,{});

    res.json({message: "Anniversaire supprimé"});

    /*Birthday.findByIdAndRemove(req.params.birthday_id, (error) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json({message: "Anniversaire supprimé"});
        }
    })*/
}