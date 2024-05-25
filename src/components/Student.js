import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Student() {
  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const handleclick=(e)=>{
    e.preventDefault();
    const student={name,address};
    fetch("http://localhost:8080/student/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(student)
    }).then(()=>{
        console.log("new student added")
    })
  }

  
  return (
    <div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="student-name"
          label="Student Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="student-address"
          label="Student Address"
          variant="outlined"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Box>
      <Button variant="contained" color="success" onClick={handleclick}>
        Submit
      </Button>
    </div>
  );
}
