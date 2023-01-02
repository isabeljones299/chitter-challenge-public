import express from 'express';
import { check, validationResult } from 'express-validator'
import bcrypt from "bcrypt"

const router = express.Router();

import User from '../models/User.js';

router.route(`/`)
    .post(
        [
            check("email").exists(),
            check("password").exists()
        ],
        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).send(`Ensure required fields are filled in`);
            }
            User.findOne({ email: req.body.email }, (err, user) => {
                if (user) {
                    const passwordMatch = bcrypt.compareSync(req.body.password, user.password)
                    if (user && passwordMatch) {
                        res.send({ message: `Login success`, user });
                    }
                }
                else {
                    res.send({ message: `email or password incorrect` });
                }
            });
        });




export { router as login };