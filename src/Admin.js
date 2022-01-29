import React, { useEffect, useState } from 'react'
import { getDatabase, ref, child, get } from 'firebase/database'
import { Box, Typography } from '@mui/material/'
import HB from './i18n'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const Admin = () => {
  const [data, setData] = useState({})
  useEffect(() => {
    const dbRef = ref(getDatabase())
    get(child(dbRef, '/'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val())
          setData(snapshot.val())
        } else {
          console.log('No data available')
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])
  if (!Object.keys(data).length) {
    return (
      <Box>
        <Typography>{HB.noData}</Typography>
      </Box>
    )
  }
  const { g1 } = data
  return (
    <Box>
      <Box>
        <Typography>{HB.groupA}</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>{HB.parentName}</TableCell>
              <TableCell align="right">{HB.studentName}</TableCell>
              <TableCell align="right">{HB.studentId}</TableCell>
              <TableCell align="right">{HB.date}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {Object.keys(g1).map((key) => {
            const obj = g1[key]
            return (
              
                <TableRow
                  key={key}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {obj.parentName}
                  </TableCell>
                  <TableCell align="right">{obj.studentName}</TableCell>
                  <TableCell align="right">{obj.studentId}</TableCell>
                  <TableCell align="right">{new Date(obj.date).toLocaleString('en-GB')}</TableCell>
                </TableRow>
             
            )
          })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Admin
