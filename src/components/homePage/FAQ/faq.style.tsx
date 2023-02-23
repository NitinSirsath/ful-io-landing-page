import styled from "styled-components";
import { Typography } from "@mui/material";
import { styled as styledM } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';


export const TitleHeading = styledM(Typography)(() => ({
    textAlign: 'center',
    margin: '60px 30px',
    color: '#222324',
    fontWeight: 700,
    letterSpacing: '0.8px',
    
    
  }));


export const AccordionStyle = styledM(Accordion)(() => ({
    background: '#F8FAFC',
    padding: '20px 21px',
    margin: '0px 30px',
    
  }));


  
 


 export const Container = styled.div<{background:string}>`
    display: flex;
    padding: 20px 150px;
    justify-content: center;
    align-items: center;
    background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;

    @media (max-width: 868px) {
      flex-direction: column;
        padding: 20px 50px;
    }
    @media (max-width: 768px) {
      flex-direction: column;
        padding: 10px 30px;
    }
    @media (max-width: 768px) {
      flex-direction: column;
        padding: 10px ;
    }
  `

 export  const LeftSide = styled.div`
    flex: 0.5;
    `

    export const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    ` 


 export const RightSide = styled.div`
    flex: 0.5;
    

    img{
        height: 400px;

        @media (max-width: 668px) {
            height: 300px;
        }
    }
    `