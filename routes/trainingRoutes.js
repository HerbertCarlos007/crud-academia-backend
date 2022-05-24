const router = require('express').Router()
const Training = require('../models/Training')

router.post('/registerTraining', async (req, res) => {

    const {name, levelTraining} = req.body

    if(!name) {
        res.status(422).json({error: 'O nome é obrigatório'})
        return
    }

    if(!levelTraining) {
        res.status(422).json({error: 'O nivel de treino é obrigatório'})
        return
    }

    const training = {
        name,
        levelTraining
    }


    try {
        await Training.create(training)
        res.status(201).json({message: 'Treino cadastrado com sucesso'})
    } catch (error) {
        res.status(500).json({error: error})
    }

})


router.get('/training', async (req, res) => {

    try {
        const training = await Training.find()
        res.status(200).json(training)
    } catch (error) {
        res.status(500).json({error: error})
    }
})


module.exports = router