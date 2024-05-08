import express from "express";
const router = express.Router()
import knex from 'knex';
import knexfile from '../knexfile.js';
const db = knex(knexfile.development);


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
            email
        } = req.body;
        if (!name || !type || !music_styles || !instruments || !location || !description || !email ) 
        {return res.status(400).json({ error: 'Missing required fields in request, please check' })}
        
        try {
            const [newArtistId] = await db('artists').insert({
                name,
                type,
                music_styles,
                instruments,
                location,
                description,
                email
            });
            const newArtist = await db('artists').where({ id: newArtistId }).first();
            return res.status(201).json(newArtist);
        } catch (error) {
            console.error('Error creating new artist:', error);
            return res.status(500).json({ error: 'Error' });
        }        
    })


router.route('/:id')
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