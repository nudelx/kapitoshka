import React from 'react'
import {
  TextField,
  Box,
  Typography,
  Checkbox,
  Divider,
  Button,
} from '@mui/material/'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import HB from './i18n'
import { ref, set } from 'firebase/database'
import database from './fb'
const User = () => {
  const [studentName, setStudentName] = React.useState('')
  const [parentName, setParentName] = React.useState('')
  const [studentId, setStudentId] = React.useState('')
  const [date, setDate] = React.useState(Date.now())
  const [terms, setTerms] = React.useState(false)
  const [dataSent, setDataSent] = React.useState(false)

  const obj = {
    studentName,
    parentName,
    studentId,
    date,
    terms,
  }

  const onSave = () => {
    console.log('save', obj)
    set(ref(database, `g1/${obj.studentId}_${obj.date}`), obj)
    setDataSent(true)
  }

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-around'}
      overflow={'hidden'}
    >
      <Box my={3}><Typography variant='h3'>{HB.PageTitle}</Typography></Box>
      <Box my={3}>
        <TextField
          margin="0"
          fullWidth
          required
          label={HB.studentName}
          value={studentName}
          onChange={(e) => setStudentName(e.currentTarget.value)}
        ></TextField>
      </Box>
      <Box my={3}>
        <TextField
          fullWidth
          required
          label={HB.studentId}
          value={studentId}
          onChange={(e) => setStudentId(e.currentTarget.value)}
        ></TextField>
      </Box>
      <Box my={3}>
        <TextField
          fullWidth
          required
          label={HB.parentName}
          value={parentName}
          onChange={(e) => setParentName(e.currentTarget.value)}
        ></TextField>
      </Box>

      <Box my={3}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            views={['year', 'month', 'day']}
            label={HB.date}
            value={date}
            inputFormat="dd/MM/yyyy"
            onChange={(newValue) => {
              console.log('newValue', newValue)
              setDate(newValue)
            }}
            renderInput={(params) => <TextField fullWidth {...params} />}
          />
        </LocalizationProvider>
      </Box>
      <Divider></Divider>
      <Box display={'flex'} flexDirection={'row'} my={3}>
        <Box>
          {' '}
          <Checkbox
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
          />
        </Box>
        <Box>
          <Typography>
            {HB.termText(new Date(date).toLocaleString('en-GB').split(',')[0])}
          </Typography>
        </Box>
      </Box>
      <Box>
        <Button variant="contained" onClick={onSave} disabled={dataSent}>
          {HB.send}{' '}
        </Button>
      </Box>
    </Box>
  )
}

export default User
