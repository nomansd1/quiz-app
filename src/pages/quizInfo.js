import Head from 'next/head'
import Image from 'next/image'
import stylesheet from '../styles/quizInfo.module.css'
import CardHeader from '@/components/cardHeader'
import { Card, CardContent } from '@mui/material'
import ReadingQuestion from '@/components/readingQuestion'

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];


export default function QuizInfo() {
  return (
    <>

      <div className={stylesheet.page_body}>
        <CardHeader></CardHeader>
        <div className={stylesheet.container}>
        <Card className={stylesheet.card}>
          <CardContent className={stylesheet.card__content}>
            <h1>Welcome, you are about to start the 15-minute Quick English Check</h1>
            <div className={stylesheet.icon_bx}>
              <div className={stylesheet.icon_elem}>
                <Image
                  src='/readingicon.svg'
                  width={60.97}
                  height={50.8}
                />
                <p>Reading</p>
                <p>7.5 mins</p>
              </div>
              <span>+</span>
              <div className={stylesheet.icon_elem}>
                <Image
                  src='/listenicon.svg'
                  width={60.97}
                  height={50.8}
                />
                <p>Listening</p>
                <p>7.5 mins</p>
              </div>
              <span>=</span>
              <div className={stylesheet.icon_elem}>
                <Image
                  src='/quizeqicon.svg'
                  width={60.97}
                  height={50.8}
                />
                <p>Total Time</p>
                <p>16 mins</p>
              </div>
            </div>
            <ul className={stylesheet.list__item}>
              <li>This test has two sections: reading and listening</li>
              <li>You will start with a 7.5-minute reading section.</li>
              <li>Pace yourself to avoid running out of time.</li>
              <li>You will not lose points for wrong answers.</li>
              <li>Once you click "Next" you cannot go back.</li>
              <li>Take advantage of the  "Full-screen" mode for an optimal test experience. You can always find this icon in the bottom-right corner of your screen.</li>
            </ul>
            <div className={stylesheet.btn}>
              <button className={stylesheet.take__quizBtn}>Start the quiz</button>
            </div>
            <hr/>
          </CardContent>
        </Card>
        </div>
      </div>
    </>
  )
}
