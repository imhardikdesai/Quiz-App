import React from 'react'
import './Scoreboard.css'

const Scoreboard = (props) => {
    const { total_que, correct_que, wrong_que, } = props
    let percentage = (correct_que / total_que) * 100
    let Attempted = (correct_que + wrong_que) / total_que * 100

    return (
        <>
            <div className="main">

                <div className="score">
                    Your Score <br />
                    <span>{percentage} <small>%</small></span>
                </div>
                <div className="point-table">

                    <div className="semi-table">
                        <div style={{ backgroundColor: '#A45EDA' }} className="circle"></div>
                        <div className='mx-2'>
                            <div style={{ color: '#A45EDA' }} className="point">{Attempted}%</div>
                            <div className="point-info">
                                Attempted
                            </div>
                        </div>
                    </div>
                    <div className="semi-table">
                        <div style={{ backgroundColor: '#A45EDA' }} className="circle"></div>
                        <div className='mx-2'>
                            <div style={{ color: '#A45EDA' }} className="point">{total_que}</div>
                            <div className="point-info">
                                Total Questions
                            </div>
                        </div>
                    </div>
                    <div className="semi-table">
                        <div style={{ backgroundColor: 'rgb(6 143 86)' }} className="circle"></div>
                        <div className='mx-2'>
                            <div style={{ color: 'rgb(6 143 86)' }} className="point">{correct_que}</div>
                            <div className="point-info">
                                Correct
                            </div>
                        </div>
                    </div>
                    <div className="semi-table">
                        <div style={{ backgroundColor: 'rgb(223 75 75)' }} className="circle"></div>
                        <div className='mx-2'>
                            <div style={{ color: 'rgb(223 75 75)' }} className="point">{wrong_que}</div>
                            <div className="point-info">
                                Wrong
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Scoreboard
