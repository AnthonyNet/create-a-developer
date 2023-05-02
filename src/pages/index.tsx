
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Playground from '../components/NaucMe__SandPack'
import { Exercise_1_App, filter, filter_Answer} from '@/exercises/Exercise_1_Data';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
	<section className='flex flex-col items-center justify-center w-screen h-screen'>
		<Playground app={Exercise_1_App} filter={filter} filter_Answer={filter_Answer}/>
 </section>
  )
}
