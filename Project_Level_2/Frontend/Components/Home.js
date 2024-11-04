import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Welcome to Online Quiz Maker</h1>
            <Link to="/create-quiz">Create a Quiz</Link>
            <br />
            <Link to="/quiz-list">Take a Quiz</Link>
        </div>
    );
}

export default Home;
