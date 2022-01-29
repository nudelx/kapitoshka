import React from 'react'
import { Container, Box } from '@mui/material/'
import User from './User'
import Admin from './Admin'

const Page = () => {
  return (
    <Container>
      <Box py={20}>
        <User></User>
        <Admin></Admin>
      </Box>
    </Container>
  )
}

export default Page
