import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function TakeQuiz() {
    const { id } = useParams();
    const [quiz, setQuiz] = useState(null);
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);

    useEffect(() => {
        async function fetchQuiz() {
            const response = await axios.get(`http://localhost:5000/api/quizzes/${id}`);
            setQuiz(response.data);
        }
        fetchQuiz();
    }, [id]);

    const handleAnswerChange = (qIndex, value) => {
        setAnswers({ ...answers, [qIndex]: value });
    };

    const handleSubmit = () => {
        let totalScore = 0;
        quiz.questions.forEach((q, qIndex) => {
            if (q.correctAnswer === answers[qIndex]) {
                totalScore += 1;
            }
        });
        setScore(totalScore);
    };

    if (!quiz) return <div>Loading...</div>;

    return (
        <div>
            <h1>{quiz.title}</h1>
            {quiz.questions.map((q, qIndex) => (
                <div key={qIndex}>
                    <p>{q.questionText}</p>
                    {q.options.map((option, oIndex) => (
                        <label key={oIndex}>
                            <input
                                type="radio"
                                name={`question-${qIndex}`}
                                value={option}
                                onChange={(e) => handleAnswerChange(qIndex, e.target.value)}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            ))}
            <button onClick={handleSubmit}>Submit Quiz</button>
            {score !== null && <h2>Your score: {score} / {quiz.questions.length}</h2>}
        </div>
    );
}

export default TakeQuiz;
