import styled from "styled-components";

export const Container = styled.div`
    padding: 20px 150px;
    
    @media (max-width: 868px) {
        padding: 20px 50px;
        
    }
    @media (max-width: 768px) {
        
        padding: 20px 20px;
    }
    @media (max-width: 668px) {
        padding: 20px 10px;
        text-align: center;
  
    }
`
export const Card = styled.div<{direction:boolean}>`
    display: flex;
        align-items: center;
        gap: 20px;

        @media (max-width: 868px) {
            
    }
    @media (max-width: 768px) {
        margin: 40px;
        flex-direction: ${(props) => props.direction ? 'column' : 'column-reverse'};
        
    }
    @media (max-width: 668px) {
       
    }
`

export const ImageContainer = styled.div<{flexsize:number}>`
   
    /* background-image: url(${(props) => props.background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; */
    flex: ${(props) => props.flexsize};

    img{
        height: 400px;

        @media (max-width: 668px) {
            height: 300px;
        }
    }

`

export const InfoContainer = styled.div<{flexsize:number}>`
    flex: ${(props) => props.flexsize};
`
export const TitleContainer = styled.h2`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 20px;
    color: #5450E2;

    @media (max-width: 668px) {
        justify-content: center;
    }
`
export const DescriptionContainer = styled.div`
    margin: 20px 0px;
    letter-spacing: 0.5px;
    line-height: 26px;
    color: #515050;
`

export const KeyHighlights = styled.div`
    display: flex;
    align-items: center;
    margin-top: 12px;
    gap: 5px;
    color: #8b8b8b;

    @media (max-width: 768px) {
        text-align: start;
    }
`

export const Heading = styled.h2`
    color: #585757;
`