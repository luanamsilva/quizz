"use client"
import { useState } from "react";
import { questions } from "./data/questions";


export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  return (
<div className="w-full h-screen flex justify-center items-center text-gray-300">
<div className="w-full max-w-xl rounded-md bg-zinc-800 shadow shadow-zinc-900">
<h1 className="p-5 text-center">Quizz JavaScript</h1>
<div className="p-5">Perguntas</div>
<div className="p-5 ">Respostas</div>
<div className="text-center">{currentQuestion+1} de {questions.length} pergunta{questions.length === 1? '': 's'} </div>
</div>
</div>
  )
}
