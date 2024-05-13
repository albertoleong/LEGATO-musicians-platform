import express from "express";
const router = express.Router();
import knex from 'knex';
import knexfile from '../knexfile.js';
const db = knex(knexfile.development);

router.route('/')
    .post(async (req, res) => {
        const { artistId, email, description, date } = req.body;

        if (!artistId || !email || !description || !date) {
            return res.status(400).json({ error: 'Missing required fields in request, please check' });
        }

        try {
            await db('inquiries').insert({
                artist_id: artistId,
                email,
                description,
                date
            });

            return res.status(201).json({ message: 'Inquiry created successfully' });
        } catch (error) {
            console.error('Error creating new inquiry:', error);
            return res.status(500).json({ error: 'Error creating inquiry' });
        }
    });

router.route('/:id')
    .delete(async (req, res) => {
        const { id } = req.params;

        try {
            const inquiry = await db('inquiries').where({ id }).first();
            if (!inquiry) {
                return res.status(404).json({ error: 'Inquiry not found' });
            }

            await db('inquiries').where({ id }).del();
            return res.status(204).json({ message: 'Inquiry deleted successfully' });
        } catch (error) {
            console.error('Error deleting inquiry:', error);
            return res.status(500).json({ error: 'Error deleting inquiry' });
        }
    });

    router.route('/artist/:id')
    .get(async (req, res) => {
        const { id } = req.params;

        try {
            const inquiries = await db('inquiries').where({ artist_id: id });
            return res.status(200).json(inquiries);
        } catch (error) {
            console.error('Error fetching inquiries:', error);
            return res.status(500).json({ error: 'Error fetching inquiries' });
        }
    });


export default router;
