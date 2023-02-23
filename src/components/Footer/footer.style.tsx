import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: #334155;
    padding: 80px 60px 20px;
    color: #FFFFFF;
    justify-content: space-between;
    gap: 50px;

    @media (max-width: 768px) {
        padding: 40px 20px 20px;
        flex-direction: column;
    }
`

export const SocialContainer = styled.div`
    text-align: center;

    p{
        margin-top: 8px;
    }
`