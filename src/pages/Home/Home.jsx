import React, { useContext, useState } from 'react';
import Form from '../../components/Form/Form';
import QuizArea from '../QuizArea/QuizArea';
import quizContext from '../../context/quizContext';
import { HashLoader } from 'react-spinners';
import { Text } from '@chakra-ui/react';

const Home = () => {
    const context = useContext(quizContext);
    const { setUrl, url, fetchQuestions, setLoading, loading, questions } = context;
    const [formData, setFormData] = useState({ number: '', category: '', difficulty: '', type: '' });
    const [error, setError] = useState(null); // New: State for error handling

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { number, category, difficulty, type } = formData;
        try {
            await setUrl(`https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficulty}&type=${type}`);
            await fetchQuestions(url);
            setLoading(true);
        } catch (err) {
            setError('Failed to fetch questions. Please try again.');
            setLoading(false);
        }
    };

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

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
            <div className="container my-3">
                {error ? (
                    <Text color="red.500" fontSize="lg">
                        {error}
                    </Text>
                ) : url === '' || questions.length === 0 ? (
                    <>
                        <Text mb={'4'} fontSize='4xl'>
                            Start your Quiz Now
                        </Text>
                        <hr />
                        <Form handleSubmit={handleSubmit} onChange={onChange} />
                    </>
                ) : (
                    <QuizArea />
                )}
            </div>
        </>
    );
};

export default Home;
