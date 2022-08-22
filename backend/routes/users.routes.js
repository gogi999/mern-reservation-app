import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hi there! This is users endpoint.');
});

export default router;
