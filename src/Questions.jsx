import React from 'react'
import { useState } from 'react'

const Questions = (props) => {

    let options
    if (props.incorrect_answers.some(item => props.correct_answers.includes(item))) {
        options = props.incorrect_answers
    } else {
        options = props.incorrect_answers
        options.push(props.correct_answers)
    }

    console.log(props.questionNo)

    const [selectedOption, setSelectedOption] = useState("")

    return (
        <div>
            <div className='question-style'>
                <h3 className='question'>{props.question}</h3>
            </div>
            <div className='answer-style'>

                {options.map(option => (
                    <button onClick={() => {
                        setSelectedOption(option);
                        props.selectedAnswer[props.questionNo] = option;
                    }}
                        className={selectedOption === option ? 'selected-answer' : 'answer'}>{option}</button>

                ))}

            </div>
            <hr className='line' />
        </div>
    )
}

export default Questions
