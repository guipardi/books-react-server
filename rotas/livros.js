const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.send('Olá Mundo!')
})

module.exports = router