import express from 'express';
const router = express.Router();


router.get('/', (req, res, next) => {
    res.json({message: 'Router gets auth!'})
    next();
});

router.post('/login', (req, res, next) => {
    res.json({message: 'Router posts to login'})
    next();
})


router.post('/register', (req, res, next) => {
    res.json({message: 'Router posts to register'})
    next();
})

router.post('/signout', (req, res, next) => {
    res.json({message: 'Router posts to signout'})
    next()
})


export default router;