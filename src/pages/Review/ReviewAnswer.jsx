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
            return <ReviewAnswerBox myAnswer={index.myAnswer} rightAnswer={index.rightAnswer} key={index.question} question={index.question} options={index.options} category={index.category} answer={index.answer} num={answerList.indexOf(index)+1}/>
                })
            }
        </>
    )
}

export default ReviewAnswer


