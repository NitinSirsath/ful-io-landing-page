import styled from "styled-components";

export const Container = styled.div<{background:string}>`


background-image: url(${(props) => props.background});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;

  @media (max-width: 868px) {
    flex-direction: column;
    gap: 24px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
  @media (max-width: 668px) {
    flex-direction: column;
    gap: 14px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`