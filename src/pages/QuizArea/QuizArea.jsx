import { useContext } from 'react';
import QuestionBox from '../../components/QuestionBox/QuestionBox'
import quizContext from '../../context/quizContext';

const QuizArea = () => {
    const context = useContext(quizContext)
    const { questions, next } = context

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
            <div className="container p-4">
                {
                    //For fetch All the Questions 🔴

                    // questions.map((index) => {
                    //     const options = getOptions(index.incorrect_answers, index.correct_answer)
                    //     return <QuestionBox category={index.category} options={options} question={index.question} key={index.question} />
                    // })

                    <QuestionBox category={questions[next].category} options={getOptions(questions[next].incorrect_answers, questions[next].correct_answer)} question={questions[next].question} key={questions[next].question} />
                }
            </div>
        </>
    )
}

export default QuizArea
