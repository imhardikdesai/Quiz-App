import QuizContext from "./quizContext";
import { useEffect, useState } from "react";

const QuizState = (props) => {
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState({ rightAnswers: 0, wrongAnswers: 0 });
    const [next, setNext] = useState(0);
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const len = questions.length;
    const [answerList, setAnswerList] = useState([]);
    const [usedLifelines, setUsedLifelines] = useState({
        fiftyFifty: false,
        audience: false,
        revealAnswer: false
    });

    const fetchQuestions = async (api) => {
        if (!api || api.trim() === '') {
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(api);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (!data.results || !Array.isArray(data.results)) {
                throw new Error('No questions found');
            }

            setQuestions(data.results);
            setLoading(false);

        } catch (error) {
            console.error('Error fetching questions:', error);
            setLoading(false);
            alert(`Error loading quiz: ${error.message}`);
            setQuestions([]);
            setUrl('');
        }
    };

    useEffect(() => {
        if (url) {
            fetchQuestions(url);
        }
    }, [url]);

    return (
        <QuizContext.Provider value={{
            answerList,
            setAnswerList,
            len,
            questions,
            setQuestions,
            url,
            setUrl,
            fetchQuestions,
            loading,
            setLoading,
            score,
            setScore,
            next,
            setNext,
            usedLifelines,
            setUsedLifelines
        }}>
            {props.children}
        </QuizContext.Provider>
    );
}

export default QuizState;
