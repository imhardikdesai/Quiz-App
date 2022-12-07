import React from 'react'
import quizData from '../../components/TriviaQuizData'

const Form = (props) => {

    const { handleSubmit, onChange } = props

    const getOptionsValue = (data) => {
        return data.map((item) => {
            let objectKeys = Object.keys(item)[0]
            return <option key={objectKeys} value={item[objectKeys]}>{objectKeys}</option>
        })
    }

    return (
        <>
            <form className='mt-2' onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="number" className="form-label">Number of Questions:</label>
                    <input placeholder='Enter Number of Questions' type="number" name='number' className="form-control" id="number" onChange={onChange} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Select Category:</label>
                    <select name='category' className="form-select" aria-label="Default select example" onChange={onChange}>
                        <option value={'any'} defaultValue>Any Category</option>
                        {
                            getOptionsValue(quizData.category)
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="difficulty" className="form-label">Select Difficulty:</label>
                    <select name='difficulty' className="form-select" aria-label="Default select example" onChange={onChange}>
                        <option value={'any'} defaultValue>Any Difficulty</option>
                        {
                            getOptionsValue(quizData.difficulty)
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="type" className="form-label">Select Type:</label>
                    <select name='type' className="form-select" aria-label="Default select example" onChange={onChange}>
                        <option value={'any'} defaultValue>Any Type</option>
                        {
                            getOptionsValue(quizData.type)
                        }
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Start Quiz</button>
            </form>
        </>
    )
}

export default Form
