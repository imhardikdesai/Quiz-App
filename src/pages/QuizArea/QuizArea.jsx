import { useContext } from 'react';
import QuestionBox from '../../components/QuestionBox/QuestionBox'
import quizContext from '../../context/quizContext';
import Scoreboard from '../ScoreBoard/Scoreboard';

const QuizArea = () => {
    const context = useContext(quizContext)
    const { questions, next, len, score } = context

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
            {
                //For fetch All the Questions 🔴

                // questions.map((index) => {
                //     const options = getOptions(index.incorrect_answers, index.correct_answer)
                //     return <QuestionBox category={index.category} options={options} question={index.question} key={index.question} />
                // })

                (next <= len - 1)
                    ?
                    <div className="container p-4">
                        < QuestionBox category={questions[next].category} options={getOptions(questions[next].incorrect_answers, questions[next].correct_answer)} question={questions[next].question} key={questions[next].question} />
                    </div>
                    :
                    <Scoreboard total_que={len} wrong_que={score.wrongAnswers} correct_que={score.rightAnswers} />
            }
        </>
    )
}

export default QuizArea
