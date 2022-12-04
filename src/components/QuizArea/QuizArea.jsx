import { useContext } from 'react';
import QuestionBox from './../QuestionBox/QuestionBox'
import quizContext from '../../context/quizContext';

const QuizArea = () => {
    const context = useContext(quizContext)
    const { questions } = context

    return (
        <>
            {/* <QuestionBox question="What is the First name of astronaut" /> */}
            {
                questions.map((index) => {
                    return <QuestionBox question={index.question} key={index.question} />
                })
            }
        </>
    )
}

export default QuizArea
