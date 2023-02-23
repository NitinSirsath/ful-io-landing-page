import styled from "styled-components";

export const Container = styled.div<{background:string}>`
    background-image: url(${(props) => props.background});
    background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`