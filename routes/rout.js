const express = require('express')
const router = express.Router()

const Emp = require('../model/emp')


router.get('/', async(req, res) => {
    try{
        const emp = await Emp.find();
        res.json(emp);
    }catch(err){
        res.send(err)
    }
})

router.post('/', async(req, res) => {
    
    const emp = new Emp({
        name: req.body.name,
        mob: req.body.mob
    })
    try{
        const a1 = await emp.save();
        res.json(a1);
    }catch{
        res.send(err);
    }
})

router.get('/:id', async(req, res) => {
    try{
        const emp = await Emp.findById(req.params.id);
        res.json(emp);
    }catch(err){
        res.send(err)
    }
})

router.patch('/:id', async(req, res) => {
    
    const emp = await Emp.findById(req.params.id);
    try{
        emp.name = req.body.name;
    } catch(err){
        res.send("Name not required to be changed")
    }
    try{
        emp.mob = req.body.mob;
    } catch(err){
        res.send("Mob not required to be changed")
    }
    try{
        const a1 = await emp.save();
        res.json(a1)
    } catch(err){
        res.send(err);
    }
})

router.delete('/:id', async(req, res) => {
    const emp = await Emp.findById(req.params.id)
    try{
        const a1 = await emp.delete();
        res.json(a1);
    } catch(err){
        res.send(err);
    }
})


module.exports = router