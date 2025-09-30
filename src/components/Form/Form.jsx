import React from 'react'
import quizData from '../TriviaQuizData'
import { motion } from 'framer-motion'

const Form = (props) => {
    const { handleSubmit, onChange } = props
    
    const getOptionsValue = (data) => {
        return data.map((item) => {
            let objectKeys = Object.keys(item)[0]
            return <option key={objectKeys} value={item[objectKeys]}>{objectKeys}</option>
        })
    }

    const formFieldVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.05,
            transition: { duration: 0.2 }
        },
        tap: { scale: 0.95 }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    return (
        <motion.form
            className='mt-2 dark-form'
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className="mb-3" variants={formFieldVariants}>
                <label htmlFor="number" className="form-label dark-label">Number of Questions:</label>
                <motion.input
                    placeholder='Enter Number of Questions'
                    type="number"
                    name='number'
                    className="form-control dark-input"
                    id="number"
                    onChange={onChange}
                    required
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                />
            </motion.div>

            <motion.div className="mb-3" variants={formFieldVariants}>
                <label htmlFor="category" className="form-label dark-label">Select Category:</label>
                <motion.select
                    name='category'
                    className="form-select dark-select"
                    aria-label="Default select example"
                    onChange={onChange}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                    <option value={'any'} defaultValue>Any Category</option>
                    {getOptionsValue(quizData.category)}
                </motion.select>
            </motion.div>

            <motion.div className="mb-3" variants={formFieldVariants}>
                <label htmlFor="difficulty" className="form-label dark-label">Select Difficulty:</label>
                <motion.select
                    name='difficulty'
                    className="form-select dark-select"
                    aria-label="Default select example"
                    onChange={onChange}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                    <option value={'any'} defaultValue>Any Difficulty</option>
                    {getOptionsValue(quizData.difficulty)}
                </motion.select>
            </motion.div>

            <motion.div className="mb-3" variants={formFieldVariants}>
                <label htmlFor="type" className="form-label dark-label">Select Type:</label>
                <motion.select
                    name='type'
                    className="form-select dark-select"
                    aria-label="Default select example"
                    onChange={onChange}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                    <option value={'any'} defaultValue>Any Type</option>
                    {getOptionsValue(quizData.type)}
                </motion.select>
            </motion.div>

            <motion.button
                type="submit"
                className="btn btn-primary dark-button"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
            >
                Start Quiz
            </motion.button>
        </motion.form>
    )
}

export default Form