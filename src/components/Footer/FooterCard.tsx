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
    map(arg0: (_item: { title: string; icon: string }, idx: any) => JSX.Element): React.ReactNode
    title : string,
  icon : string,
  },
  heading: string
}

const FooterCard = ({data, heading}: Props) => {
  console.log(data)
  return (
    <Container>
      <h5>{heading}</h5>
      {
        data.map((_item : { title : string, icon : string}, idx) => {
          return  <div key={idx}> 
          {data?.icon && <_item.icon />}
           <p>{data?.title}</p>
          </div>
        })
      }
    </Container>
  )
}

export default FooterCard