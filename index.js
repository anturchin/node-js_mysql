const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const sequelize = require('./utils/database');
const todoRotes = require('./routes/todo');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/todo', todoRotes);

async function start() {
	try {
		await sequelize.sync();
		app.listen(port, () => {
			console.log(`server is running on port ${port}`);
		});
	} catch (err) {
		console.log(err.message);
	}
}

start();
