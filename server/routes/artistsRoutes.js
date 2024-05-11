import express from "express";
const router = express.Router()
import knex from 'knex';
import knexfile from '../knexfile.js';
const db = knex(knexfile.development);
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


router.route('/')
    .get(async (req, res) => {
        try {
            const artistsData = await db('artists')
            return res.status(200).json(artistsData)
        } catch (err) {
            res.status(404).json({ message: "No artists Found!" })
        }
    })
    .post(async (req, res) => {
        const {
            name,
            type,
            music_styles,
            instruments,
            location,
            description,
            email,
            password
        } = req.body;

        if (!name || !type || !music_styles || !instruments || !location || !description || !email) {
            return res.status(400).json({ error: 'Missing required fields in request, please check' });
        }

        try {
            const hashedPassword = bcrypt.hashSync(password, 10);
            const [newArtistId] = await db('artists').insert({
                name,
                type,
                music_styles,
                instruments,
                location,
                description,
                email,
                password: hashedPassword
            });

            const newArtist = await db('artists').where({ id: newArtistId }).first();
            return res.status(201).json(newArtist);
        } catch (error) {
            console.error('Error creating new artist:', error);
            return res.status(500).json({ error: 'Error' });
        }
    })


router.route('/login')
    .post(async (req, res) => {
       
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send("PLease enter ther required fields");
        }
        const user = await db("artists").where({ email: email }).first();
        if (!user) {
            return res.status(400).send("Invalid email");
        }

        const isPasswordCorrect = bcrypt.compareSync(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(400).send("Invalid password");
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_KEY,
        );
        res.json({ token: token });
        res.status(200);
    });


    router.route('/account')
    .get(async (req, res) => {

        if (!req.headers.authorization) {
            return res.status(401).send("Please login")
        }

        const token = req.headers.authorization.split(' ')[1]

        try {
            const decodedToken = jwt.verify(token, process.env.JWT_KEY) 
            const userId = decodedToken.id; 

            const artist = await db('artists').where({ id: userId }).first()
            
            if (!artist) {
                return res.status(404).json({ error: 'Artist not found' })
            }
            
            res.json({
                id: artist.id,
                name: artist.name,
                type: artist.type,
                music_styles: artist.music_styles,
                instruments: artist.instruments,
                location: artist.location,
                description: artist.description,
                email: artist.email
            });
        } catch(err) {
            res.status(404).json({ message: err.message })
        }
    })
    .patch(async (req, res) => {
        if (!req.headers.authorization) {
            return res.status(401).send("Please login")
        }
        const token = req.headers.authorization.split(' ')[1]
        try {
            const decodedToken = jwt.verify(token, process.env.JWT_KEY) 
            const userId = decodedToken.id;
            const artist = await db('artists').where({ id: userId }).first()
        
            if (!artist) {
                return res.status(404).json({ error: 'Artist not found' })
            }
            const updatedArtist = await db('artists')
                .where({ id: userId })
                .update({
                    name: req.body.name || artist.name,
                    type: req.body.type || artist.type,
                    music_styles: req.body.music_styles || artist.music_styles,
                    instruments: req.body.instruments || artist.instruments,
                    location: req.body.location || artist.location,
                    description: req.body.description || artist.description,
                    email: req.body.email || artist.email
                })
            res.json({
                id: userId,
                name: req.body.name || artist.name,
                type: req.body.type || artist.type,
                music_styles: req.body.music_styles || artist.music_styles,
                instruments: req.body.instruments || artist.instruments,
                location: req.body.location || artist.location,
                description: req.body.description || artist.description,
                email: req.body.email || artist.email
            });
        } catch(err) {
            res.status(404).json({ message: err.message })
        }
    })


    router.route('/artists/:id')
    .get(async (req, res) => {
        const { id } = req.params;
        try {
            const artist = await db('artists').where({ id }).first();
            if (!artist) {
                return res.status(404).json({ error: 'Artist not found' });
            }
            res.json({
                id: artist.id,
                name: artist.name,
                type: artist.type,
                music_styles: artist.music_styles,
                instruments: artist.instruments,
                location: artist.location,
                description: artist.description,
                email: artist.email
            });
        }
        catch(err){
            res.status(404).json({message:err})
        }
    })

export default router


