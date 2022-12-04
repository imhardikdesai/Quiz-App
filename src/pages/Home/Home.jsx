import React from 'react'
import quizData from '../../components/TriviaQuizData'

const Home = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <>
            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Number of Questions:</label>
                    <input placeholder='Enter Number of Questions' type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Select Category:</label>
                    <select name='category' className="form-select" aria-label="Default select example">
                        <option defaultValue>Any Category</option>
                        {
                            quizData.category.map((index) => {
                                return <option key={index} value={index}>{index}</option>
                            })
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="difficulty" className="form-label">Select Difficulty:</label>
                    <select name='difficulty' className="form-select" aria-label="Default select example">
                        <option defaultValue>Any Difficulty</option>
                        {
                            quizData.difficulty.map((index) => {
                                return <option key={index} value={index}>{index}</option>
                            })
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="type" className="form-label">Select Type:</label>
                    <select name='type' className="form-select" aria-label="Default select example">
                        <option defaultValue>Any Type</option>
                        {
                            quizData.type.map((index) => {
                                return <option key={index} value={index}>{index}</option>
                            })
                        }
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Start Quiz</button>
            </form>
        </>
    )
}

export default Home
