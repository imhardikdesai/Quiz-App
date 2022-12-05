import React, { useContext } from 'react'
import './QuestionBox.css'
import { Badge } from '@chakra-ui/react'
import quizContext from '../../context/quizContext'

const QuestionBox = (props) => {
    const context = useContext(quizContext)
    const { setScore, score } = context
    const { question, options, category } = props
    //Here options[0] = options array and options[1] = correct answer
    let i = -1
    const alphabet = ['A', 'B', 'C', 'D']

    const checkAnswer = (selectedAns) => {
        if (selectedAns === options[1]) {
            setScore(score + 1)
        } else {
            setScore(score - 1)
        }
    }

    const handleOptionClick = (e) => {
        const selectedAns = (e.target.innerText.slice(1)).trim()
        console.log(selectedAns)
        checkAnswer(selectedAns)
    }

    return (
        <>
            <div className="container p-4">
                <div className="q-box mx-auto my-5 p-4 text-center">
                    <div className="q-box_head">
                        <div className="q-box_timer">30s</div>
                        <div className="q-question" dangerouslySetInnerHTML={{ __html: question }}></div>
                    </div>
                    <div className="q-box_body">
                        {
                            options[0].map((index) => {
                                i++;
                                return <div key={index} onClick={handleOptionClick} className="q-box_options">
                                    <div className='option-icon'>{alphabet[i]}</div> <div dangerouslySetInnerHTML={{ __html: index }}></div>
                                </div>
                            })
                        }
                    </div>
                    <Badge colorScheme='purple'>{category}</Badge>
                </div>
            </div>
        </>
    )
}

export default QuestionBox
