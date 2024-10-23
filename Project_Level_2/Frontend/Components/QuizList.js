import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function QuizList() {
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        async function fetchQuizzes() {
            const response = await axios.get('http://localhost:5000/api/quizzes');
            setQuizzes(response.data);
        }
        fetchQuizzes();
    }, []);

    return (
        <div>
            <h1>Available Quizzes</h1>
            <ul>
                {quizzes.map((quiz) => (
                    <li key={quiz._id}>
                        <Link to={`/take-quiz/${quiz._id}`}>{quiz.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default QuizList;
