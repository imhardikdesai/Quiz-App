import { useContext } from 'react';
import QuestionBox from '../../components/QuestionBox/QuestionBox'
import quizContext from '../../context/quizContext';

const QuizArea = () => {
    const context = useContext(quizContext)
    const { questions } = context

    const randomNumber = () => {
        return Math.floor(Math.random() * 4);
    }

    const getOptions = (incorrectAns, correctAns) => {
        let optionsArray = incorrectAns;
        if (!optionsArray.includes(correctAns)) {
            optionsArray.splice(randomNumber(), 0, correctAns);
            return [optionsArray, correctAns];
        } else {
            return [optionsArray, correctAns];
        }

    }

    return (
        <>
            {/* <QuestionBox question="What is the First name of astronaut" /> */}
            {
                questions.map((index) => {
                    const options = getOptions(index.incorrect_answers, index.correct_answer)
                    return <QuestionBox category={index.category} options={options} question={index.question} key={index.question} />
                })
            }
        </>
    )
}

export default QuizArea
