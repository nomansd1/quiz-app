import Head from 'next/head'
import stylesheet from '../styles/quizResult.module.css'
import Header from '@/components/header'
import { Card, CardContent, CircularProgress, Grid } from '@mui/material';
import Image from 'next/image';

const data = [
    {
      min: '15',
      testType: 'quick check',
      subHeading: 'Check your English level',
      items: ['No fees, No sign up, Start now', 'Beginner, intermediate, and advanced', 'Share your score on social media'],
      navText: 'quiz details'
    },
    {
      min: '50',
      testType: 'EF set',
      subHeading: 'Certify your English proficiency',
      items: ['Get a personalized EF SET Certificate', 'Results fully aligned with CEFR levels', 'Free'],
      navText: 'text details'
    },
  ];
  

export default function QuiaResult() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={stylesheet.page_body}>
                <Header></Header>
                <div className={stylesheet.result__grid}>
                    <div>
                        <div className={stylesheet.result__progressBar}>
                            <h1>your score</h1>
                            <p>Beginner</p>
                            <div className={stylesheet.result__progress}>
                                <CircularProgress sx={{ color: 'white', marginBottom: '1rem', marginTop: '2rem', }} thickness={2} size='14rem' variant='determinate' value={86} />
                                <span className={stylesheet.progress__value}>
                                    {86}<i className={stylesheet.progress}>%</i>
                                </span>
                            </div>
                        </div>
                        <div className={stylesheet.share__resultBx}>
                            <p>Share your score</p>
                            <div className={stylesheet.social__iconsBx}>
                                <span>
                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                                <span>
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path fill="currentColor" d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z" />
                                    </svg>
                                </span>
                                <span>
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                        <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
                                        <path d="M3 5.012H0V15h3V5.012Z" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={stylesheet.result__detailsCont}>
                        <div className={stylesheet.result__details}>
                        <h1>Your score explained</h1>
                        <p className={stylesheet.result__detailsPara}>
                            Your score indicates that your level is in the range of A1 BEGINNER to A2 ELEMENTARY, according to the guidelines set by the Common European Framework of Reference (CEFR).
                        </p>
                        <p className={stylesheet.result__detailsPara}>
                            You are on your way to comprehending written and spoken vocabulary and sentences on topics from your daily life.
                        </p>
                        <div className={stylesheet.que__result}>
                            <div className={stylesheet.que__resultLeft}>
                                <div className={stylesheet.result__progress}>
                                    <CircularProgress sx={{ color: '#8EAC79', marginBottom: '1rem', marginTop: '2rem', }} thickness={2} size='5rem' variant='determinate' value={86} />
                                    <span className={stylesheet.que__value}>
                                        {86}<i className={stylesheet.que__progress}>%</i>
                                    </span>
                                </div>
                                <p className={stylesheet.que__level}>Intermediate</p>
                            </div>
                            <div className={stylesheet.que__resultRight}>
                                <div className={stylesheet.result__detailsBx}>
                                    <Image
                                        src='/readingicon.svg'
                                        width={25}
                                        height={25}
                                    />
                                    <h1>Reading Score</h1>
                                </div>
                                <p>
                                    You understand the main points of more abstract written texts, and you are able to infer meaning of some unfamiliar vocabulary.
                                </p>
                            </div>
                        </div>
                        <div className={stylesheet.que__result}>
                            <div className={stylesheet.que__resultLeft}>
                                <div className={stylesheet.result__progress}>
                                    <CircularProgress sx={{ color: '#D67D41', marginBottom: '1rem', marginTop: '2rem', }} thickness={2} size='5rem' variant='determinate' value={86} />
                                    <span className={stylesheet.que__value}>
                                        {86}<i className={stylesheet.que__progress}>%</i>
                                    </span>
                                </div>
                                <p className={stylesheet.que__level}>Beginner</p>
                            </div>
                            <div className={stylesheet.que__resultRight}>
                                <div className={stylesheet.result__detailsBx}>
                                    <Image
                                        src='/listenicon.svg'
                                        width={25}
                                        height={25}
                                    />
                                    <h1>Listening Score</h1>
                                </div>
                                <p>
                                    You understand the general idea of conversations relevant to you provided they are clearly communicated and using high-frequency expressions.
                                </p>
                            </div>
                        </div>
                        </div>
                        <div className={stylesheet.result__tableCont}>
                            <h1>Quick check score table</h1>
                           <table>
                            <thead>
                                <th>Level</th>
                                <th>Beginner</th>
                                <th>Intermediate</th>
                                <th>Advanced</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>EF SET</th>
                                    <td>1-60%</td>
                                    <td>1-60%</td>
                                    <td>1-60%</td>
                                </tr>
                            </tbody>
                           </table>
                        </div>
                    </div>
                </div>
                <Grid container spacing={4} className={stylesheet.inner__grid}>
          {data.map((cardData, index) => (
            <Grid item xs={12} sm={7} md={4} key={index}>
              <Card>
                <CardContent className={stylesheet.card__content}>
                  <h1 className={stylesheet.card__title}>
                    {cardData.min}
                    <span className={stylesheet.card__titleBx}>
                      <sup className={stylesheet.card__titleSup}>MIN</sup>
                      <h1 className={stylesheet.card__titleTest}>{cardData.testType}</h1>
                    </span>
                  </h1>
                  <p className={stylesheet.card__subHeading}>{cardData.subHeading}</p>
                  <ul className={stylesheet.card__items}>
                    {cardData.items.map((item, itemIndex) => (
                      <li className={stylesheet.card__itemsText} key={itemIndex}>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={stylesheet.take__quizBtn}>Take the quiz</button>
                  <button className={stylesheet.quizDetails__btn}>
                    {cardData.navText}
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
            </div>
        </>
    )
}