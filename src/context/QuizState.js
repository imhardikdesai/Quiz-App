import QuizContext from "./quizContext";
import { useEffect, useState } from "react";


const QuizState = (props) => {

    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState({ 'rightAnswers': 0, 'wrongAnswers': 0 });
    const [next, setNext] = useState(0);
    // const demoURL = 'https://opentdb.com/api.php?amount=4&category=&difficulty=&type=boolean'
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const len = questions.length;
    const [answerList, setAnswerList] = useState([])

    const fetchQuestions = async (api) => {
        const response = await fetch(api);
        const data = await response.json();
        let results = data.results;
        setQuestions(results);
        setLoading(false);
    };

    useEffect(() => {
        fetchQuestions(url);
    }, [url]);



    return (
        <QuizContext.Provider value={{ answerList, setAnswerList, len, questions, setQuestions, url, setUrl, fetchQuestions, loading, setLoading, score, setScore, next, setNext }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export default QuizState