const router = require('express').Router()
const Students = require('../models/Students')

router.post('/registerStudents', async (req, res) => {

    const {name, email, cpf, birthDate, genre, telephone, trainingLevel} = req.body

    if(!name) {
        res.status(422).json({error: 'O nome é obrigatório'})
        return
    }

    if(!cpf) {
        res.status(422).json({error: 'O cpf é obrigatório'})
        return
    }

    const student = {
        name,
        email,
        cpf,
        birthDate,
        genre,
        telephone,
        trainingLevel
    }

    try {
        await Students.create(student)
        res.status(201).json({message: 'Aluno cadastrado com sucesso'})

    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.get('/students', async (req, res) => {

    try {
        const student = await Students.find()
        res.status(200).json(student)

    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.get('/students/:id', async (req, res) => {
    const id = req.params.id

    try {
        const student = await Students.findOne({_id: id})

        if(!student) {
            res.status(422).json({message: 'Aluno não encontrado'})
            return
        }

        res.status(200).json(student)

    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.patch('/students/:id', async (req, res) => {
    const id = req.params.id
    const {name, email, telephone, trainingLevel} = req.body

    const student = {
        name,
        email,
        telephone,
        trainingLevel
    }

    try {
        
        const updateStudent = await Students.updateOne({_id: id}, student)

        if(updateStudent.matchedCount === 0) {
            res.status(422).json({message: 'O aluno não foi encontrado'})
            return
        }

        res.status(200).json(student)

    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.delete('/students/:id', async (req, res) => {
    const id = req.params.id
    const student = await Students.find({_id: id})

    if(!student) {
        res.status(422).json({message: 'Aluno não encontrado'})
        return
    }

    try {
        
        await Students.deleteOne({_id: id})
        res.status(200).json({message: 'Aluno deletado com sucesso'})

    } catch (error) {
        res.status(500).json({error: error})
    }
})

module.exports = router