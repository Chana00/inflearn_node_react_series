
import './App.css';
import Customer from './components/Customer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react';
import axios from 'axios';



function App() {
  const [Customers, setCustomers] = useState(null)

  useEffect(() => {
    axios.get('/api/customers')
      .then(res => {
        setCustomers(res.data);
      })
      .catch(err => console.log(err));

  }, [])


  return (
    <Paper id="root">
      <Table style={{ minWidth: '1080px', textAlign: 'center' }}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Customers ? Customers.map(c => {
            return (<Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />);
          })
            : ""
          }
        </TableBody>
      </Table>

    </Paper >
  );
}

export default App;
