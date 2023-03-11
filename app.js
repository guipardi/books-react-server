const express = require('express') /* Importando express */
 
const app = express()
const port = 8000
const rotaLivro = require('./rotas/livros') 

app.use('/livros', rotaLivro)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
})

