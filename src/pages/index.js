import Head from 'next/head'
import { Grid, Card, CardContent, Typography, List, ListItem, ListItemText, Button, Container } from '@mui/material';
import stylesheet from '../styles/Home.module.css'
import Solution from '@/components/solution';
import Certificate from '@/components/certificate';
import { useMediaQuery } from '@mui/material';
import Layout from '../components/layout';
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
export default function Home() {
  const isSmallDevice = useMediaQuery('(max-width:600px)'); // You can adjust the breakpoint value as needed
    // Define the style for the div
    const divStyle = {
      background: 'green',
      height: isSmallDevice ? '900px' : '600px', // Set height to 900px for small devices, 'auto' for others
    };
  return (
    <Layout>
      <div>
        <h1 className={stylesheet.home__title}>Test your English now</h1>
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
       <div style={{height: isSmallDevice ? '900px' : 'auto' }}>
       <Solution/>
       </div>
       <div style={{height: isSmallDevice ? '900px' : 'auto'}}>
       <Certificate/>
       </div>
      </div>
    </Layout>
  )
}
