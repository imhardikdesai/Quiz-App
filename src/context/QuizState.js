import QuizContext from "./quizContext";
import { useState, useEffect } from "react";


const QuizState = (props) => {
    const [questions, setQuestions] = useState([]);
    const [url, setUrl] = useState("https://opentdb.com/api.php?amount=10");

    const fetchQuestions = async () => {
        const response = await fetch(url);
        const data = await response.json();
        let results = data.results;
        setQuestions(results);
    };
    useEffect(() => {
        fetchQuestions();
    }, []);

    return (
        <QuizContext.Provider value={{ questions }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export default QuizState