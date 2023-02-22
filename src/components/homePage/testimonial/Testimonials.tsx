import React from 'react'
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import styledC from 'styled-components';
import { data } from './testimonialsData';

const TitleHeading = styled(Typography)(() => ({
    textAlign: 'center',
    marginTop: '60px',
    color: '#222324',
    fontWeight: 800,
    letterSpacing: '0.8px',
  }));
const TestimonialName = styled(Typography)(() => ({
    fontWeight: 700,

  }));
const TestimonialPosition = styled(Typography)(() => ({
 
  }));
const TestimonialPara = styled(Typography)(() => ({
   color: '#837280'
  }));

 

  const CardWrapper = styledC.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 40px 100px;
    margin-top: 10;
    grid-gap: 60px;
    padding: 50px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 60px 40px -7px;
    border-radius: 6px;
  `

  const Card = styledC.div`
    display: flex;
    gap: 20px;
  `
  const CardImage = styledC.div`
    width: 60px;
    height: 60px;
    background: url(${(props) => props.background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;    
  flex: 0.15;

  `
  const TestimonialInfo = styledC.div`
    flex: 0.85;
  `



type Props = {}

const Testimonials = (props: Props) => {
  return (
    <div>
       <TitleHeading variant="h5" gutterBottom>
        Testimonials
      </TitleHeading> 
      <CardWrapper>
            {data.map((item,idx) => {
                return (
                    <Card key={idx}>
                        <CardImage background ={item.imgsrc}></CardImage>
                        <TestimonialInfo>
                            <TestimonialName  variant="subtitle2" gutterBottom>{item.name}</TestimonialName>
                            <TestimonialPosition variant="caption" display="block" gutterBottom >{item.position}</TestimonialPosition>
                            <TestimonialPara variant="body2" gutterBottom >{item.para}</TestimonialPara>
                        </TestimonialInfo>
                    </Card>
                )
            })}
      </CardWrapper>
    </div>
  )
}

export default Testimonials