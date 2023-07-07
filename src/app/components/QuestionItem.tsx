import React, { use } from 'react'
import { Question } from '../types/Question'
import { useState } from 'react'

type Props = {
question: Question
onAnswer: (answer:number)=>void
count:number
}

export const QuestionItem = ({onAnswer, question, count}: Props) => {
  const [answerSelected, setAnswerSelected] =  useState<number | null>(null)

  const handleCheckAnswer = (key:number)=>{
    if(answerSelected === null){
      setAnswerSelected(key)

      setTimeout(()=>{
        onAnswer(key)
        setAnswerSelected(null)
      },2000)

      
    }

 
}
  return (
    <>
    <div className='pb-4 font-bold text-xl text-justify'>{count} - {question.question}</div>
    <div>{question.options.map((questionItem, key)=>(
     <div 
     key={key}
      onClick={()=>handleCheckAnswer(key)} 
      className={`p-4 bg-blue-100 text-zinc-900  mb-4 rounded-lg  text-bold border-4
      ${answerSelected !== null ? 'hover:border-blue-100 cursor-auto opacity-90' : 'hover:border-cyan-900 cursor-pointer'}
      ${answerSelected !== null && answerSelected === question.answer  && answerSelected === key && 'bg-green-400 border-green-300'}
      ${answerSelected !== null && answerSelected !== question.answer && answerSelected === key && 'bg-red-400 border-red-300 hover:border-red-300'}
      `}>
      {questionItem}
     </div>
    ))}</div>
 </> )
}