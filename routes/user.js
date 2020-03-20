const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/signup", (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({
                error: err
            });
        } else {
            User.findOrCreate({
                where: { username: req.body.user_name },
                defaults: { password: hash, bio: req.body.bio }
            }).then(([user, created]) => {
                if (created) {
                    res.status(201).json({
                        message: "User created"
                    });
                } else {
                    res.result(409).json({
                        message: "Username already exists"
                    });
                }
            });
        }
    });
});
