import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CreateQuiz from './components/CreateQuiz';
import QuizList from './components/QuizList';
import TakeQuiz from './components/TakeQuiz';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/create-quiz" component={CreateQuiz} />
                    <Route path="/quiz-list" component={QuizList} />
                    <Route path="/take-quiz/:id" component={TakeQuiz} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
