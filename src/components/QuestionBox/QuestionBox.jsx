import React from 'react'
// import { useState } from 'react'
import './QuestionBox.css'

const QuestionBox = (props) => {
    // const [myAns, setMyAns] = useState('')

    const handleClick = (e) => {
        // let selectedAns = (e.target.innerText.slice(1)).trim()
        // setMyAns(selectedAns)
        // console.log(myAns);
    }
    return (
        <>
            <div className="container p-4">
                <div className="q-box mx-auto my-5 p-4 text-center">
                    <div className="q-box_head">
                        <div className="q-box_timer">15s</div>
                        <div className="q-question" dangerouslySetInnerHTML={{ __html: props.question }}></div>
                    </div>
                    <div className="q-box_body">
                        <div onClick={handleClick} className="q-box_options">
                            <div className='option-icon'>A</div> <div>{props.optionA}</div>
                        </div>
                        <div onClick={handleClick} className="q-box_options">
                            <div className='option-icon'>B</div> <div>{props.optionB}</div>
                        </div>
                        <div onClick={handleClick} className="q-box_options">
                            <div className='option-icon'>C</div> <div>{props.optionC}</div>
                        </div>
                        <div onClick={handleClick} className="q-box_options">
                            <div className='option-icon'>D</div> <div>{props.optionD}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuestionBox
