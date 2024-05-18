const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://sarkarjii534:%40sarkarop09@cluster0.kazdxwe.mongodb.net/task-manager';
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose
	.connect(mongoURI, options)
	.then(() => {
		console.log('Connected to MongoDB');
		
	})
	.catch((error) => {
		console.error('Error connecting to MongoDB:', error);
	});
