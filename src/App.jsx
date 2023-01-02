import React from "react"
import { useState, useEffect } from 'react'
import Questions from "./Questions"

export default function App() {

  const [results, setResults] = useState([])
  const [quiz, setQuiz] = useState(false)

  function toggleStart() {
    setQuiz(prevShown => !prevShown)
  }

  const quizQuestions = results?.map(data =>
    <Questions key={data.question} question={data.question}
      incorrect_answers={data.incorrect_answers}
      correct_answers={data.correct_answer} />)

  useEffect(function () {
    fetch("https://opentdb.com/api.php?amount=5")
      .then(res => res.json())
      .then(data => {
        setResults(data.results)
        console.log(data)
      })
  }, [quiz])

  let landingText = <>
    <h1 className="title">Quizzical</h1>
    <p className="description">Test your general knowledge skills by taking a quiz!</p>
    <button className="btn-style" onClick={toggleStart}>Start Quiz</button>
  </>

  return (
    <div className="main">
      <div className="design-one"></div>
      <div className="design-two"></div>
      {!quiz ? landingText : <>{quizQuestions} <button className='check-btn'>Check Answers</button></>}
    </div>
  )
}
