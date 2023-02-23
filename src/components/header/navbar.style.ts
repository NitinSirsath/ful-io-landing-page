import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 3.5rem;

    ul{
        display: flex;
        gap: 70px;

        li{
            list-style: none;
            text-decoration: none;
            font-weight: 800;
            font-size: 1rem;

            &:hover{
                color: #5450E2;
            }
        }
    }
`

export const FeatureArrow = styled.span<{arrowState: boolean}>`
    /* transform: rotate(0.5turn); */

    img{
        transform: ${(props) => props.arrowState ? 'rotate(0.5turn)' : 'rotate(0)'}; 
    }
`

export const FeaturesContainer = styled.div`
      position: absolute;
    left: 35%;
    top: 11%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 4px;
    background-color: #fff;
    padding: 10px 0px;
    div{
        margin-top: 7px;
    }

    p{
        padding: 5px;
        margin: 0px 12px;
    }

`