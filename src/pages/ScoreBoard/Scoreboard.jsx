import React from 'react'
import './Scoreboard.css'

const Scoreboard = () => {
    return (
        <>
            <div className="main">

                <div className="score">
                    Your Score <br />
                    <span> 150 <small>pt</small></span>
                </div>
                <div className="point-table">

                    <div className="semi-table">
                        <div style={{ backgroundColor: '#A45EDA' }} className="circle"></div>
                        <div className='mx-2'>
                            <div style={{ color: '#A45EDA' }} className="point">100%</div>
                            <div className="point-info">
                                Competition
                            </div>
                        </div>
                    </div>
                    <div className="semi-table">
                        <div style={{ backgroundColor: '#A45EDA' }} className="circle"></div>
                        <div className='mx-2'>
                            <div style={{ color: '#A45EDA' }} className="point">20</div>
                            <div className="point-info">
                                Total Questions
                            </div>
                        </div>
                    </div>

                    <div className="semi-table">
                        <div style={{ backgroundColor: 'rgb(6 143 86)' }} className="circle"></div>
                        <div className='mx-2'>
                            <div style={{ color: 'rgb(6 143 86)' }} className="point">13</div>
                            <div className="point-info">
                                Correct 
                            </div>
                        </div>
                    </div>
                    <div className="semi-table">
                        <div style={{ backgroundColor: 'rgb(223 75 75)' }} className="circle"></div>
                        <div className='mx-2'>
                            <div style={{ color: 'rgb(223 75 75)' }} className="point">7</div>
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
