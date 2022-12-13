import React, { useContext } from 'react'
import quizContext from '../../context/quizContext'
import ReviewAnswerBox from './../../components/ReviewAnswerBox/ReviewAnswerBox'
const ReviewAnswer = () => {
    const context = useContext(quizContext)
    const { answerList } = context
    const getIndex = (myAns, rightAns, options) => {
        if (myAns === rightAns) {
            return { 'myIndex': options.indexOf(myAns) }

        } else {
            console.log('wrong');
        }
    }

    return (
        <>
            {
                answerList.map((index) => {
                    const { question, options, category, myAnswer, rightAnswer } = index
                    console.log(document.getElementsByClassName('q-box_options'));
                    console.log('next question');
                    return <ReviewAnswerBox classIndex={getIndex(myAnswer, rightAnswer, options)} myAnswer={myAnswer} rightAnswer={rightAnswer} key={question} question={question} options={options} category={category} num={answerList.indexOf(index) + 1} />
                })
            }
        </>
    )
}

export default ReviewAnswer


