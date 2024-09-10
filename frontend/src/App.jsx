import { useState } from 'react'
import styled from 'styled-components'
import RedButton from './components/RedButton.jsx'


const Container = styled.div `
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  color: #343a40;
`;

function App() {
  const [count, setCount] = useState(0)

  return (
      <Container>
	  <Title> Welcome to Peak Craft</Title>
	  <RedButton />
      </Container>
  )
}

export default App
