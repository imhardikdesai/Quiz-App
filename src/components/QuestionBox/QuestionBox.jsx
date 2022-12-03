import React from 'react'
import './QuestionBox.css'

const QuestionBox = () => {
    return (
        <>
            <div className="container p-4">
                <div className="q-box mx-auto my-5 p-4 text-center">
                    <div className="q-box_head">
                        <div className="q-box_timer">15s</div>
                        <div className="q-question">24 + ? = 78</div>
                    </div>
                    <div className="q-box_body">
                        <div className="q-box_options">
                            <div className='option-icon'>A</div> <div> 10</div>
                        </div>
                        <div className="q-box_options">
                            <div className='option-icon'>B</div> <div> 54</div>
                        </div>
                        <div className="q-box_options">
                            <div className='option-icon'>C</div> <div> 36</div>
                        </div>
                        <div className="q-box_options">
                            <div className='option-icon'>D</div> <div> 64</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuestionBox
