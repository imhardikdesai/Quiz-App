import React from 'react'
import quizData from '../../components/TriviaQuizData'

const Form = (props) => {

    const { handleSubmit, onChange } = props

    return (
        <>
            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="number" className="form-label">Number of Questions:</label>
                    <input placeholder='Enter Number of Questions' type="number" name='number' className="form-control" id="number" onChange={onChange} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Select Category:</label>
                    <select name='category' className="form-select" aria-label="Default select example" onChange={onChange}>
                        <option value={'any'} defaultValue>Any Category</option>
                        {
                            quizData.category.map((item) => {
                                let objectKeys = Object.keys(item)[0]
                                return <option key={objectKeys} value={item[objectKeys]}>{objectKeys}</option>
                            })
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="difficulty" className="form-label">Select Difficulty:</label>
                    <select name='difficulty' className="form-select" aria-label="Default select example" onChange={onChange}>
                        <option value={'any'} defaultValue>Any Difficulty</option>
                        {
                            quizData.difficulty.map((item) => {
                                let objectKeys = Object.keys(item)[0]
                                return <option key={objectKeys} value={item[objectKeys]}>{objectKeys}</option>
                            })
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="type" className="form-label">Select Type:</label>
                    <select name='type' className="form-select" aria-label="Default select example" onChange={onChange}>
                        <option value={'any'} defaultValue>Any Type</option>
                        {
                            quizData.type.map((item) => {
                                let objectKeys = Object.keys(item)[0]
                                return <option key={objectKeys} value={item[objectKeys]}>{objectKeys}</option>
                            })
                        }
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Start Quiz</button>
            </form>
        </>
    )
}

export default Form
