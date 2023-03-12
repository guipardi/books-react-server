const { Router } = require('express')
const router = Router()
const { getLivros, getLivro, postLivro, patchLivro } = require("../controladores/livros")

router.get('/', getLivros)
router.get('/:id', getLivro)

router.post("/", postLivro)

router.patch("/:id", patchLivro)

router.delete("/", (req, res) => {
    res.send("Você fez uma requisição do tipo DELETE")
})


module.exports = router