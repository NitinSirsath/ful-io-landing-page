import React from 'react'
import { Container, ImageContainer, InfoContainer, Card, DescriptionContainer, TitleContainer, KeyHighlights, Heading } from './websiteContent.style'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { data } from './websiteContentData'





const WebsiteContent = () => {
    return (
        <Container>
            {data.map((item, idx) => {
                return <Card key={idx} direction={idx % 2 === 0? true : false}>
                    {idx % 2 === 0 ? <ImageContainer flexsize={0.4}><img src={item.image} alt="" /></ImageContainer> : <InfoContainer flexsize={0.6}>
                        <TitleContainer><item.icon /> <span>{item.title}</span></TitleContainer>
                        <Heading>{item.heading}</Heading>
                        <DescriptionContainer>{item.desc}</DescriptionContainer>
                        <p>Key Highlights:</p>
                        <KeyHighlights><DoneAllIcon sx={{ color: '#008000' }} /> {item.highlight1}</KeyHighlights>
                        <KeyHighlights><DoneAllIcon sx={{ color: '#008000' }} /> {item.highlight2}</KeyHighlights>
                        <KeyHighlights><DoneAllIcon sx={{ color: '#008000' }} /> {item.highlight3}</KeyHighlights>

                    </InfoContainer>}

                    {idx % 2 === 0 ? <InfoContainer flexsize={0.6}>
                        <TitleContainer><item.icon /> {item.title}</TitleContainer>
                        <Heading >{item.heading}</Heading>
                        <DescriptionContainer>{item.desc}</DescriptionContainer>
                        <p>Key Highlights:</p>
                        <KeyHighlights><DoneAllIcon sx={{ color: '#008000' }} /> {item.highlight1}</KeyHighlights>
                        <KeyHighlights><DoneAllIcon sx={{ color: '#008000' }} /> {item.highlight2}</KeyHighlights>
                        <KeyHighlights><DoneAllIcon sx={{ color: '#008000' }} /> {item.highlight3}</KeyHighlights>
                    </InfoContainer>
                        : <ImageContainer flexsize={0.4} ><img src={item.image} alt="" /></ImageContainer>}
                </Card>
            })}


        </Container>
    )
}

export default WebsiteContent