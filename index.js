const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors())

app.use((req, res) => {
	res.send('ok');
});

app.listen(port, () => {
	console.log(`server is running on port ${port}`);
})