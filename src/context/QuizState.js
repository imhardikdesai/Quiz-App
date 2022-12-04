import QuizContext from "./quizContext";
import { useEffect, useState } from "react";


const QuizState = (props) => {
    const [questions, setQuestions] = useState([]);
    
    const [url, setUrl] = useState('');

    const fetchQuestions = async (api) => {
        const response = await fetch(api);
        const data = await response.json();
        let results = data.results;
        setQuestions(results, console.log(results));
        setLoading(false);
    };

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchQuestions(url);
    }, [url]);

    return (
        <QuizContext.Provider value={{ questions, setQuestions, url, setUrl, fetchQuestions, loading, setLoading }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export default QuizState