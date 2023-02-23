import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    h5{
      font-weight: 600;
      border-bottom: 1ps solid #fff;
      padding-bottom: 6px;
    }

    p{
      margin-top: 8px;
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
          return <div key={idx}>
            {_item?.icon && <_item.icon />}
            <p>{_item?.title}</p>
          </div>
        })
      }
    </Container>
  )
}

export default FooterCard