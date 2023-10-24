const { Router } = require('express');
const Todo = require('../models/todo');
const router = Router();

router.get('/', async (req, res) => {
	try {
		const todos = await Todo.findAll();
		res.status(200).json(todos);
	} catch (err) {
		console.log(err.message);
		res.status(500).json({ message: `server error: ${err.message}` });
	}
});

router.post('/', async (req, res) => {
	try {
		const todo = await Todo.create({
			title: req.body.title,
			content: req.body.content,
			done: false,
		});
		res.status(201).json({ todo });
	} catch (err) {
		console.log(err.message);
		res.status(500).json({ message: `server error: ${err.message}` });
	}
});

router.put('/:id', async (req, res) => {
	try {

	} catch (err) {
		console.log(err.message);
		res.status(500).json({ message: `server error: ${err.message}` });
	}
});

router.delete('/:id', async (req, res) => {
	try {

	} catch (err) {
		console.log(err.message);
		res.status(500).json({ message: `server error: ${err.message}` });
	}
});



module.exports = router;