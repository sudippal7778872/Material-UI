import React from 'react'
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import "./App.css";

const App = () => {
  return (
    <div>
      <Button  size="large" variant="outlined" color="error" startIcon={<DeleteIcon/>} >Delete</Button>
    </div>
  )
}

export default App