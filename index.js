const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 5000;


app.use((req, res) => {
	res.send('ok');
});

app.listen(port, () => {
	console.log(`server is running on port ${port}`);
})