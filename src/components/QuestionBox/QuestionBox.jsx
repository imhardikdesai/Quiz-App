import React, { useContext, useEffect, useState } from 'react'
import './QuestionBox.css'
import { Badge } from '@chakra-ui/react'
import quizContext from '../../context/quizContext'
import clickAudio from './../../Assets/select-sound.mp3'

// #0b4b06 - bg
// #53a24db5 - border
const audio = new Audio(clickAudio);

const QuestionBox = (props) => {

    const [selectedAns, setSelectedAns] = useState('')
    const context = useContext(quizContext)
    const { setScore, score, next, setNext, len, answerList, setAnswerList } = context
    const { question, options, category } = props
    //Here options[0] = options array and options[1] = correct answer
    let i = -1
    const alphabet = ['A', 'B', 'C', 'D']
    // let currentAlpha = ''

    const removeClass = () => {
        let element = document.getElementsByClassName('q-box_body')
        for (let i = 0; i < element.length; i++) {
            for (let j = 0; j < element[i].children.length; j++) {
                element[i].children[j].classList.remove('optionSelected')
            }
        }
    }

    //Update the score 
    const checkAnswer = (selectedAns) => {
        if (selectedAns === '') {
            return true;
        } else if (selectedAns === options[1]) {
            setScore({ ...score, 'rightAnswers': score.rightAnswers + 1 })
        } else {
            setScore({ ...score, 'wrongAnswers': score.wrongAnswers + 1 })
        }
    }

    const handleOptionClick = (e) => {
        audio.play();
        removeClass()
        setSelectedAns((e.target.innerText.slice(1)).trim())
        const currentAlpha = e.target.innerText[0]
        document.getElementById(currentAlpha).classList.add('optionSelected')
    }

    const handleNextQuestion = () => {
        if (next <= len - 1) {
            checkAnswer(selectedAns)
            setNext(next + 1)
            setSelectedAns('')
            localStorage.setItem('timer',30)
        }
        setAnswerList([...answerList, { 'question': question, 'options': options[0], 'id': `id${next}`, 'category': category, 'myAnswer': selectedAns, 'rightAnswer': options[1] }])
    }

    // for reverse timer
    const [timer, setTimer] = useState(()=>{
        const savedTimer = localStorage.getItem('timer')
        return savedTimer? parseInt(savedTimer):30
    })

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1)
                localStorage.setItem('timer',timer-1)
            } else {
                setNext(next + 1)
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    })


    return (
        <>
            <div className="q-box mx-auto my-5 p-4 text-center">
                <div className="q-box_head">
                    <div className="q-box_timer">{timer}s</div>
                    <div className="q-question" dangerouslySetInnerHTML={{ __html: question }}></div>
                </div>
                <div className="q-box_body">
                    {
                        options[0].map((index) => {
                            i++;
                            return <div id={alphabet[i]} key={index} onClick={handleOptionClick} className="q-box_options">
                                <div className='option-icon'>{alphabet[i]}</div> <div dangerouslySetInnerHTML={{ __html: index }}></div>
                            </div>
                        })
                    }
                </div>
                <div className="d-flex flex-wrap justify-content-between align-items-center mx-3">
                    <Badge colorScheme='purple'>{category}</Badge>
                    <button onClick={handleNextQuestion} className="btn btn-primary m-2">{(next >= len - 1) ? 'Submit' : 'Next'}</button>
                </div>
            </div>
        </>
    )
}

export default QuestionBox
