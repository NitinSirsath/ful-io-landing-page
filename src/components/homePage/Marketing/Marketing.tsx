import React from 'react'
import bgImage from '../../../assets/marketing/background-domain.svg'
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const TitleHeading = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    marginTop: '60px',
    color: '#222324',
    fontWeight: 700,
    letterSpacing: '0.8px',
  }));

type Props = {}

const Marketing = (props: Props) => {
  return (
    <div background={bgImage}>
        <TitleHeading variant="h5" gutterBottom>
        Power Your Sales And Marketing Teams
      </TitleHeading>
    </div>
  )
}

export default Marketing