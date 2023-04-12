"use client"
import React from 'react'
import {useState} from 'react'
import Exercise_1 from './components/Exercise_1/Exercise_1'
import {Exercise_1_App, Exercise_1_Answer, Exercise_1_Section} from './components/Exercise_1/Exercise_1_Data'
import {preview_Css} from './components/preview_Css'

const Playground = () => {
const [showAnswer, setShowAnswer] = useState<boolean>(false)
const handleClick = () => {
setShowAnswer((showAnswer) => !showAnswer);
}

  return (
		<section>
			<Exercise_1
				props={showAnswer ? Exercise_1_Answer : Exercise_1_App}
				preview={Exercise_1_Section}
				styles={preview_Css}
			/>
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4"
				onClick={handleClick}>
				Ukaž odpověď
			</button>
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				onClick={()=>setShowAnswer(false)}>
				Restart
			</button>
		</section>
	);
}

export default Playground;