import styled from "styled-components";

export const Container = styled.div<{background:string}>`
padding: 40px 0px;

background-image: linear-gradient(90deg, #a462eb3c 0%, #6969ee3c 1%, #d4e4e83f 100%),url(${(props) => props.background});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  margin: 50px 0px;

  @media (max-width: 968px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  @media (max-width: 868px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  
  @media (max-width: 668px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const ImageCard = styled.div`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 668px) {
    width: 150px;
    height: 150px;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const BorderContainer = styled.div`
  border-bottom: 1px solid lightgray;
  padding: 30px;
  margin: 40px 50px;
  display: flex;
  justify-content: center;

  @media (max-width: 668px) {
    margin: 20px 20px;
  }
`