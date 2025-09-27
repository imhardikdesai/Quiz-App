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
    //let i = -1
    const alphabet = ['A', 'B', 'C', 'D']
    // let currentAlpha = ''

    const { usedLifelines, setUsedLifelines } = context;

    const [filteredOptions, setFilteredOptions] = useState(options[0]);
    const [audienceHelp, setAudienceHelp] = useState(null);

    // --- Lifeline handlers ---
    const handleFiftyFifty = () => {
        if (usedLifelines.fiftyFifty) return;

        const wrongOptions = options[0].filter(opt => opt !== options[1]);
        const randomWrong = wrongOptions[Math.floor(Math.random() * wrongOptions.length)];
        const newOptions = [options[1], randomWrong].sort(() => Math.random() - 0.5);

        setFilteredOptions(newOptions);
        setUsedLifelines({ ...usedLifelines, fiftyFifty: true });
    };

    const handleAudienceHelp = () => {
        if (usedLifelines.audience) return;

        const correctPercent = Math.floor(Math.random() * 20) + 60;
        let remaining = 100 - correctPercent;

        const wrongOptions = options[0].filter(opt => opt !== options[1]);
        let wrongPercents = Array(wrongOptions.length).fill(0);

        for (let i = 0; i < remaining; i++) {
            wrongPercents[i % wrongOptions.length]++;
        }

        const audienceVotes = options[0].map(opt => ({
            option: opt,
            percent: opt === options[1]
                ? correctPercent
                : wrongPercents.shift()
        }));

        setAudienceHelp(audienceVotes);
        setUsedLifelines({ ...usedLifelines, audience: true });
    };

    const handleRevealAnswer = () => {
        if (usedLifelines.revealAnswer) return;

        document.querySelectorAll(".q-box_options").forEach(el => {
            if (el.innerText.includes(options[1])) {
                el.classList.add("revealAnswer");
            }
        });

        setUsedLifelines({ ...usedLifelines, revealAnswer: true });
    };

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

    const handleOptionClick = (optionValue, idx) => {
        audio.play();
        removeClass();
        setSelectedAns(optionValue); 
        const element = document.getElementsByClassName('q-box_options')[idx];
        if (element) element.classList.add('optionSelected');
    }
    
    const handleNextQuestion = () => {
        if (next <= len - 1) {
            checkAnswer(selectedAns)
            setNext(next + 1)
            setSelectedAns('')
            localStorage.setItem('timer',30)
            setFilteredOptions(options[0]) 
            setAudienceHelp(null) 
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

                {/* --- Lifeline buttons --- */}
                <div className="lifelines mb-3">
                    <button disabled={usedLifelines.fiftyFifty} onClick={handleFiftyFifty}>50/50</button>
                    <button disabled={usedLifelines.audience} onClick={handleAudienceHelp}>Audience help</button>
                    <button disabled={usedLifelines.revealAnswer} onClick={handleRevealAnswer}>Reveal answer</button>
                </div>

                <div className="q-box_body">
                    {filteredOptions.map((opt, idx) => (
                        <div key={opt} onClick={() => handleOptionClick(opt, idx)} className="q-box_options">
                        <div className='option-icon'>{alphabet[idx]}</div>
                        <div dangerouslySetInnerHTML={{ __html: opt }} />
                        </div>
                    ))}
                </div>

                {/* Audience help results */}
                {audienceHelp &&
                    <div className="audience-help mt-3">
                        {audienceHelp.map((v, idx) => (
                            <div key={idx} className="audience-bar">
                                <span className="audience-label">{alphabet[idx]}</span>
                                <div className="bar-container">
                                    <div className="bar-fill" style={{ width: `${v.percent}%` }}>
                                        {v.percent}%
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                }

                <div className="d-flex flex-wrap justify-content-between align-items-center mx-3">
                    <Badge colorScheme='purple'>{category}</Badge>
                    <button onClick={handleNextQuestion} className="btn btn-primary m-2">{(next >= len - 1) ? 'Submit' : 'Next'}</button>
                </div>
            </div>
        </>
    )
}

export default QuestionBox
