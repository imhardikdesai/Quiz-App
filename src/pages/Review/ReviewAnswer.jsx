import React, { useContext } from 'react'
import quizContext from '../../context/quizContext'
import ReviewAnswerBox from './../../components/ReviewAnswerBox/ReviewAnswerBox'
const ReviewAnswer = () => {
    const context = useContext(quizContext)
    const { answerList } = context


    return (
        <>
            {
                answerList.map((index) => {
                    const { question, options, category, myAnswer, rightAnswer } = index

                    return <ReviewAnswerBox key={question} myAnswer={myAnswer} rightAnswer={rightAnswer} question={question} options={options} category={category} num={answerList.indexOf(index) + 1} />
                })
            }
        </>
    )
}

export default ReviewAnswer


