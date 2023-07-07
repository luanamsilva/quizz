"use client"
import { useState } from "react";
import { questions } from "./data/questions";
import { QuestionItem } from "./components/QuestionItem";




export default function Home() {

  const [currentQuestion, setCurrentQuestion] = useState(0)
const [answers, setAnswers] = useState<number[]>([])

const nextQuestion = ()=>{
if(questions[currentQuestion+1]){
  setCurrentQuestion(currentQuestion +1)
}
}

  const handlerAnswer = (answer:number)=>{
setAnswers([...answers, answer])
nextQuestion()
  }
  return (
<div className="w-full h-screen flex justify-center items-center text-gray-300">
<div className="w-full max-w-xl rounded-md bg-cyan-950shadow shadow-zinc-900">
<h1 className="p-5 text-center text-bold text-cyan-500 text-xl">Quizz JavaScript</h1>
<div className="p-5">
 <QuestionItem question={questions[currentQuestion]} onAnswer={handlerAnswer} count={currentQuestion+1}/>
</div>
<div className="text-center">{currentQuestion+1} de {questions.length} pergunta{questions.length === 1? '': 's'} </div>
</div>
</div>
  )
}
