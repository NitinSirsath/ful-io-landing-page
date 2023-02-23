import React from 'react'
import { Container,SocialContainer } from './footer.style';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FooterCard from './FooterCard';
import { Contact, FeatureData, moreToKnow, technologyReports } from './footerData';
import Logo from '../Logo'

type Props = {}

const Footer = (props: Props) => {
    return (
        <Container>
            <SocialContainer>
               
                <Logo colorProp='#fff' height={40}/>
                <p>© 2023 Ful.io</p>
                <p>All Rights Reserved</p>
                <p>
                    <a href="https://www.facebook.com/fulioTech/"><FacebookIcon sx={{color: '#FFFFFF'}}/></a>
                    <a href="https://www.linkedin.com/company/ful-io/"><LinkedInIcon sx={{color: '#FFFFFF'}}/> </a>
                </p>
            </SocialContainer>
            <FooterCard data={FeatureData} heading='Features'/>
            <FooterCard data={technologyReports} heading='Top Technology Reports'/>
            <FooterCard data={moreToKnow} heading='More to Know'/>
            <FooterCard data={Contact} heading='Contact'/>
        </Container>
    )
}

export default Footer