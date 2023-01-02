import { check, validationResult } from 'express-validator'
import express from 'express';
import Peep from '../models/Peep.js';
export const router = express.Router();

router.route(`/`)
    .get((req, res) => {

        Peep.find((error, peeps) => {

            // console.log(peeps)
            error ? res.status(404).json({ error: `Peeps not found` }) : res.send(peeps)

            // res.redirect('/')
        });
    })

router.route(`/`)
    .post(
        // body('date').isDate()
        [

            check('peepMessage').exists(),
            check('date').exists().isISO8601(),
            check('peeperUsername').exists(),
            check('handle').exists()
        ]

        , async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {

                return res.status(422).json({ error: errors });

            }
            const handle = req.body.handle
            const peepMessage = req.body.peepMessage
            const date = req.body.date
            const peeperUsername = req.body.peeperUsername // simplify this??

            const newPeep = new Peep({
                peepMessage: peepMessage,
                date: date,
                peeperUsername: peeperUsername,
                handle: handle
            });

            try {
                const peep = await newPeep.save();

                res.status(201).json(peep);

            } catch (e) {

                console.log(e);
                res.status(422).json({ error: `Adding new peep failed` });
            }
        });

        // .put(async (req, res) => {
        //     try {
        //         const updatedPeep = await Peep.findByIdAndUpdate(req.params.id, req.body);
        //         res.status(200).json(updatedPeep);
        //     } catch (e) {
        //         console.log(e);
        //         res.status(422).json({ error: `Peep with id: ${id} could not be updated` });
        //     }
        // });



        // router.route(`/:id`)
        //     .get(async (req, res) => {
        //         // res.send(`Getting all peeps`);
        //         Peep.find((error, peeps) => {
        //             error ? res.status(404).send(`Not found`) : res.json(peeps);
        //         });
        //     });

        // router.route('/')
        //     .post((req, res) => {
        //         const id = req.params.id;
        //         // res.send(`Updating peep with id: ${id}`);
        //         Peep.findById(id, (error, [peep]) => {
        //             if (!todo) {
        //                 res.status(404).send(`That peep cannot be found`);
        //             } else {
        //                 peep.peepMessage = req.body.peepMessage;
        //                 peep.peepDateAndTimeCreated = req.body.peepDateAndTimeCreated;
        //                 peep.peepAuthorName = req.body.peepAuthorName;
        //                 peep.peepAuthorID = req.body.peepAuthorID;
        //                 peep.peepID - req.body.peepID;
        //                 peep.save()
        //                     .then(peep => res.json(`Peep updated!`))
        //                     .catch(err => res.status(400).send(`Update not possible`));
        //             }
        //         });
        //     });

        // router.route(`/`) // or router.route('/addPeepForm')
        //     .post(async (req, res) => {
        //         // res.send(`Adding Peep`);
        //         const peep = new Peep(req.body);
        //         // peep.save()
        //         //     .then(peep => {
        //         //         res.status(200).json(
        //         //             { 'peep': `peep added successfully` }
        //         //         );
        //         //     })
        //         //     .catch(err => res.status(400).send(`Adding new peep failed`));
        //         try {
        //             const peep = await peep.save();
        //             res.status(201).json(peep);
        //         } catch (e) {
        //             console.log(e);
        //             res.status(422).json({ error: `Adding new peep failed` });
        //         }
        //     });

        // router.route(`/peeps`) // or router.route('/addPeepForm')
        //     .get(async (req, res) => {
        //         // res.send(`Adding Peep`);
        //         const peep = new Peep(req.body);
        //         // peep.save()
        //         //     .then(peep => {
        //         //         res.status(200).json(
        //         //             { 'peep': `peep added successfully` }
        //         //         );
        //         //     })
        //         //     .catch(err => res.status(400).send(`Adding new peep failed`));
        //         try {
        //             const peep = await peep.save();
        //             res.status(201).json(peep);
        //         } catch (e) {
        //             console.log(e);
        //             res.status(422).json({ error: `Adding new peep failed` });
        //         }


