const Candidate = require('../models/Candidate');


module.exports = {
    async register(req, res) {

        const { email, gender, name, cep } = req.body;

        const newCandidate = new Candidate();

        newCandidate.email = email;
        newCandidate.name = name;
        newCandidate.gender = gender;
        newCandidate.cep = cep;

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('iti malia deu probleminha!');
            }

            return res.status(200).send(savedCandidate);
        });
    },



};