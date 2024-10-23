import React, { useState } from 'react';
import axios from 'axios';

function CreateQuiz() {
    const [title, setTitle] = useState('');
    const [questions, setQuestions] = useState([{ questionText: '', options: ['', '', '', ''], correctAnswer: '' }]);

    const handleQuestionChange = (index, key, value) => {
        const newQuestions = [...questions];
        newQuestions[index][key] = value;
        setQuestions(newQuestions);
    };

    const handleOptionChange = (qIndex, oIndex, value) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].options[oIndex] = value;
        setQuestions(newQuestions);
    };

    const handleSubmit = async () => {
        await axios.post('http://localhost:5000/api/quizzes', { title, questions });
        alert('Quiz created successfully!');
    };

    return (
        <div>
            <h1>Create a New Quiz</h1>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Quiz Title" />
            {questions.map((q, qIndex) => (
                <div key={qIndex}>
                    <input
                        type="text"
                        value={q.questionText}
                        onChange={(e) => handleQuestionChange(qIndex, 'questionText', e.target.value)}
                        placeholder="Question Text"
                    />
                    {q.options.map((option, oIndex) => (
                        <input
                            key={oIndex}
                            type="text"
                            value={option}
                            onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
                            placeholder={`Option ${oIndex + 1}`}
                        />
                    ))}
                    <input
                        type="text"
                        value={q.correctAnswer}
                        onChange={(e) => handleQuestionChange(qIndex, 'correctAnswer', e.target.value)}
                        placeholder="Correct Answer"
                    />
                </div>
            ))}
            <button onClick={() => setQuestions([...questions, { questionText: '', options: ['', '', '', ''], correctAnswer: '' }])}>
                Add Question
            </button>
            <button onClick={handleSubmit}>Create Quiz</button>
        </div>
    );
}

export default CreateQuiz;
