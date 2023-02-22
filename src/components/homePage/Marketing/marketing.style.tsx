import styled from "styled-components";

export const Container = styled.div`
    background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.background});
`