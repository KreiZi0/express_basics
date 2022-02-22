const express = require('express');
const app = express();
const path = require('path')

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');



app.get('/questions', (reg, res)=> {
	let questions = [
		{title: "What is Node.js?", user: "Kadi", votes: "10"},
		{title: "What is Express.js?", user: "Mike", voes: "8"}
	]



	res.render('index', {questions:questions});
});


app.listen(3000,()=> {
	console.log('Server started on http://localhost:3000');
});