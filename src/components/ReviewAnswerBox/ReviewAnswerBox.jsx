import React from 'react'
import { Badge } from '@chakra-ui/react'

const ReviewAnswerBox = ({ question, options, category, num, myAnswer, rightAnswer }) => {

    let i = -1
    const alphabet = ['A', 'B', 'C', 'D']

    return (
        <>
            <div className="q-box mx-auto my-5 p-4 text-center">
                <div className="q-box_head">
                    <div className="q-box_timer">{num}</div>
                    <div className="q-question" dangerouslySetInnerHTML={{ __html: question }}></div>
                </div>
                <div className="q-box_body">
                    {
                        options.map((index) => {
                            let tempClass = ''
                            let tempIcon = ''
                            if (index === rightAnswer) {
                                tempClass = 'right'
                                tempIcon = 'rightIcon'
                            } else if (myAnswer !== rightAnswer) {
                                tempClass = 'wrong'
                                tempIcon = 'wrongIcon'
                            } else {
                                tempClass = ''
                                tempIcon = ''
                            }

                            i++;
                            return <div key={index} className={`q-box_options ${tempClass}`}>
                                <div className={`option-icon ${tempIcon}`}>{alphabet[i]}</div> <div dangerouslySetInnerHTML={{ __html: index }}></div>
                            </div>
                        })
                    }
                </div>
                <div className="d-flex flex-wrap justify-content-center align-items-center mx-3">
                    <Badge colorScheme='purple'>{category}</Badge>
                </div>
            </div>
        </>
    )
}

export default ReviewAnswerBox;
