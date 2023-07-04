import React from 'react'
import { Question } from '../types/Question'
import { questions } from '../data/questions'

type Props = {
question: Question
onAsnwer: (answer:number)=>void
count:number
}

export const QuestionItem = ({onAsnwer, question, count}: Props) => {
  return (
    <>
    <div className='pb-4 font-bold'>{count} - {question.question}</div>
    <div>{question.options.map((questionItem, key)=>(
     <div key={key} className='p-4 bg-blue-100 text-zinc-900 border-blue-200 mb-4 rounded-lg hover:border-cyan-900 text-bold border-4' >
      {questionItem}
     </div>
    ))}</div>
 </> )
}