"use client"
import React from 'react'
import {useState} from 'react'
import Exercise_1 from './components/Exercise_1/Exercise_1'
import {Exercise_1_App, Exercise_1_Answer, Exercise_1_Section} from './components/Exercise_1/Exercise_1_Data'

const Playground = () => {
const [showAnswer, setShowAnswer] = useState(false)
const handleClick = () => {
setShowAnswer((showAnswer) => !showAnswer);
}

  return (
		<section className="grid items-center align-center h-screen w-screen">
			<Exercise_1
				props={showAnswer?Exercise_1_Answer:Exercise_1_App}
				preview={Exercise_1_Section}
			/>
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			 onClick={handleClick}>
				Ukaž odpověď
			</button>
		</section>
	);
}

export default Playground