import React from 'react'

const Questions = (props) => {

    let options
    if (props.incorrect_answers.some(item => props.correct_answers.includes(item))) {
        options = props.incorrect_answers
    } else {
        options = props.incorrect_answers
        options.push(props.correct_answers)
    }
    // let options = props.incorrect_answers
    // options.push(props.correct_answers)

    function shuffle(options) {
        return options.sort(() => Math.random() - 0.5);

    }

    let shuffledOptions = shuffle(options)

    return (
        <div>
            <div className='question-style'>
                <h3 className='question'>{props.question}</h3>
            </div>
            <div className='answer-style'>

                {shuffledOptions.map(option => (
                    <button className='answer'>{option}</button>

                ))}

            </div>
            <hr className='line' />
        </div>
    )
}

export default Questions
