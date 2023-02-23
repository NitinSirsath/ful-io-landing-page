import React from 'react'
import {Container,CardWrapper,ButtonContainer} from './marketing.style'
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { data } from './marketingData';
import { SearchButton } from '../../../pages/HomePage';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const TitleHeading = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    marginTop: '60px',
    color: '#222324',
    fontWeight: 700,
    letterSpacing: '0.8px',
  }));

  const ColorButton = styled(Button)(() => ({
    textTransform: 'none',
    marginLeft : '20px',
    border: '1px solid #413bde',
   padding: '10px 30px',
    color: '#413bde',
    transition: '.2s ease-in-out',
    backgroundImage: 'linear-gradient(90deg,#f5f4fa,#f1f1f6)',
    '&:hover': {
    //   backgroundColor: purple[700],
    backgroundImage: 'linear-gradient(90deg,#5e68e6,#413bde)',
    color : '#fff',
    },
  }));

const Marketing = () => {
  return (
    <Container background={'/public/background-domain.svg'}>
        <TitleHeading variant="h5" gutterBottom>
        Power Your Sales And Marketing Teams
      </TitleHeading>

      <CardWrapper>
        {data.map((item) => {
          return <div>
            <img src={item.imgsrc} alt="image"  height={150}/>
          </div>
        })}
      </CardWrapper>
      {/* <div style={{borderBottom: '1px solid lightgrey', padding: '30px',margin: '40px 50px', display: 'flex', justifyContent: 'center'}}></div> */}
      <ButtonContainer>
          <SearchButton variant='outlined'>
            Try it free
          </SearchButton>
          <ColorButton variant="contained">How we are better</ColorButton>
      </ButtonContainer>
    </Container>
  )
}

export default Marketing