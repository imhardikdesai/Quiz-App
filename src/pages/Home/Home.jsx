import React, { useContext, useState } from 'react'
import Form from '../../components/Form/Form'
import QuizArea from '../QuizArea/QuizArea'
import quizContext from '../../context/quizContext'
import { HashLoader } from 'react-spinners';
import { Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Home = () => {
    const context = useContext(quizContext)
    const { setUrl, url, fetchQuestions, setLoading, loading, questions } = context
    const [formData, setFormData] = useState({ number: '', category: '', difficulty: '', type: '' })
    // eslint-disable-next-line no-unused-vars
    const [location, setLocation] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { number, category, difficulty, type } = formData
        localStorage.setItem('timer', 30)
        setUrl(`https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficulty}&type=${type}`, fetchQuestions(url))
        setLoading(true)
    }

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const heroVariants = {
        hidden: { opacity: 0, y: -30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const loadingVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <>
            {loading && (
                <motion.div
                    className="loading-overlay"
                    variants={loadingVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <HashLoader
                            color={'#3585c1'}
                            loading={loading}
                            size={100}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </motion.div>
                </motion.div>
            )}

            {(url === '' || questions.length === 0) ? (
                <motion.div
                    className="container my-3"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        className="home-hero"
                        variants={heroVariants}
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{
                                fontSize: '2.5rem',
                                fontWeight: 700,
                                background: 'linear-gradient(135deg, #3585c1 0%, #28ae61 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                marginBottom: '1rem'
                            }}
                        >
                            Start Your Quiz Adventure
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Test your knowledge across multiple categories and difficulty levels
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="form-container"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                    >
                        <Form handleSubmit={handleSubmit} onChange={onChange} />
                    </motion.div>

                    <motion.hr
                        variants={itemVariants}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    />

                    <motion.div
                        className="map-quiz-section"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.3 }
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            🗺️ Ready for a Geography Challenge?
                        </motion.h2>
                        <Text mb={'3'} fontSize='lg' color="whiteAlpha.800">
                            Test your knowledge of world geography with our interactive map quiz!
                        </Text>
                        <Link to="/map">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button size="lg">Explore Map Quiz</Button>
                            </motion.div>
                        </Link>
                    </motion.div>
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <QuizArea />
                </motion.div>
            )}
        </>
    )
}

export default Home