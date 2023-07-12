import { Question } from '../types/Question';


type Props = {
  questions: Question[];
  answers: number[];
};
export const Results = ({ questions, answers }: Props) => {

  return (
    <>
      <div className=' w-screen h-screen'>
        {questions.map((item, key) => (
          <div className="mb-4" key={key}>

            <div className='font-semibold'>
              {key + 1} - {item.question}
            </div>
            <div>
            {item.options[item.answer]}.  
        (  <span className='font-semibold' >{item.answer === answers[key] ? 'Acertou' : 'Errou'}</span>  )</div>
      
          </div>
        ))}
      </div>
    </>
  );
};
