"use client"
import { useState } from "react";
import { questions } from "./data/questions";
import { QuestionItem } from "./components/QuestionItem";




export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const handlerAnswer = (answer:number)=>{

  }
  return (
<div className="w-full h-screen flex justify-center items-center text-gray-300">
<div className="w-full max-w-xl rounded-md bg-cyan-950shadow shadow-zinc-900">
<h1 className="p-5 text-center text-bold text-cyan-500 text-xl">Quizz JavaScript</h1>
<div className="p-5">
 <QuestionItem question={questions[currentQuestion]} onAsnwer={handlerAnswer} count={currentQuestion+1}/>
</div>
<div className="text-center">{currentQuestion+1} de {questions.length} pergunta{questions.length === 1? '': 's'} </div>
</div>
</div>
  )
}
