import Head from 'next/head'
import stylesheet from '../styles/readingQuestion.module.css'
import { Card, CardContent, Checkbox, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { useState } from 'react';


export default function ReadingQuestion({ question, options }) {

    const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


  return (
    <>
      <Card className={stylesheet.card}>
      <CardContent>
        <p className={stylesheet.ques}>
          {question}
        </p>
        <FormControl component="fieldset" className={stylesheet.optionBx}>
          <RadioGroup value={selectedOption} onChange={handleOptionChange}>
            {options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option}
                control={<Radio className={selectedOption === option ? stylesheet.selected : ''} />}
                label={option}
                className={[stylesheet.option, selectedOption === option ? stylesheet.selected : '' ]}
                // className={selectedOption === option ? stylesheet.selected : ''}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
    </>
  )
}
