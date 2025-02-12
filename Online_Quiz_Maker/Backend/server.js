const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/quizMaker', { useNewUrlParser: true, useUnifiedTopology: true });

const quizSchema = new mongoose.Schema({
    title: String,
    questions: [
        {
            questionText: String,
            options: [String],
            correctAnswer: String,
        },
    ],
});

const Quiz = mongoose.model('Quiz', quizSchema);

app.post('/api/quizzes', async (req, res) => {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.send(quiz);
});

app.get('/api/quizzes', async (req, res) => {
    const quizzes = await Quiz.find();
    res.send(quizzes);
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
