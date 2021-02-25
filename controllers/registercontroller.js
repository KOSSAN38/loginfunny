const bcrypt = require('bcrypt');
const { query } = require('../models/db');
const { body, validationResult } = require('express-validator');

module.exports.show = async function (req, res, next) {

    if (req.session.loggedin) {
        return res.redirect('/home');
    }
    return res.render('register', { title: 'registrera' });
};

module.exports.store = async function (req, res, next) {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors.array());
        return res.status(400).render('register', { errors: error.array() });
    }

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    bcrypt.hash(password, 10, async function (err, hash) {
        if (err) throw err;
        try {
            const sql = 'INSERT INTO users (name, email, password, created_at, updated_at)VALUES (?, now(), now())';
            const result = await query(sql, [username, email, hash]);
            if (result.insertId > 0) {
                res.render('login', { username: username });
            }
        } catch (e) {
            next(e)
            console.error(e);
        }
    });
};

module.exports.destroy = async function (req, res, next) {
    const id = req.params.id;
    const password = req.body.password;
    if (id === req.session.userid) {
        const sql = 'DELETE FROM users WHERE id = ?';
    }
};

module.exports.upsate = async (req, res, next) => {
    const id = req.params.id;
    if (id == req.session.userid) {
        const sql = 'UPDATE users SET name =? WHERE id = ?';
    }
};