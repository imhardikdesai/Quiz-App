import React from 'react'
// import { useState } from 'react'
import './QuestionBox.css'

const QuestionBox = (props) => {
    // const [myAns, setMyAns] = useState('')
    const { question, options } = props
    let i = -1
    const alphabet = ['A', 'B', 'C', 'D']
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
                        <div className="q-question" dangerouslySetInnerHTML={{ __html: question }}></div>
                    </div>
                    <div className="q-box_body">
                        {
                            options.map((index) => {
                                i++
                                return <div onClick={handleClick} className="q-box_options">
                                    <div className='option-icon'>{alphabet[i]}</div> <div>{index}</div>
                                </div>
                            })
                        }
                        {/* <div onClick={handleClick} className="q-box_options">
                            <div className='option-icon'>A</div> <div>{options[0]}</div>
                        </div>
                        <div onClick={handleClick} className="q-box_options">
                            <div className='option-icon'>B</div> <div>{options[1]}</div>
                        </div>
                        <div onClick={handleClick} className="q-box_options">
                            <div className='option-icon'>C</div> <div>{options[2]}</div>
                        </div>
                        <div onClick={handleClick} className="q-box_options">
                            <div className='option-icon'>D</div> <div>{options[3]}</div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuestionBox
