import React from 'react'
import { Container, LeftSide, RightSide, TitleHeading,QuestionContainer,AccordionStyle } from './faq.style';
import { data } from './faqData';

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import arrow from '../../../assets/arrow.png'
import kittyImage from '../../../assets/kitty-faq.png'




const FaqSection = () => {
  return (
    <Container background={'/bgfaq.svg'} >
        <LeftSide>
        <TitleHeading variant="h5" gutterBottom>
        Frequently Asked Questions
      </TitleHeading> 
      <QuestionContainer>
          {data.map((question , idx) => {
              return (
                <AccordionStyle >
                <AccordionSummary
                  expandIcon={<img src={arrow}/>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography sx={{fontWeight: 700}}>{question.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {question.answer}
                  </Typography>
                </AccordionDetails>
              </AccordionStyle>
              )
          })}
      </QuestionContainer>
        </LeftSide>
      <RightSide>
        <img src={kittyImage} alt="" />

      </RightSide>
    </Container>
  )
}

export default FaqSection