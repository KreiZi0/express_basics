const express = require('express')
const app = express();

app.get('/', (reg, res)=> {
	res.send('<a href="/contact">Contact US </a> <br> <a href="/about">About US</a>');
});

app.get('/contact', (reg, res)=> {
	res.send('<h1>Contact Us Page</h1>');
});

app.get('/about', (reg, res)=> {
	res.send('<h1>About Us Page</h1>');
});

app.get('*', (reg, res)=> {
	res.send('404. This page does not exist. <a href="/">Go to HomePage</a>');
});

app.listen(3000,()=> {
	console.log('Server started on http://localhost:3000');
});