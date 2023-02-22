import styled from "styled-components";
import { Typography } from "@mui/material";
import { styled as styledM } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';


export const TitleHeading = styledM(Typography)(() => ({
    textAlign: 'center',
    marginTop: '60px',
    color: '#222324',
    fontWeight: 700,
    letterSpacing: '0.8px',
    
  }));


export const AccordionStyle = styledM(Accordion)(() => ({
    background: '#F8FAFC',
    padding: '20px 21px',
    
  }));


  
 


 export const Container = styled.div<{background:string}>`
    display: flex;
    padding: 20px 150px;
    background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
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
    `