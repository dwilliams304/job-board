import express from 'express';
const router = express.Router();


router.get('/', (req, res, next) => {
    res.json({message: 'router gets jobs'})
    next();
})




export default router;