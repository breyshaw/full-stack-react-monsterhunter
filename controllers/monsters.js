import { Monster } from "../models/monster.js";

function index(req, res) {
    Monster.find({})
        .then(monsters => {
            res.json(monsters)
        })
        .catch(err => {
            console.log(err)
            //sending error back as a json so that server doesn't crash
            res.json(err)
        })
}

function show(req, res) {
    Monster.findById(req.params.id)
        .then(monster => {
            res.json(monster)
        })
}

function create(req, res) {
    //the key function below is used so that if a user leaves a field blank, it will not default to empty string
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
    }
    Monster.create(req.body)
        .then(monster => {
            res.json(monster)
        })
}

function deleteMonster(req, res) {
    Monster.findByIdAndDelete(req.params.id)
        .then(monster => {
            res.json(monster)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

function update(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
    }
    Monster.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(monster => {
            res.json(monster)
        })
        .catch(err => {
            console.log(err)
            //send error back so that server doesn't crash
            res.json(err)
        })
}

export {
    index,
    show,
    create,
    deleteMonster as delete,
    update
}