import React, { useContext, useEffect, useState } from 'react';
import QuestionBox from '../../components/QuestionBox/QuestionBox';
import quizContext from '../../context/quizContext';
import Scoreboard from '../ScoreBoard/Scoreboard';

const QuizArea = () => {
    const context = useContext(quizContext);
    const { questions, next, len, score } = context;

    const [timer, setTimer] = useState(30); // Initial timer value in seconds
    const [timerInterval, setTimerInterval] = useState(null);

    // Function to start the timer
    const startTimer = () => {
        setTimer(30); // Reset the timer to its initial value
        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
        }, 1000);
        setTimerInterval(interval);
    };

    // Function to stop the timer
    const stopTimer = () => {
        clearInterval(timerInterval);
    };

    useEffect(() => {
        if (next <= len - 1) {
            startTimer(); // Start the timer when a new question is displayed
        } else {
            stopTimer(); // Stop the timer when the quiz is finished
        }

        return () => {
            stopTimer(); // Cleanup: Stop the timer when the component unmounts
        };
    }, [next, len]);

    const randomNumber = () => {
        return Math.floor(Math.random() * 4);
    };

    const getOptions = (incorrectAns, correctAns) => {
        let optionsArray = incorrectAns;
        if (!optionsArray.includes(correctAns)) {
            optionsArray.splice(randomNumber(), 0, correctAns);
            return [optionsArray, correctAns];
        } else {
            return [optionsArray, correctAns];
        }
    };

    return (
        <>
            <div className="progress-bar">
                <div className="progress" style={{ width: `${(next / len) * 100}%` }}></div>
            </div>
            {next <= len - 1 ? (
                <div className="container p-4">
                    <QuestionBox
                        category={questions[next].category}
                        options={getOptions(questions[next].incorrect_answers, questions[next].correct_answer)}
                        question={questions[next].question}
                        key={questions[next].question}
                    />
                    <p>Time Left: {timer} seconds</p>
                </div>
            ) : (
                <Scoreboard total_que={len} wrong_que={score.wrongAnswers} correct_que={score.rightAnswers} />
            )}
        </>
    );
};

export default QuizArea;
