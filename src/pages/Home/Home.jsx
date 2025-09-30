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
                    className="loading-overlay dark-loading"
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
                            color={'#9F7AEA'}
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
                    className="container my-3 dark-container"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        className="home-hero dark-hero"
                        variants={heroVariants}
                    >
                        <motion.h1
                            className="dark-hero-title"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Start Your Quiz Adventure
                        </motion.h1>
                        <motion.p
                            className="dark-hero-text"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Test your knowledge across multiple categories and difficulty levels
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="form-container dark-form-container"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                    >
                        <Form handleSubmit={handleSubmit} onChange={onChange} />
                    </motion.div>

                    <motion.hr
                        className="dark-divider"
                        variants={itemVariants}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    />

                    <motion.div
                        className="map-quiz-section dark-map-section"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.3 }
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <motion.h2
                            className="dark-section-title"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            🗺️ Ready for a Geography Challenge?
                        </motion.h2>
                        <Text mb={'3'} fontSize='lg' color="#b8c1d3">
                            Test your knowledge of world geography with our interactive map quiz!
                        </Text>
                        <Link to="/map">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button 
                                    size="lg"
                                    bg="#9F7AEA"
                                    color="white"
                                    _hover={{ bg: '#805AD5' }}
                                    _active={{ bg: '#6B46C1' }}
                                >
                                    Explore Map Quiz
                                </Button>
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