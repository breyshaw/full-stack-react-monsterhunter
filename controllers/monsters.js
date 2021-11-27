import { Monster } from "../models/monster.js";

function index(req, res) {
    Monster.find({})
    .then(monsters => {
        res.json(monsters)
    })
}

function show(req,res) {

}

function create(req,res) {

}

function deleteMonster(req,res) {

}

function update(req,res) {

}

export {
    index,
    show,
    create,
    deleteMonster as delete,
    update
}