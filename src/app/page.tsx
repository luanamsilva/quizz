"use client"
import { useState } from "react";
import { questions } from "./data/questions";
import { QuestionItem } from "./components/QuestionItem";
import {Results} from './components/Results'



export default function Home() {

  const [currentQuestion, setCurrentQuestion] = useState(0)
const [answers, setAnswers] = useState<number[]>([])
const [showResults, setShowResults] = useState(false)

const nextQuestion = ()=>{
if(questions[currentQuestion+1]){
  setCurrentQuestion(currentQuestion +1)
} else{
  setShowResults(true)
}
}

  const handlerAnswer = (answer:number)=>{
setAnswers([...answers, answer])
nextQuestion()
  }
  const handleReset = ()=>{
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
  }
  return (
<div className="w-full h-screen flex justify-center items-center text-gray-300 ">
<div className="w-full max-w-xl rounded-md shadow-zinc-900 ">
<h1 className="p-5 text-center text-bold text-cyan-500 text-xl">Quizz JavaScript</h1>
<div className="p-5">
  {!showResults &&
 <QuestionItem question={questions[currentQuestion]} onAnswer={handlerAnswer} count={currentQuestion+1}/>}

{showResults &&
<Results questions={questions} answers={answers}/>
}

</div>
<div className="text-center">
  {!showResults && `${currentQuestion+1} de ${questions.length} pergunta${questions.length === 1? '':'s'}` }
  {showResults && 
  <button onClick={handleReset} className="px-3 py-2 rounded-md bg-blue-800">Reininciar</button>}
  </div>
</div>
</div>
  )
}
