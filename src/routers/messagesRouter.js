const express = require('express');
const Message = require('../models/messagesModel');
const router = new express.Router();

router.get('/messages', async (req,res) => {
    try {
        const messages = await Message.findAll()
        return res.send(messages || [])
    } catch (err) {
        return res.status(500).send({error: err.message})
    }
})

router.post('/messages/add', async (req,res)=> {
    try {
        const message = await Message.create(req.body);
        return res.send(message);
    } catch(err) {
        return res.status(400).send({error: err.message})
    }
})

router.get('/', (req,res)=> {
    res.send("Hello")
})

module.exports = router;