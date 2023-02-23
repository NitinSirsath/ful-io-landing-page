import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    h5{
      font-weight: 600;
      border-bottom: 1px solid #fff;
      padding-bottom: 6px;
    }

    p{
      margin-top: 8px;
    }
`

const LogoContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;

    p{
      margin-top: 20px;
      cursor: pointer;

      &:hover{
        color: #8c8c8d;
      }
    }

`

type Props = {
  data: {

    title: string,
    icon: string,
  }[],
  heading: string
}

const FooterCard = ({ data, heading }: Props) => {
  console.log(data, 'footer card data')
  return (
    <Container>
      <h5>{heading}</h5>
      {
        data.map((_item: { title: string, icon: string }, idx) => {
          return <LogoContainer  key={idx}>
            {_item?.icon && <_item.icon />}
            <p style={{width: `${_item.icon && '50%'}`}} >{_item?.title}</p>
          </LogoContainer>
        })
      }
    </Container>
  )
}

export default FooterCard