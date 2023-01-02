import express from 'express';
import { body, check, validationResult } from 'express-validator'
import bcrypt from "bcrypt"
const router = express.Router();

import User from '../models/User.js';

router.route(`/`)
    .post(
        [
            body('email').isEmail(),
            check("password").exists(),
            check("handle").exists(),
            check("name").exists(), // also need to sanitise 
        ],
        (req, res) => {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.send({ message: `input(s) not valid` })
            }
            //const UserData = { password: bcrypt.hashSync(req.body.password, saltRounds) }
            const { email, handle } = req.body; // may be an issue with this nested if statement 
            User.findOne({ email }, (err, user) => {
                if (user) {
                    res.send({ message: `This email has an existing account` })
                } else {
                    User.findOne({ handle }, (err, user) => {
                        if (user) {
                            res.send({ message: `This handle is already in use` });
                        }
                        else {
                            // const user = new User(req.body);
                            const user = new User({
                                name: req.body.name,
                                handle: req.body.handle,
                                email: req.body.email,
                                password: bcrypt.hashSync(req.body.password, 8)
                            });
                            user.save(err => {
                                if (err) {
                                    res.send(err);
                                }
                                else {
                                    res.send({ message: `successful` });
                                }
                            });
                        }
                    })
                }
            })
        })

//                     user ? res.send({ message: `This handle is already in use` }) : registerNewUser(res, req.body)
//                 });
//             })

//         });
// const registerNewUser = (res, reqBody) => {
//     const user = new User(reqBody);
//     user.save(err => {
//         if (err) {
//             res.send(err);
//         }
//         else {
//             res.send({ message: `successful` });
//         }
//     })
// }



// if (user) {
//     res.send({ message: `This email has an existing account please login or use a different email` });
// }
// User.findOne({ email }, (err, user) => {
//     if (user) {
//         res.send({ message: `This email has an existing account please login or use a different email` });
//     }
// else {
//     const user = new User(req.body);
//     user.save(err => {
//         if (err) {
//             res.send(err);
//         }
//         else {
//             res.send({ message: `successful` });
//         }
//    });
//   }


export { router as register };