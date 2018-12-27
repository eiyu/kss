import styled from 'styled-components'

export const CardsContainer = styled.div`
  background-color: yellow;

  @media(max-width: 640px) {
      max-height: 280px;
      overflow: scroll;
  }
`

CardsContainer.displayName = 'CardsContainer'
