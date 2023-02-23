import React from 'react'
import {data} from './companyLogoData'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px 80px;
    
    @media (max-width: 868px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding: 20px 40px;
        
    }
    
    @media (max-width: 668px) {
        display: grid;
        padding: 20px 40px;
        grid-template-columns: repeat(2, 1fr);
    }
`



const ClientCompanyLogo = () => {
    return (
        <Container>
            {data.map((company, idx) => {
                return <img key={idx} src={company.image} alt="" height={24} />

            })}
        </Container>
    )
}

export default ClientCompanyLogo