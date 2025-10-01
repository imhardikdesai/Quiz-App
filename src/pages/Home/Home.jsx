import React, { useContext, useState } from 'react'
import Form from '../../components/Form/Form'
import QuizArea from '../QuizArea/QuizArea'
import quizContext from '../../context/quizContext'
import { HashLoader } from 'react-spinners';
import { Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const Home = () => {
    const context = useContext(quizContext)
    const { setUrl, url, fetchQuestions, setLoading, loading, questions } = context
    const [formData, setFormData] = useState({ number: '', category: '', difficulty: '', type: '' })
    
    // eslint-disable-next-line no-unused-vars
    const [location, setLocation] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { number, category, difficulty, type } = formData
        localStorage.setItem('timer',30)
        setUrl(`https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficulty}&type=${type}`, fetchQuestions(url))
        setLoading(true)
    }

   
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <HashLoader
                    color={'#3585c1'}
                    loading={loading}
                    size={100}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    style={{ backgroundColor: '#4d4d4dcc', width: '100%', height: '100vh', position: 'absolute', top: '13%' }}
                />
            </div>
            
            {
                (url === '' || questions.length === 0)
                    ?
                    <div className="container my-3">
                        <Text mb={'4'} fontSize='4xl'>Start your Quiz Now</Text>
                        <hr />
                        <Form handleSubmit={handleSubmit} onChange={onChange} />
                        <hr />
                        <Text mb={'2'} fontSize='2xl'>Or try Map Quiz!</Text>
                        <Link to="/map">
                            <Button colorScheme="teal">Go to Map Quiz</Button>
                        </Link>
                    </div>
                    :
                    <QuizArea />
            }
        </>
    )
}

export default Home
