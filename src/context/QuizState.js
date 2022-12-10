import QuizContext from "./quizContext";
import { useEffect, useState } from "react";


const QuizState = (props) => {
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState({ 'rightAnswers': 0, 'wrongAnswers': 0 });
    const [next, setNext] = useState(0)
    // const demoURL = 'https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple'
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const len = questions.length;


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

    // useEffect(() => {
    //     let myInterval = setInterval(() => {
    //         if (timer > 0) {
    //             setTimer(timer - 1)
    //         } else {
    //             setNext(next + 1)
    //         }
    //     }, 1000)
    //     return () => {
    //         clearInterval(myInterval);
    //     };
    // }, [next]);




    return (
        <QuizContext.Provider value={{ len, questions, setQuestions, url, setUrl, fetchQuestions, loading, setLoading, score, setScore, next, setNext }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export default QuizState