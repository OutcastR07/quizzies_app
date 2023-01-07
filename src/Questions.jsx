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

    const finalResult = (selectedOption, option) => {
        if (props.afterCheck) {
            //greem
            if (selectedOption === option && option === props.correct_answers) {
                return 'green'
            }
            //red
            if (selectedOption === option && option != props.correct_answers) {
                return 'red'
            }
            //answer
            else return 'answer'
        }
        else {
            if (selectedOption === option) {
                return 'selected-answer'
            } else {
                return 'answer'
            }
        }
    }



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
                        className={finalResult(selectedOption, option)}>{option}</button>

                ))}

            </div>
            <hr className='line' />
        </div>
    )
}

export default Questions
