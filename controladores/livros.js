const { getTodosLivros, getLivroPorId, insereLivro, modificaItem, deleteLivroPorId } = require("../servicos/livros")

function getLivros(req, res) {
    try {
        /* throw new Error('ERRO DE TESTE') */
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error){
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)){
            const livro = getLivroPorId(id)
            res.send(livro)   
        }   else {
            res.status(422)
            res.send('ID inválido.')
        }
    } catch {
        res.status(404)
        res.send(error.message)
    }
}

function postLivro (req, res) {
    try {
        const livroNovo = req.body
        insereLivro(livroNovo)
        res.status(201)
        res.send('Livro inserido com sucesso!')
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res) {
    try{
        const id = req.params.id

        if (id && Number(id)) {
            const body = req.body
            modificaItem(body, id)
            res.send('Livro modificado com sucesso!')
        } else {
            res.status(422)
            res.send('ID inválido.')
        }
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deleteLivroPorId(id)
            res.send('Livro deletado com sucesso!')
        } else {
            res.status(422)
            res.send('ID Inválido.')
        }
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}