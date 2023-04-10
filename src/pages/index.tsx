
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
	<section className='flex flex-col items-center justify-center w-screen h-screen'>
		<h2>Více zde:</h2>
		<Link className='bg-purple-500 p-4  rounded-xl' href="/playground">Hier mein Junge!</Link>
 </section>
  )
}
