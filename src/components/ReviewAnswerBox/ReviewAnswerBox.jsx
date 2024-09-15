import React from 'react';
import { Badge, Box } from '@chakra-ui/react';

const ReviewAnswerBox = ({ question, options, category, num, myAnswer, rightAnswer }) => {
    const alphabet = ['A', 'B', 'C', 'D'];

    return (
        <Box className="q-box mx-auto my-5 p-4 text-center" boxShadow="md" borderWidth="1px" borderRadius="md" bg="white" color="black">
            <div className="q-box_head">
                <div className="q-box_timer">{num}</div>
                <div className="q-question" dangerouslySetInnerHTML={{ __html: question }}></div>
            </div>
            <div className="q-box_body">
                {
                    options.map((option, index) => {
                        let tempClass = '';
                        let tempIcon = '';

                        if (option === rightAnswer) {
                            tempClass = 'right';
                            tempIcon = 'rightIcon';
                        } else if (myAnswer !== rightAnswer) {
                            tempClass = 'wrong';
                            tempIcon = 'wrongIcon';
                        }

                        return (
                            <div key={index} className={`q-box_options ${tempClass}`}>
                                <div className={`option-icon ${tempIcon}`}>{alphabet[index]}</div>
                                <div dangerouslySetInnerHTML={{ __html: option }}></div>
                            </div>
                        );
                    })
                }
            </div>
            <div className="d-flex flex-wrap justify-content-center align-items-center mx-3">
                <Badge colorScheme='purple'>{category}</Badge>
            </div>
        </Box>
    );
};

export default ReviewAnswerBox;
