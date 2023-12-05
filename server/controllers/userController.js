// userController.js
const jwt = require('jsonwebtoken');
const users = require('../models/userModel');

const secretKey = 'secretKey'; // Ar trebui să fie gestionat într-un mod securizat

const register = (req, res) => {
    const { name, password, email } = req.body;
    const avatar = req.file.buffer;

    if (!name || !password || !email || !avatar) {
        return res.status(400).json({ error: 'Toate câmpurile sunt obligatorii.' });
    }

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ error: 'Acest email este deja înregistrat.' });
    }

    const newUser = { name, password, email, avatar };

    const token = jwt.sign({ email: newUser.email }, secretKey);

    newUser.token = token;

    users.push(newUser);

    res.status(201).json({ message: 'Utilizator înregistrat cu succes.', token });
};

const getUsers = (req, res) => {
    res.status(200).json(users);
};

module.exports = {
    register,
    getUsers
};
