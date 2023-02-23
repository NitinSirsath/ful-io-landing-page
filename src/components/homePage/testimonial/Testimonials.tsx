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

     @media (max-width: 968px) {
      grid-template-columns: repeat(2, 1fr);
      margin: 20px 50px;
      padding: 30px;
    }
     @media (max-width: 868px) {
      grid-template-columns: repeat(2, 1fr);
      margin: 20px 50px;
      padding: 30px;
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      margin: 10px 20px;
      // padding: 20px;
    }
    @media (max-width: 668px) {
      grid-template-columns: repeat(1, 1fr);
      margin : 0px
      // padding: 10px;
     width: 100vw;
     }
    
  `

  const Card = styledC.div`
    display: flex;
    gap: 20px;

    @media (max-width: 968px) {
      
    }
    @media (max-width: 668px) {
      margin: 0px;
      gap: 10px;
    }
  `
  const CardImage = styledC.div<{background:string}>`
    width: 60px;
    height: 60px;
    background: url(${(props) => props.background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%; 
    display: flex;
    justify-content: flex-end;
  flex: 0.15;
  
  @media (max-width: 968px) {
       flex: 0.22;
      
     }
  @media (max-width: 868px) {
       flex: 0.22;
      
     }
  @media (max-width: 668px) {
       flex: 0.12;
      
     }
  @media (max-width: 468px) {
       flex: 0.2;
      
     }

  `
  const TestimonialInfo = styledC.div`
    flex: 0.85;

      @media (max-width: 968px) {
        flex: 0.88;
      }
      @media (max-width: 868px) {
        flex: 0.88;
      }
      @media (max-width: 668px) {
        flex: 0.88;
        
      }
      @media (max-width: 468px) {
        flex: 0.8;
        
      }
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