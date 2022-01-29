import React from 'react'
import { Container, Box, Divider } from '@mui/material/'
import User from './User'
import Admin from './Admin'

const Page = () => {
  return (
    <Container>
      <Box py={20}>
        <User />
        <Box mt={30}>
          <Admin></Admin>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
