import React,{useState} from 'react'

import {Container,FeaturesContainer,FeatureArrow} from './navbar.style'
import {Link} from 'react-router-dom'
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Arrow from '../../assets/arrow.png'

const featureData = [
    {
        title : 'Technology Search',
        border : false,
    },
    {
        title : 'Category Search',
        border : true,
    },
    {
        title : 'Email Verification',
        border : false,
    },
    {
        title : 'Profession Domain Data',
        border : false,
    },
    {
        title : 'Technology Compare',
        border : true,
    },
    {
        title : 'Keyword Search',
        border : false,
    },
]


const LoginButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: '#000000',
    fontWeight: 600,
    backgroundColor: 'transparent',
    boxShadow: 'none',
    textTransform: 'none',
    
    '&:hover': {
        backgroundColor: 'transparent',
    },
}));
const SignUpButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: '#5450E2',
    fontWeight: 600,
    backgroundColor: '#fff',
    textTransform: 'none',

    '&:hover': {
        backgroundColor: '#fff',
    },
  }));

  const LinkButton = styled(Link)`
    text-decoration: none;
    font-weight: bolder;
    color: #212020;

    &:hover {
        color: #5450E2;
    }
    
  `

type Props = {}

const Navbar = (props: Props) => {

    const [isFeaturesOpen, setIsFeaturesOpen] = useState(false)

  return (
    <Container>
        <div>Ful.io</div>
        <ul>
          <LinkButton to='/'><li>Home</li></LinkButton> 
          <li onClick={() => setIsFeaturesOpen(preV => !preV)}>Features <FeatureArrow arrowState={isFeaturesOpen}><img src={Arrow} alt="" /></FeatureArrow></li>
          <LinkButton to='/pricing'><li>Pricing</li></LinkButton>  
          <LinkButton to='/blog'><li>Blog</li></LinkButton>
          {
                isFeaturesOpen && (
                    <FeaturesContainer>
                        {
                            featureData.map((item,index) => (
                                <div key={index} style={{borderBottom: item.border ? '1px solid #b7b3b3' : 'none'}}>
                                    <p >{item.title}</p>
                                </div>
                            ))
                        }
                    </FeaturesContainer>
                
                )
          }  
        </ul>
        <div>
            <LoginButton variant="contained">Login</LoginButton>
        <SignUpButton variant="contained">Sign up</SignUpButton>
        </div>
    </Container>
  )
}

export default Navbar