import React, {Component} from 'react'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-areas: 'a a a b c d'
                       'a a a e f g'
                       'a a a h i k';
  grid-template-columns: 100px auto;
  min-width: 90%;
  min-height: 100vh;
  grid-gap: 2rem;
`

const GridCell = styled.div`
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid gold;
  padding: 15px;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;

  &:nth-child(1) {
    grid-area: a;
    font-size: 24px;
  }

  &:nth-child(2) {
    grid-area: b;
  }

  ${media()}

  span {
    display: block;
    font-size: 12px;
    color: darkgray;
    margin-top: 20px;
  }
`
export function media () {
  let mediaArr = []
  let width = 980
  for (var i = 2; i < 9; i++) {
    mediaArr.push(
      `@media (min-width: ${width - 29}px) and (max-width: ${width}px) {
        &:nth-child(${i}) {
          grid-area: a;
          font-size: 24px;
        }
        &:first-child {
          grid-area: h;
        }
      }`
    )
    width = width - 30
  }
  return mediaArr.join(' ')
}

class App extends Component {
  render () {
    const Wrapper = styled.div`
      background-color: cornsilk;
    `
    return (
      <div className='App'>
        <Wrapper>
          <Grid>
            <GridCell>block 1</GridCell>
            <GridCell>Эта <span>block 2</span></GridCell>
            <GridCell>страница <span>block 3</span></GridCell>
            <GridCell>сверстана <span>block 4</span></GridCell>
            <GridCell>на <span>block 5</span></GridCell>
            <GridCell>гридах <span>block 6</span></GridCell>
            <GridCell>THE <span>block 7</span></GridCell>
            <GridCell>END <span>block 8</span></GridCell>
          </Grid>
        </Wrapper>
      </div>
    )
  }
}

export default App
