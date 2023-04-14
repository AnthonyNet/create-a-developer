"use client"
import React from 'react'
import Exercise_1 from './components/Exercise_1/Exercise_1'
import {Exercise_1_App} from './components/Exercise_1/Exercise_1_Data'


const Playground = () => {
const editor_Options = { template: "react"};
  return (
		<section>
			<Exercise_1
				app={Exercise_1_App} props={editor_Options}
			/>

		</section>
	);
}

export default Playground;