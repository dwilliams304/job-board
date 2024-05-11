import express from 'express';
const router = express.Router();


router.get('/', (req, res, next) => {
    res.json({message: 'Router gets auth!'})
    next();
});

router.post('/', (req, res, next) => {
    res.json({message: 'Router posts to auth'})
    next();
})


export default router;