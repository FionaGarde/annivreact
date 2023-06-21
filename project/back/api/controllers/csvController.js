
const Birthday = require( '../models/birthdayModel');
const fs = require('fs');
const csv = require('csv-parser');
const { Readable }= require('stream');

exports.upload = async (req, res) => {

//recupere le binaire uploader dans req.body
//parser le binaire avec csv-parser
//enregistrer les données en bdd
  const data = [];

  req.on('data', chunk => {
    data.push(chunk);
  });

  req.on('end', () => {
    const binaryData = Buffer.concat(data);

    const results = [];

    const readableStream = Readable.from([binaryData]);
    
    readableStream
    .pipe(csv())
    .on('data', (anniv) => results.push(anniv)) 
    csv({ separator: '\n' })
    .on('end', () => {
    console.log(results)
    })
    .on('data', async (anniv) => {
      const birthday = new Birthday({
        lastname: anniv.lastname,
        firstname: anniv.firstname,
        birth: anniv.birth,
        email: anniv.email
      });
      
      try {
        await birthday.save();
      } catch (error) {
        console.error('Erreur lors de l\'enregistrement des données:', error);
      }
    })
    .on('end', () => {
      console.log('Données enregistrées avec succès');
    });  
    
  });
};
