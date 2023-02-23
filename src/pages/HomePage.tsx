import React from 'react'
import { Link } from 'react-router-dom'
import styledC from 'styled-components'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import {UpdatesPageContainer,DesignElemntSVG, Container,HomeSectionContainer,InputSearchContainer} from '../styles/homePage.style'
import { alpha, styled } from '@mui/material/styles';

import Testimonials from '../components/homePage/testimonial/Testimonials';
import FaqSection from '../components/homePage/FAQ/FaqSection';
import Marketing from '../components/homePage/Marketing/Marketing';
import WebsiteContent from '../components/homePage/websiteContent/WebsiteContent';
import LeftTriangleElement from '../assets/leftTriangle.svg'
import TopTriangleElement from '../assets/topTriangle.svg'

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      border: '1px solid #ced4da',
      fontSize: 16,
      width: '500px',

          '@media  (max-width: 768px)': {
            width: '400px',
          },
          '@media  (max-width: 568px)': {
            width: '300px',
          },

      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },

    
  }));

  export const SearchButton = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    marginLeft : '20px',
    width: '100px',
    height: '43px',
    color: '#fff',
    transition: '.4s ease-in-out',
    backgroundImage: 'linear-gradient(90deg,#413bde,#5e68e6)',
    '&:hover': {
    //   backgroundColor: purple[700],
    backgroundImage: 'linear-gradient(90deg,#5e68e6,#413bde)'
    },
  }));

const LinkStyle = styledC(Link)`
    text-decoration: none;
    color: #5450E2;
    margin-left: 8px;
`

const UpdatesPageText = styled(Typography)(({ theme }) => ({
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    padding: '8px 19px',
    borderRadius: '4px',
    letterSpacing: '0.8px',
  }));
const HeadingHomeSection = styled(Typography)(({ theme }) => ({
    textAlign: 'center',

  }));
const ParagraphHomeSection = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    
  }));
const ScanningInfoHomeSection = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    marginTop: '60px',
    color: '#4B5563',
    letterSpacing: '0.8px',
    padding: '0 20px',

  }));

type Props = {}

const HomePage = (props: Props) => {
  return (
    <Container>
        <DesignElemntSVG src={LeftTriangleElement} alt="leftTriangle" height={400} style={{position: 'absolute',zIndex:'-10', top: '350px', left: '-18%'}} />
        <DesignElemntSVG src={TopTriangleElement}  alt="topTriangle" height={600} style={{position: 'absolute', zIndex:'-10',top: '-330px', right: '-14%'}} />
        <UpdatesPageContainer>
            <UpdatesPageText   variant="subtitle1" >🎉 73821 new domains added on 22 February 2023 <span><LinkStyle to='/updates'>Read More</LinkStyle></span></UpdatesPageText>
        </UpdatesPageContainer>
        <HomeSectionContainer>
        <HeadingHomeSection sx={{fontWeight: 700}} variant="h4" gutterBottom>
        What Is The Web Built On?
      </HeadingHomeSection>
      <ParagraphHomeSection sx={{marginTop: '26px'}} variant="body1" gutterBottom>
      Uncover the technology stack behind any website. <br />
Use our tools for lead generation, market analysis and competitor research.
      </ParagraphHomeSection>

    
        <InputSearchContainer>
        <BootstrapInput placeholder='Enter URL for lookup' id="bootstrap-input" />
        <SearchButton variant="contained">Search</SearchButton>
        </InputSearchContainer>
        <ScanningInfoHomeSection  variant="body1" gutterBottom>We periodically scan <span style={{fontWeight: 'bold', background: '#A5B4FC', borderRadius:'3px', padding: '3px 6px'}}>213,240,178</span> websites and provide up-to-date information.</ScanningInfoHomeSection>
        </HomeSectionContainer>
        <Marketing />
        <WebsiteContent />
        <Testimonials />
        <FaqSection />
    </Container>
  )
}

export default HomePage