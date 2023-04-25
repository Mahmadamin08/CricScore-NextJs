import Image from 'next/image'
import { Inter } from 'next/font/google'
import Score from './score'
import MatchEntry from './matchentry'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=''>
      <MatchEntry />
      {/* <Score /> */}
    </div>
  )
}
