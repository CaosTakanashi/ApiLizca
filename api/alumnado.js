const db = require('../models');
const express = require('express');
const router = express.Router();

router.get("/", (req, res) =>{
    res.send("holitas :D");
});

router.post('/new', async(req, res) =>{
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let rango = req.body.rango;
    let asignatura = req.body.asignatura;

    try { 
    await db.cursoB.create({
        nombre,
        apellido,
        rango,
        asignatura,
    });
    res.status(200).send("alumno regstrado :C");
    } catch (error){
    res.status(400).send("no se pudo registrar :D");
    }
});

router.get("/all", async(req, res) => {
    try {
        let cursoBs = await db.cursoB.findAll();
        res.status(200).send(cursoBs);
    } catch (error) {
        res.status(400).send("No se pudieron obtener los alumnos")
    }
})

//sjiajsajklsdjklj
router.get("/:id", async(req, res) => {
    try {
        let id = req.params.id;
        let cursoB = await db.cursoB.findByPk(id);
        res.status(200).send(cursoB);
    } catch (error) {
        res.status(400).send("No se pudo obtener el alumno")
    }
});

router.put('/:id', async (req, res) => {
    try{
        let id = req.params.id;
        let {nombre, apellido, rango, asignatura} = req.body;
        let response = await db.cursoB.update({nombre, apellido, rango, asignatura}, {
            where: {
                id,
            },
        },
        );
        res.status(200).send('Alumno actualizado');
    } catch (error) {
        res.status(400).send('No se pudo actualizar')
    } 
});

router.delete("/:id", async (req, res) =>{
    try {
        let id = req.params.id;
        await db.cursoB.destroy({
            where: {
                id,
            },
        });
        res.status(200).send('Alumno eliminado');
    } catch (error){
        res.status(400).send('No se pudo eliminar el usuario');
    }
})


module.exports = router;